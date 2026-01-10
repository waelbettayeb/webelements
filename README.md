# ElementsKit

ElementsKit is a lightweight reactive UI library that transforms native HTMLElements into reactive elements. Perfect for framework-agnostic applications and web component development.

```tsx
import { signal } from "elements-kit/signals"
import { div } from "elements-kit/builder"
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
