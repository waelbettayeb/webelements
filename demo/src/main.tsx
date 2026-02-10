import { REF, ON } from "elements-kit";
import { computed, signal } from "elements-kit/signals";
import { span, div, button } from "elements-kit/dom";
import {
  attrChange,
  Attributes,
  ElementLifecycle,
  observedAttributes,
} from "elements-kit/attributes";
import { reactive } from "elements-kit/reactive";
import { createSlot } from "elements-kit/slot";

const value = signal(0);
const doubleValue = computed(() => value() * 2);
const doubledMessage = computed(() => `The double value is: ${doubleValue()}`);

class MyElement extends HTMLElement implements ElementLifecycle {
  #connected = signal(false);

  // {{{ Attributes
  static attributes: Attributes<MyElement> = {
    count(value) {
      this.count = Number(value);
    },
  };
  static observedAttributes: string[] = observedAttributes(MyElement);
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    value: string | null,
  ) {
    attrChange.call(this, name, oldValue, value);
  }
  // }}}

  // {{{ slots
  static slots = ["children"] as const;
  readonly slots = { children: createSlot() };
  // }}}

  @reactive()
  count: number = 0;

  connectedCallback() {
    this.append(
      <div>
        {this.slots.children(<span>Default content</span>)}
        <button onClick={() => this.count++}>
          {computed(() => `Increment ${this.count}`)}
        </button>
      </div>,
    );
    this.#connected(true);
  }
  disconnectedCallback() {
    this.#connected(false);
  }
}
customElements.define("custom-element", MyElement);

const myelement = div()
  [REF]((el) => console.log("Created element:", el))
  .style.backgroundColor("lightblue")
  .style.padding("20px")(
  "Click the button to increment the value:",
  document.createElement("br"),
  button()
    .textContent("Increment")
    [ON]("click", () => {
      value(value() + 1);
    }),
  span()
    .style.display("block")
    .textContent(computed(() => `Current value: ${value()}`)),
  doubledMessage,
  document.createElement("br"),
  document.createElement("custom-element"),
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement);
