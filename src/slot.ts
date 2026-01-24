export class Slot {
  // Using comments as markers to avoid extra elements in the DOM
  private readonly start = document.createComment("{");
  private readonly end = document.createComment("}");

  slot() {
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
