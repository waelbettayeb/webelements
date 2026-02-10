class Slot {
  // Using comments as markers to avoid extra elements in the DOM
  private readonly start = document.createComment("{");
  private readonly end = document.createComment("}");

  slot(defaultContent?: string | Node) {
    const fragment = document.createDocumentFragment();
    if (this.isMounted()) {
      const range = document.createRange();
      range.setStartAfter(this.start);
      range.setEndBefore(this.end);
      fragment.appendChild(range.extractContents());
      return fragment;
    }
    fragment.appendChild(this.start);
    fragment.appendChild(this.end);
    if (defaultContent) {
      // TODO: refactor th
      const defaultNode =
        typeof defaultContent === "string"
          ? document.createTextNode(defaultContent)
          : defaultContent;
      fragment.insertBefore(defaultNode, this.end);
    }
    return fragment;
  }

  set(element: HTMLElement) {
    const parent = this.parent();
    if (!parent) return;
    if (this.isSame(element)) return;

    const range = document.createRange();
    range.setStartAfter(this.start);
    range.setEndBefore(this.end);
    range.deleteContents();
    parent.insertBefore(element, this.end);
  }

  parent() {
    return this.isMounted() ? this.start.parentNode : null;
  }

  isMounted() {
    return (
      this.start.parentNode === this.end.parentNode && !!this.start.parentNode
    );
  }

  private isSame(element: HTMLElement) {
    return (
      this.start.nextSibling === element && this.end === element.nextSibling
    );
  }
}

export function createSlot() {
  const instance = new Slot();
  return new Proxy(instance.slot.bind(instance), {
    apply(target, _thisArg, argArray) {
      return target(...argArray);
    },
    get(_target, prop) {
      return instance[prop as keyof Slot];
    },
  }) as Slot & typeof instance.slot;
}
