import { effect, isReactiveValue } from "./signals";
import { createSlot } from "./slot";

export const DISPOSABLES: unique symbol = Symbol("disposables");
export const DISPOSE: unique symbol = Symbol("dispose");
export const VALUE: unique symbol = Symbol("value");
export const EFFECT: unique symbol = Symbol("effect");

export class ElementBuilder<T extends Element = Element> {
  /** The underlying DOM element */
  private [VALUE]: T;
  // TODO: should we track effects separately?
  /** A set of cleanup functions to run when disposing the element */
  private [DISPOSABLES] = new Set<() => void>();
  /** Dispose the reactive element and run all cleanup functions */
  [DISPOSE]() {
    this[DISPOSABLES].forEach((dispose) => dispose());
    this[DISPOSABLES].clear();
  }
  [EFFECT](fn: () => void) {
    this[DISPOSABLES].add(effect(fn));
    return this;
  }
  private constructor(el: T) {
    this[VALUE] = el;
  }

  static create<T extends Element>(el: T): ReactiveElement<T> {
    const builder = new ElementBuilder<T>(el);
    return new Proxy(builder.ref, {
      apply(_target, _thisArg, argArray) {
        return Reflect.apply(builder.ref, builder, argArray);
      },
      get(_target, key, receiver) {
        const el = builder[VALUE];
        if (key in builder) {
          return Reflect.get(builder, key, receiver);
        }

        return setterOrValue(receiver as ElementBuilder<T>, el, key);
      },
    }) as unknown as ReactiveElement<T>;
  }

  children(
    ...children: ReactiveValue<ElementBuilder | Node | string | number>[]
  ) {
    const el = this[VALUE];
    if (children.length === 0) return el;

    children.forEach((child) => {
      if (isReactiveValue(child)) {
        const slot = createSlot();
        el.appendChild(slot());

        return this[EFFECT](() => {
          const value = toNode(child());
          slot.set(value);
        });
      }
      el.appendChild(toNode(child));
    });

    return el;
  }

  ref(): T;
  ref(apply: (ref: T) => void | (() => void)): this;
  ref(apply?: (ref: T) => void | (() => void)) {
    if (!apply) return this[VALUE];
    const result = apply(this[VALUE]);
    if (typeof result === "function") {
      this[DISPOSABLES].add(result);
    }
    return this;
  }

  on(
    eventType: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    this[VALUE].addEventListener(eventType, listener, options);
    this[DISPOSABLES].add(() => {
      this[VALUE].removeEventListener(eventType, listener, options);
    });
    return this;
  }
}

class ChainContext<T> {
  readonly builder: ElementBuilder;
  readonly chain: T;
  readonly key: string | symbol;
  constructor(builder: ElementBuilder, chain: T, key: string | symbol) {
    this.builder = builder;
    this.chain = chain;
    this.key = key;
  }

  setter(value) {
    if (isReactiveValue(value)) {
      this.builder[DISPOSABLES].add(
        effect(() => {
          this.chain[this.key] = value();
        }),
      );
      return this.builder;
    }
    this.chain[this.key] = value;
    return this.builder;
  }
}

function setterOrValue<T extends object = object>(
  builder: ElementBuilder,
  chainParent: T,
  key: string | symbol,
) {
  const chain = chainParent[key];
  const context = new ChainContext(builder, chainParent, key);

  return new Proxy(context.setter.bind(context), {
    apply(target, _thisArg, argArray) {
      return target.apply(builder, argArray);
    },
    get(_, subkey) {
      if (isObject(chain)) {
        return setterOrValue(builder, chain, subkey);
      }
      return chain[subkey];
    },
  });
}

export function toNode(c: ElementBuilder | Node | Element | string | number) {
  if (typeof c === "string" || typeof c === "number") {
    return document.createTextNode(String(c));
  }
  return c[VALUE] ?? c;
}

function isObject(v: unknown): v is Record<string | symbol, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function reactive<T extends Element>(el: T) {
  return ElementBuilder.create(el);
}

export type ReactiveElement<T extends Element> = ElementBuilder<T> &
  ReactiveBuilder<ElementBuilder<T>, T>;

// NOTE: typescript doens't allow to extract setter argument types directly
// check: https://github.com/microsoft/TypeScript/issues/21759
export type ReactiveValue<T> = (() => T) | T;

type ReactiveArray<T extends any[]> = {
  [K in keyof T]: ReactiveValue<T[K]> | T[K];
};

/**
 * Filter keys that are writable (exclude readonly and getter-only).
 */
type WritableKeys<T> = {
  [K in keyof T]: (<U>() => U extends { [Q in K]: T[K] } ? 1 : 2) extends <
    U,
  >() => U extends { readonly [Q in K]: T[K] } ? 1 : 2
    ? never
    : K;
}[keyof T];

/**
 * Extracts the object chaining part of ReactiveBuilder.
 * Used for properties like `style` where you can do both:
 *   .style("padding: 20px;")     // setter
 *   .style.padding("20px")       // sub-property chaining
 */
export type ReactiveChain<R, T> = T extends object
  ? {
      [K in WritableKeys<T>]: ReactiveBuilder<R, T[K]>;
    }
  : {};

export type ReactiveBuilder<R, T = R> = T extends (...args: infer U) => unknown
  ? (...value: ReactiveArray<U>) => R
  : (value?: ReactiveValue<T>) => R;
