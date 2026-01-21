import { computed, signal } from "../../src/signals";
import { span, div } from "../../src/dom";

const value = signal(0);

const myelement = div()
  .textContent(computed(() => `The value is: ${value()}`))
  .style.backgroundColor("lightblue")
  .style.padding("20px");

const child = span().textContent(
  computed(() => `The span value is: ${value()}`),
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement(child));
