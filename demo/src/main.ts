import { computed, signal } from "../../src/signals";
import { div, span, button, h1, h2, p, input, pre, code, header, canvas, nav, a, ul, li } from "../../src/dom";
import { REF, ON, VALUE, when, show, each, createContext, provide, inject, updateContext } from "../../src/core";

// ============================================
// Example Registry
// ============================================
type Example = {
  id: string;
  title: string;
  icon: string;
  component: () => HTMLElement;
};

const activeExampleId = signal("counter");

// ============================================
// Example 1: Counter with Signals
// ============================================
function counterExample() {
  const count = signal(0);
  const doubleCount = computed(() => count() * 2);

  return div().className("example-card")(
    h2()("Reactive Counter"),
    p().className("description")("Signals automatically update the DOM when values change. Computed values derive from signals."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("16px")(
          button()
            .textContent("-")
            .style.width("40px")
            [ON]("click", () => count(count() - 1)),
          span()
            .style.fontSize("2rem")
            .style.fontWeight("bold")
            .style.minWidth("60px")
            .style.textAlign("center")
            .textContent(computed(() => String(count()))),
          button()
            .textContent("+")
            .style.width("40px")
            [ON]("click", () => count(count() + 1)),
          span().style.color("#888").style.marginLeft("20px")(
            "Double: ",
            span().textContent(computed(() => String(doubleCount())))
          )
        )
    ),
    pre().className("code-block")(
      code()(`const count = signal(0);
const doubleCount = computed(() => count() * 2);

button()[ON]("click", () => count(count() + 1));
span().textContent(computed(() => String(count())));`)
    )
  );
}

// ============================================
// Example 2: Two-way Binding
// ============================================
function bindingExample() {
  const text = signal("Hello, ElementsKit!");

  return div().className("example-card")(
    h2()("Two-way Binding"),
    p().className("description")("Bind input values to signals for reactive form handling."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("12px")(
          input()
            .type("text")
            .value(text())
            .style.width("100%")
            [ON]("input", (e) => text((e.target as HTMLInputElement).value)),
          div()
            .style.display("flex")
            .style.justifyContent("space-between")(
              span().style.fontSize("1.1rem")(
                "Preview: ",
                span().textContent(computed(() => text()))
              ),
              span().className("badge").textContent(computed(() => `${text().length} chars`))
            )
        )
    ),
    pre().className("code-block")(
      code()(`const text = signal("Hello, ElementsKit!");

input()
  .value(text())
  [ON]("input", (e) => text(e.target.value));

span().textContent(computed(() => text()));`)
    )
  );
}

// ============================================
// Example 3: Dynamic Styles
// ============================================
function styleExample() {
  const hue = signal(180);
  const size = signal(100);

  return div().className("example-card")(
    h2()("Dynamic Styles"),
    p().className("description")("Reactive style properties update smoothly with signal changes."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("24px")(
          div()
            .style.width(computed(() => `${size()}px`))
            .style.height(computed(() => `${size()}px`))
            .style.backgroundColor(computed(() => `hsl(${hue()}, 70%, 50%)`))
            .style.borderRadius("12px")
            .style.transition("all 0.3s ease")
            .style.boxShadow(computed(() => `0 8px 32px hsla(${hue()}, 70%, 50%, 0.4)`)),
          div()
            .style.display("flex")
            .style.flexDirection("column")
            .style.gap("12px")(
              div()(
                span().style.display("block").style.marginBottom("4px")(
                  "Hue: ",
                  span().textContent(computed(() => String(hue())))
                ),
                input()
                  .type("range")
                  .min("0")
                  .max("360")
                  .value(String(hue()))
                  .style.width("200px")
                  [ON]("input", (e) => hue(Number((e.target as HTMLInputElement).value)))
              ),
              div()(
                span().style.display("block").style.marginBottom("4px")(
                  "Size: ",
                  span().textContent(computed(() => `${size()}px`))
                ),
                input()
                  .type("range")
                  .min("50")
                  .max("150")
                  .value(String(size()))
                  .style.width("200px")
                  [ON]("input", (e) => size(Number((e.target as HTMLInputElement).value)))
              )
            )
        )
    ),
    pre().className("code-block")(
      code()(`const hue = signal(180);
const size = signal(100);

div()
  .style.width(computed(() => \`\${size()}px\`))
  .style.backgroundColor(computed(() => \`hsl(\${hue()}, 70%, 50%)\`));`)
    )
  );
}

// ============================================
// Example 4: Element Reference
// ============================================
function refExample() {
  const message = signal("Draw on the canvas!");
  let canvasEl: HTMLCanvasElement | null = null;

  return div().className("example-card")(
    h2()("Element Reference [REF]"),
    p().className("description")("Access the underlying DOM element for advanced use cases like canvas drawing."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("12px")(
          canvas()
            .width(400)
            .height(120)
            .style.borderRadius("8px")
            .style.backgroundColor("#1a1a2e")
            .style.cursor("crosshair")
            [REF]((el) => {
              canvasEl = el;
              const ctx = el.getContext("2d");
              if (!ctx) return;

              ctx.strokeStyle = "#00d9ff";
              ctx.lineWidth = 2;
              ctx.lineCap = "round";

              let isDrawing = false;
              let lastX = 0;
              let lastY = 0;

              el.addEventListener("mousedown", (e) => {
                isDrawing = true;
                [lastX, lastY] = [e.offsetX, e.offsetY];
                message("Drawing...");
              });

              el.addEventListener("mousemove", (e) => {
                if (!isDrawing) return;
                ctx.beginPath();
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                [lastX, lastY] = [e.offsetX, e.offsetY];
              });

              el.addEventListener("mouseup", () => {
                isDrawing = false;
                message("Nice drawing!");
              });

              el.addEventListener("mouseleave", () => {
                isDrawing = false;
              });
            }),
          div()
            .style.display("flex")
            .style.justifyContent("space-between")
            .style.alignItems("center")(
              span().textContent(computed(() => message())),
              button()
                .textContent("Clear")
                [ON]("click", () => {
                  if (canvasEl) {
                    const ctx = canvasEl.getContext("2d");
                    ctx?.clearRect(0, 0, 400, 120);
                    message("Canvas cleared!");
                  }
                })
            )
        )
    ),
    pre().className("code-block")(
      code()(`canvas()
  [REF]((el) => {
    const ctx = el.getContext("2d");
    // Direct DOM access for canvas drawing
    el.addEventListener("mousemove", draw);
  });`)
    )
  );
}

// ============================================
// Example 5: Conditional Display
// ============================================
function conditionalExample() {
  const isVisible = signal(true);
  const toggleCount = signal(0);

  return div().className("example-card")(
    h2()("Conditional Display"),
    p().className("description")("Use reactive styles for smooth show/hide animations."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          div()
            .style.display("flex")
            .style.alignItems("center")
            .style.gap("12px")(
              button()
                .textContent(computed(() => isVisible() ? "Hide Box" : "Show Box"))
                [ON]("click", () => {
                  isVisible(!isVisible());
                  toggleCount(toggleCount() + 1);
                }),
              span().style.color("#888")(
                "Toggled ",
                span().textContent(computed(() => String(toggleCount()))),
                " times"
              )
            ),
          div()
            .style.opacity(computed(() => isVisible() ? "1" : "0"))
            .style.transform(computed(() => isVisible() ? "translateY(0)" : "translateY(-10px)"))
            .style.transition("all 0.3s ease")
            .style.padding("20px")
            .style.background("rgba(0, 217, 255, 0.1)")
            .style.borderRadius("8px")
            .style.border("1px solid rgba(0, 217, 255, 0.3)")(
              "This box can be toggled!"
            )
        )
    ),
    pre().className("code-block")(
      code()(`const isVisible = signal(true);

button()[ON]("click", () => isVisible(!isVisible()));

div()
  .style.opacity(computed(() => isVisible() ? "1" : "0"))
  .style.transform(computed(() =>
    isVisible() ? "translateY(0)" : "translateY(-10px)"
  ));`)
    )
  );
}

// ============================================
// Example 6: Color Picker
// ============================================
function colorPickerExample() {
  const color = signal("#00d9ff");
  const text = signal("Styled Text");

  return div().className("example-card")(
    h2()("Nested Style Properties"),
    p().className("description")("Chain nested properties like .style.color() for intuitive DOM manipulation."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.alignItems("center")
        .style.gap("20px")(
          div()
            .style.padding("16px 24px")
            .style.borderRadius("8px")
            .style.fontSize("1.2rem")
            .style.fontWeight("bold")
            .style.color(computed(() => color()))
            .style.border(computed(() => `2px solid ${color()}`))
            .textContent(computed(() => text())),
          div()
            .style.display("flex")
            .style.flexDirection("column")
            .style.gap("8px")(
              input()
                .type("text")
                .value(text())
                .placeholder("Enter text...")
                [ON]("input", (e) => text((e.target as HTMLInputElement).value)),
              input()
                .type("color")
                .value(color())
                .style.width("100%")
                .style.height("36px")
                .style.cursor("pointer")
                [ON]("input", (e) => color((e.target as HTMLInputElement).value))
            )
        )
    ),
    pre().className("code-block")(
      code()(`const color = signal("#00d9ff");

div()
  .style.color(computed(() => color()))
  .style.border(computed(() => \`2px solid \${color()}\`));

input()
  .type("color")
  [ON]("input", (e) => color(e.target.value));`)
    )
  );
}

// ============================================
// Example 7: Conditional Rendering
// ============================================
function conditionalRenderingExample() {
  const isLoggedIn = signal(false);
  const showDetails = signal(true);

  return div().className("example-card")(
    h2()("Conditional Rendering"),
    p().className("description")("Use when() to swap elements and show() to toggle visibility based on signals."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("24px")(
          // when() example
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("when() - Element Swapping"),
            div()
              .style.display("flex")
              .style.alignItems("center")
              .style.gap("16px")(
                when(
                  () => isLoggedIn(),
                  () => div()
                    .style.display("flex")
                    .style.alignItems("center")
                    .style.gap("12px")(
                      span()
                        .style.padding("8px 16px")
                        .style.background("rgba(0, 217, 255, 0.1)")
                        .style.borderRadius("8px")
                        .style.border("1px solid rgba(0, 217, 255, 0.3)")("Welcome back, User!"),
                      button()
                        .textContent("Logout")
                        [ON]("click", () => isLoggedIn(false))
                    ),
                  () => button()
                    .textContent("Login")
                    .style.padding("8px 20px")
                    [ON]("click", () => isLoggedIn(true))
                )
              )
          ),
          // show() example
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("show() - Visibility Toggle"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("12px")(
                button()
                  .textContent(computed(() => showDetails() ? "Hide Details" : "Show Details"))
                  .style.alignSelf("flex-start")
                  [ON]("click", () => showDetails(!showDetails())),
                show(
                  () => showDetails(),
                  div()
                    .style.padding("16px")
                    .style.background("rgba(0, 217, 255, 0.1)")
                    .style.borderRadius("8px")
                    .style.border("1px solid rgba(0, 217, 255, 0.3)")(
                      p().style.margin("0")("This content can be toggled with show()."),
                      p().style.margin("8px 0 0 0").style.color("#888")("Unlike when(), the element stays in the DOM but is hidden with display: none.")
                    )
                )
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`// when() - swaps elements in/out of DOM
const isLoggedIn = signal(false);

when(
  () => isLoggedIn(),
  () => span()("Welcome back!"),
  () => button().textContent("Login")
);

// show() - toggles visibility (display: none)
const visible = signal(true);

show(
  () => visible(),
  div()("I can be hidden")
);`)
    )
  );
}

// ============================================
// Example 8: Reactive Children (Signal Children)
// ============================================
function reactiveChildrenExample() {
  const message = signal("Hello");
  const counter = signal(0);

  return div().className("example-card")(
    h2()("Reactive Children"),
    p().className("description")("Pass signals directly as children - they update automatically when the signal changes."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("20px")(
          // Dynamic text content
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Dynamic Text with Signals as Children"),
            div()
              .style.display("flex")
              .style.alignItems("center")
              .style.gap("12px")(
                button()
                  .textContent("-")
                  .style.width("36px")
                  [ON]("click", () => counter(counter() - 1)),
                span().style.fontSize("1.1rem")(
                  "Count: ",
                  computed(() => String(counter())),
                  " | Doubled: ",
                  computed(() => String(counter() * 2))
                ),
                button()
                  .textContent("+")
                  .style.width("36px")
                  [ON]("click", () => counter(counter() + 1))
              )
          ),
          // Message input demo
          div()(
            div()
              .style.marginBottom("12px")
              .style.fontWeight("bold")("Inline Signal Interpolation"),
            div()
              .style.display("flex")
              .style.flexDirection("column")
              .style.gap("12px")(
                input()
                  .type("text")
                  .value(message())
                  .placeholder("Type a message...")
                  [ON]("input", (e) => message((e.target as HTMLInputElement).value)),
                div()
                  .style.padding("12px")
                  .style.background("rgba(59, 130, 246, 0.1)")
                  .style.borderRadius("8px")
                  .style.border("1px solid rgba(59, 130, 246, 0.3)")(
                    "You typed: ",
                    computed(() => message()),
                    " (",
                    computed(() => String(message().length)),
                    " characters)"
                  )
              )
          )
        )
    ),
    pre().className("code-block")(
      code()(`const counter = signal(0);
const message = signal("Hello");

// Signals as direct children - auto-update!
span()(
  "Count: ",
  computed(() => String(counter())),
  " | Doubled: ",
  computed(() => String(counter() * 2))
);

// Mix static and reactive children
div()(
  "You typed: ",
  computed(() => message()),
  " (",
  computed(() => String(message().length)),
  " characters)"
);`)
    )
  );
}

// ============================================
// Example 9: List Rendering
// ============================================
function listRenderingExample() {
  const items = signal([
    { id: 1, text: "Learn ElementsKit", done: false },
    { id: 2, text: "Build something awesome", done: false },
    { id: 3, text: "Share with others", done: true },
  ]);
  const newItemText = signal("");
  let nextId = 4;

  const addItem = () => {
    const text = newItemText().trim();
    if (text) {
      items([...items(), { id: nextId++, text, done: false }]);
      newItemText("");
    }
  };

  const toggleItem = (id: number) => {
    items(items().map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  const removeItem = (id: number) => {
    items(items().filter(item => item.id !== id));
  };

  return div().className("example-card")(
    h2()("List Rendering"),
    p().className("description")("Use each() to render reactive lists with efficient keyed updates."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          // Add item form
          div()
            .style.display("flex")
            .style.gap("8px")(
              input()
                .type("text")
                .placeholder("Add a new item...")
                .value(newItemText())
                .style.flex("1")
                [ON]("input", (e) => newItemText((e.target as HTMLInputElement).value))
                [ON]("keydown", (e) => {
                  if (e.key === "Enter") addItem();
                }),
              button()
                .textContent("Add")
                [ON]("click", addItem)
            ),
          // List items
          ul()
            .style.listStyle("none")
            .style.padding("0")
            .style.margin("0")(
              each(
                () => items(),
                (item) => li()
                  .style.display("flex")
                  .style.alignItems("center")
                  .style.justifyContent("space-between")
                  .style.padding("12px")
                  .style.marginBottom("8px")
                  .style.background("rgba(59, 130, 246, 0.1)")
                  .style.borderRadius("8px")
                  .style.border("1px solid rgba(59, 130, 246, 0.2)")(
                    div()
                      .style.display("flex")
                      .style.alignItems("center")
                      .style.gap("12px")(
                        input()
                          .type("checkbox")
                          .checked(item.done)
                          [ON]("change", () => toggleItem(item.id)),
                        span()
                          .style.textDecoration(item.done ? "line-through" : "none")
                          .style.opacity(item.done ? "0.6" : "1")
                          .textContent(item.text)
                      ),
                    button()
                      .textContent("×")
                      .style.background("transparent")
                      .style.color("#888")
                      .style.fontSize("1.2rem")
                      .style.padding("0 8px")
                      [ON]("click", () => removeItem(item.id))
                  ),
                { key: (item) => item.id }
              )
            ),
          // Stats
          div()
            .style.color("#888")
            .style.fontSize("0.875rem")(
              computed(() => {
                const total = items().length;
                const done = items().filter(i => i.done).length;
                return `${done}/${total} completed`;
              })
            )
        )
    ),
    pre().className("code-block")(
      code()(`const items = signal([
  { id: 1, text: "Learn ElementsKit", done: false },
  { id: 2, text: "Build something", done: true },
]);

ul()(
  each(
    () => items(),
    (item) => li()(
      span().textContent(item.text),
      button().textContent("×")
        [ON]("click", () => removeItem(item.id))
    ),
    { key: (item) => item.id }
  )
);`)
    )
  );
}

// ============================================
// Example 10: Context API
// ============================================

// Define a theme context
const ThemeContext = createContext<"light" | "dark">("light");

function contextExample() {
  // Container where we'll provide context
  const container = div().className("example-card");

  // Provide initial theme
  provide(ThemeContext, "dark", container);

  // Child component that uses context
  function ThemedBox() {
    const theme = inject(ThemeContext);

    return div()
      .style.padding("20px")
      .style.borderRadius("8px")
      .style.transition("all 0.3s ease")
      .style.background(computed(() =>
        theme() === "dark" ? "rgba(30, 30, 40, 0.9)" : "rgba(240, 240, 245, 0.9)"
      ))
      .style.color(computed(() =>
        theme() === "dark" ? "#e5e5e5" : "#1a1a1a"
      ))
      .style.border(computed(() =>
        theme() === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)"
      ))(
        div()
          .style.fontWeight("bold")
          .style.marginBottom("8px")(
            "Current theme: ",
            computed(() => theme())
          ),
        p().style.margin("0").style.opacity("0.8")(
          "This box reads the theme from context. No prop drilling needed!"
        )
      );
  }

  // Another nested child
  function NestedComponent() {
    const theme = inject(ThemeContext);

    return div()
      .style.marginTop("12px")
      .style.padding("12px")
      .style.borderRadius("6px")
      .style.background(computed(() =>
        theme() === "dark" ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)"
      ))
      .style.border(computed(() =>
        theme() === "dark" ? "1px solid rgba(59, 130, 246, 0.4)" : "1px solid rgba(59, 130, 246, 0.3)"
      ))(
        span()
          .style.fontSize("0.875rem")(
            "Nested component also reads theme: ",
            span()
              .style.fontWeight("bold")
              .textContent(computed(() => theme()))
          )
      );
  }

  return container(
    h2()("Context API"),
    p().className("description")("Share state between components without prop drilling using provide/inject."),
    div().className("demo-area")(
      div()
        .style.display("flex")
        .style.flexDirection("column")
        .style.gap("16px")(
          div()
            .style.display("flex")
            .style.gap("8px")(
              button()
                .textContent("Light Theme")
                [ON]("click", () => updateContext(ThemeContext, "light")),
              button()
                .textContent("Dark Theme")
                [ON]("click", () => updateContext(ThemeContext, "dark"))
            ),
          ThemedBox(),
          NestedComponent()
        )
    ),
    pre().className("code-block")(
      code()(`// Create a context with default value
const ThemeContext = createContext<"light" | "dark">("light");

// Provide context to a subtree
const app = div();
provide(ThemeContext, "dark", app);

// Inject in any child component
function ThemedBox() {
  const theme = inject(ThemeContext);

  return div()
    .style.background(computed(() =>
      theme() === "dark" ? "#1a1a1a" : "#fff"
    ));
}

// Update context value
button()[ON]("click", () => updateContext(ThemeContext, "light"));`)
    )
  );
}

// ============================================
// Example Registry
// ============================================
const examples: Example[] = [
  { id: "counter", title: "Reactive Counter", icon: "⚡", component: counterExample },
  { id: "binding", title: "Two-way Binding", icon: "🔗", component: bindingExample },
  { id: "styles", title: "Dynamic Styles", icon: "🎨", component: styleExample },
  { id: "colors", title: "Color Picker", icon: "🌈", component: colorPickerExample },
  { id: "toggle", title: "Conditional Display", icon: "👁", component: conditionalExample },
  { id: "conditional", title: "Conditional Rendering", icon: "🔀", component: conditionalRenderingExample },
  { id: "reactive-children", title: "Reactive Children", icon: "🧩", component: reactiveChildrenExample },
  { id: "list-rendering", title: "List Rendering", icon: "📋", component: listRenderingExample },
  { id: "context", title: "Context API", icon: "🔄", component: contextExample },
  { id: "canvas", title: "Canvas Drawing", icon: "✏️", component: refExample },
];

// ============================================
// Header Component
// ============================================
function headerComponent() {
  return header().className("top-header")(
    div().className("logo")(
      button()
        .className("menu-toggle")
        .textContent("☰")
        [ON]("click", () => {
          const sidebar = document.querySelector(".sidebar");
          sidebar?.classList.toggle("open");
        }),
      div().className("logo-icon")("E"),
      h1()("ElementsKit")
    ),
    div().className("header-links")(
      a()
        .href("https://github.com/waelbettayeb/elements-kit")
        .target("_blank")
        .textContent("GitHub"),
      a()
        .href("#")
        .textContent("Docs")
    )
  );
}

// ============================================
// Sidebar Component
// ============================================
function sidebarComponent() {
  return nav().className("sidebar")(
    div().className("sidebar-title")("Examples"),
    div().className("sidebar-nav")(
      ...examples.map((example) =>
        div()
          .className(computed(() =>
            `nav-item${activeExampleId() === example.id ? " active" : ""}`
          ))
          [ON]("click", () => {
            activeExampleId(example.id);
            // Close sidebar on mobile after selection
            const sidebar = document.querySelector(".sidebar");
            if (window.innerWidth <= 768) {
              sidebar?.classList.remove("open");
            }
          })(
            span().className("nav-arrow").textContent("▸"),
            span().textContent(example.title)
          )
      )
    )
  );
}

// ============================================
// Main Content Component
// ============================================
function mainContent() {
  const contentContainer = div().className("main-content");

  // Create a container for the active example
  const contentWrapper = div().className("content-wrapper");

  // Initial render
  const initialExample = examples.find((e) => e.id === activeExampleId());
  if (initialExample) {
    contentWrapper[VALUE].appendChild(initialExample.component());
  }

  // Update content when active example changes
  let currentId = activeExampleId();
  const checkForUpdate = () => {
    if (activeExampleId() !== currentId) {
      currentId = activeExampleId();
      const example = examples.find((e) => e.id === currentId);
      if (example) {
        contentWrapper[VALUE].innerHTML = "";
        contentWrapper[VALUE].appendChild(example.component());
      }
    }
    requestAnimationFrame(checkForUpdate);
  };
  requestAnimationFrame(checkForUpdate);

  return contentContainer(contentWrapper);
}

// ============================================
// Main App
// ============================================
const app = div()(
  headerComponent(),
  div().className("layout")(
    sidebarComponent(),
    mainContent()
  )
);

document.getElementById("app")?.appendChild(app);
