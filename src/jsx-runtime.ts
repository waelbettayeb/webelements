import { toNode } from "./core";
import { effect, isReactiveValue } from "./signals";
import { createSlot } from "./slot";

type Children = string | Node;

function h(
  type: string,
  props: {
    children?: Children[] | Children;
  } | null,
) {
  const el = document.createElement(type);

  if (!props) {
    return el;
  }

  for (const [key, value] of Object.entries(props)) {
    if (key === "children") continue;

    if (key === "style" && typeof value === "object") {
      Object.assign(el.style, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      effect(() => {
        const event = key.slice(2).toLowerCase();
        el.addEventListener(event, value);
        return () => {
          el.removeEventListener(event, value);
        };
      });
    } else {
      el.setAttribute(key, String(value));
    }
  }

  if (!props.children) {
    return el;
  }

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  for (const child of children) {
    if (isReactiveValue(child)) {
      const slot = createSlot();
      el.appendChild(slot());

      effect(() => {
        const value = toNode(child());
        slot.set(value);
      });
      continue;
    }
    el.appendChild(toNode(child));
  }
  return el;
}

export { h as jsx, h as jsxs, h as jsxDEV };
