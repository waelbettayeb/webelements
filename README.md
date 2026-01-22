# ElementsKit

ElementsKit is a lightweight reactive UI library that transforms native HTMLElements into reactive elements. Perfect for framework-agnostic applications and web component development.

```tsx
import { signal } from "elements-kit/signals"
import { div } from "elements-kit/dom"
import { ReactiveElement, element } from "elements-kit"

const externalSignal = signal("something")

function Elements(property1, property2, children): ReactiveElement{
    const value = signal(0)
    return div()
        .style.color("green")
        .title("tooltip")(
            header("This is my header"),
            main("Second children"),
            b(value),
            span(externalSignal),
            ...children
        )
}

document.body.appendChild(element(Elements))
```

## Principles

- **Direct DOM Manipulation** - Work directly with native HTMLElements, no virtual DOM or diffing overhead
- **Zero Magic** - Explicit, predictable behavior with no hidden transformations or implicit state management
- **No Build Step Required** - Use vanilla JavaScript/TypeScript without JSX transpilation or custom syntax
- **Framework-Agnostic** - Integrate seamlessly with any existing project or use standalone
- **Reactive by Design** - Fine-grained reactivity through signals that automatically update the DOM
- **Type-Safe** - Full TypeScript support with comprehensive type inference
- **Minimal Abstraction** - Thin layer over standard DOM APIs, learn once and use anywhere
- **Composable** - Build complex UIs from simple, reusable reactive elements

## TO-DO

- [ ] Complete type safety
- [ ] Function calling (like classList reactive adder, attributes)
- [ ] Ref access
- [ ] Async signal
- [ ] URLPattern signal <https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API>
- [ ] document reactive element (set and get cookies, delegate events)

- [ ] Context?
- [ ] Conditional rendering?
- [ ] List rendering?
