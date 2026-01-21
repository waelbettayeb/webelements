import { effect, isReactiveValue } from "./signals";
import { ReactiveBuilder } from "./types";

export const DISPOSABLES: unique symbol = Symbol("disposables");
export const DISPOSE: unique symbol = Symbol("dispose");
export const ELEMENT: unique symbol = Symbol("element");
export const BUILD_ELEMENT: unique symbol = Symbol("build_element");
export const EFFECT: unique symbol = Symbol("effect");

type ReactiveElement<T extends Element> = ElementBuilder<T> &
  ReactiveBuilder<ElementBuilder<T>, T>;

class ElementBuilder<T extends Element = Element> {
  /** The underlying DOM element */
  [ELEMENT]: T;
  // TODO: should we track effects separately?
  /** A set of cleanup functions to run when disposing the element */
  private [DISPOSABLES] = new Set<() => void>();
  /** Dispose the reactive element and run all cleanup functions */
  [DISPOSE]() {
    this[DISPOSABLES].forEach((dispose) => dispose());
    this[DISPOSABLES].clear();
  }
  private constructor(el: T) {
    this[ELEMENT] = el;
  }

  [BUILD_ELEMENT](
    this: ElementBuilder,
    ...children: (ElementBuilder | Element)[]
  ) {
    const el = this[ELEMENT];
    if (children.length === 0) return el;

    const _children = children.map((c) => c[ELEMENT] ?? c);
    el.replaceChildren(..._children);
    return el;
  }

  static create<T extends Element>(el: T): ReactiveElement<T> {
    const builder = new ElementBuilder<T>(el);
    return new Proxy(builder[BUILD_ELEMENT], {
      apply(_target, _thisArg, argArray) {
        return builder[BUILD_ELEMENT](...argArray);
      },
      get(_target, key, receiver) {
        const el = builder[ELEMENT];
        if (!(key in el)) {
          return Reflect.get(builder, key, receiver);
        }

        return setterOrValue(receiver as ElementBuilder<T>, el, key);
      },
    }) as unknown as ReactiveElement<T>;
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

function isObject(v: unknown): v is Record<string | symbol, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function reactive<T extends Element>(el: T) {
  return ElementBuilder.create(el);
}
