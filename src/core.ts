import { effect, isReactiveValue } from "./signals";

export const DISPOSE: unique symbol = Symbol("dispose");
export const ELEMENT: unique symbol = Symbol("element");
export const EFFECT: unique symbol = Symbol("effect");

function isObject(v: unknown): v is Record<string | symbol, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function dispose(v: ReactiveElement) {
  v[DISPOSE]();
}

export function element<T extends Element>(v: ReactiveElement<T>): T {
  return v[ELEMENT]();
}

export interface ReactiveElement<T extends Element = Element> {
  [DISPOSE](): void;
  [EFFECT](fn: () => void): void;
  [ELEMENT](): T;
}

export function reactive<T extends Element>(el: T): ReactiveElement<T> {
  const effects = new Set<() => () => void>();
  const disposables = new Set<() => void>();

  const dispatchEffects = () => {
    effects.forEach((effect) => disposables.add(effect()));
    effects.clear();
  };
  const dispose = () => {
    disposables.forEach((dispose) => dispose());
    disposables.clear();
  };
  const proxy = new Proxy(el, {
    get(target, key: keyof Element, receiver) {
      if ("dispose" in Symbol && key === Symbol.dispose) {
        return dispose;
      }
      if ((key as unknown as symbol) === DISPOSE) {
        return dispose;
      }
      if ((key as unknown as symbol) === EFFECT) {
        return (fn: () => () => void) => {
          effects.add(fn);
        };
      }
      if ((key as unknown as symbol) === ELEMENT) {
        return () => {
          dispatchEffects();
          return target;
        };
      }
      const property = target[key];
      if (typeof property === "function") return property;

      // if (isObject(property)) {
      //   return objectOrSetter(receiver, target, key);
      // }

      return (...args) => {
        if (args.length === 0) {
          return receiver;
        }
        const value = args[0];
        if (isReactiveValue(value)) {
          effects.add(() =>
            effect(() => {
              console.log("updating", key.toString(), "to", value());
              // @ts-ignore
              el[key] = value();
            })
          );
        } else {
          // @ts-ignore
          el[key] = value;
        }
        return receiver;
      };
    },
  });

  return proxy as unknown as ReactiveElement<T>;
}

function objectOrSetter<T extends Record<string | symbol, unknown>>(
  root: ReactiveElement,
  obj: T,
  key: keyof T
) {
  const property = obj[key as keyof T];
  function handler(...args) {
    if (args.length === 0) {
      return root;
    }
    const value = args[0];
    if (isReactiveValue(value)) {
      root[EFFECT](() => {
        // @ts-ignore
        obj[key] = value();
      });
    } else {
      obj[key] = value;
    }
    return root;
  }
  return new Proxy(handler, {
    get(_, subkey) {
      if (isObject(property)) {
        return objectOrSetter(root, property, subkey);
      }
      return obj[subkey as keyof T];
    },
    apply(_, __, argArray) {
      return handler(...argArray);
    },
  });
}
