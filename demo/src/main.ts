import { computed, signal } from "../../src/signals";
import { span, div, button } from "../../src/dom";
import { REF, ON } from "../../src/core";

const value = signal(0);
const doubleValue = computed(() => value() * 2);
const doubledMessage = computed(() => `The double value is: ${doubleValue()}`);

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
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement);
