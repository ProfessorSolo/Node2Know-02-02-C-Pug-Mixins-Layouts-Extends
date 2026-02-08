# Node2Know — Pug Layouts & Mixins

A demonstration of **Pug's** modularity features: **Layouts** (`extends`, `block`) and **Mixins** (`mixin`, `+`).

This demo refactors the [Dynamic Views](../Node2Know-02-02-B-Pug-Dynamic-Views) project to be more maintainable and DRY (Don't Repeat Yourself).

## 🚀 Core Concepts

### 1. Layouts (Inheritance)

Instead of repeating the HTML skeleton (doctype, head, nav, footer) in every file, we define a "master layout" and extend it.

- **`layouts/main-layout.pug`**: The base template. Defines a `block content` placeholder.
- **`layouts/sidebar-layout.pug`**: Extends `main-layout`. Adds a sidebar and defines a new `block main-content`.

Usage:

```pug
extends layouts/main-layout

block content
  h2 Page Content Here
```

### 2. Mixins (Reusable Components)

Mixins are like functions for your views. They accept arguments and render HTML.

- **`mixins/thingMixin.pug`**: A reusable card for displaying a "Thing".

Usage:

```pug
include mixins/thingMixin

ul
  each thing in things
    +thingCard(thing)
```

---

## 🧭 Routes & Features

### Home (`/`)

- Extends **Main Layout**.
- Renders standard dynamic content.

### Things Inventory (`/things`)

- Extends **Sidebar Layout**.
- Uses **Thing Mixin** to render the list.
- Sidebar provides quick links (demonstrating the secondary layout structure).

### Thing Details (`/things/:id`)

- Extends **Main Layout**.
- Detailed view of a single item.

---

## 📦 Install & Run

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Start Server**

    ```bash
    npm run dev
    ```

3.  **Visit**
    - [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```txt
.
├── app.js
├── views/
│   ├── layouts/
│   │   ├── main-layout.pug      # Base layout
│   │   └── sidebar-layout.pug   # Sidebar layout (extends main)
│   ├── mixins/
│   │   └── thingMixin.pug       # Reusable thing component
│   ├── index.pug                # Home (extends main)
│   ├── things.pug               # List (extends sidebar, uses mixin)
│   └── thing.pug                # Details (extends main)
└── ...
```

---

## License

**Node2Know-LEARN-1.0**
