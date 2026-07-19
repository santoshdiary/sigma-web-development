### Virtual DOM

A lightweight JavaScript copy of the real DOM.

Example:

```jsx
<h1>Hello</h1>
```

React creates a JavaScript representation of this UI instead of directly modifying the browser DOM.

**Purpose:** Faster comparisons and updates.

---

### Reconciliation

The process of comparing:

* Old Virtual DOM
* New Virtual DOM

to find what changed.

Example:

```text
Old: Hello
New: Hi
```

React detects only the text changed and updates only that part.

---

### Fiber

Fiber is React's internal engine that performs reconciliation.

It breaks rendering work into small tasks so the UI remains responsive and doesn't freeze.

---

### One-Line Summary

Virtual DOM = Copy of UI

Reconciliation = Find differences

Fiber = Engine that finds and applies those differences efficiently
