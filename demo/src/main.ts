import { computed, signal } from "../../src/signals";
import { span, div, button } from "../../src/dom";

const value = signal(0);

const myelement = div()
  .style.backgroundColor("lightblue")
  .style.padding("20px")(
  button()
    .textContent("Increment")
    .on("click", () => {
      value(value() + 1);
    }),
  span()
    .style.marginLeft("10px")
    .textContent(computed(() => `Current value: ${value()}`)),
);

const interval = setInterval(() => {
  console.log("incrementing", value());
  value(value() + 1);
}, 1000);

document.getElementById("app")?.appendChild(myelement);
