export interface AttrChangeHandler<T> {
  (this: T, value: string | null, oldValue?: string | null): void;
}

/**
 * handle attribute change based on static `attributes` map defined on the class
 * @example
 * ```ts
 * class MyElement extends HTMLElement {
 *   static attributes = {
 *     count(this: MyElement, value: string | null, oldValue?: string | null) {
 *       this.#count = Number(value);
 *     },
 *   };
 * }
 * ```
 */
export function attributeChangedCallback<
  T extends {
    constructor: {
      attributes: Record<string, AttrChangeHandler<T>>;
    };
  },
>(this: T, name: string, value: string | null, oldValue?: string | null) {
  const cls = this.constructor;
  if (name in cls.attributes) {
    cls.attributes[name].call(this, value, oldValue);
    return true;
  }
}

export type Attributes<T> = Record<string, AttrChangeHandler<T>>;

export interface CustomElementLifecycle {
  connectedCallback(): void;
  disconnectedCallback(): void;
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void;
  adoptedCallback?(): void; // This one is rarely used, so optional
}
