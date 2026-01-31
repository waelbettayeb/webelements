export interface AttrChangeHandler<T> {
  (this: T, value: string | null, oldValue?: string | null): void;
}

/**
 * handle attribute change based on static `attributes` map defined on the class
 * @example
 * ```ts
 * class MyElement extends HTMLElement {
 *   static attributes: Attributes<MyElement> = {
 *     count(value) {
 *       this.#count = Number(value);
 *     },
 *   };
 *   static observedAttributes: string[] = Object.keys(MyElement.attributes);
 *   attributeChangedCallback = attributeChangedCallback.bind(this);
 * }
 * ```
 */
export function attributeChangedCallback<
  T extends {
    constructor: {
      attributes: Record<string, AttrChangeHandler<T>>;
    };
  },
>(this: T, name: string, oldValue: string | null, newValue: string | null) {
  let cls: any = this.constructor;
  while (cls) {
    if (cls.attributes && name in cls.attributes) {
      cls.attributes[name].call(this, newValue, oldValue);
      return true;
    }
    cls = Object.getPrototypeOf(cls);
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
