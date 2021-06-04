# Stellar Design System Guide

This document highlights the overall file structure of the Stellar Design System
project, along with some guidelines of creating components and naming to keep
everything as consistent as possible.

## File structure overview

```javascript
root/@stellar/design-system
  |-- build/
  |-- src/
    |-- assets/
      |-- fonts/
      |-- icons/
      |-- logos/
    |-- components/
      |-- Component/
        |-- index.tsx
        |-- styles.scss
      |-- utils
        |-- Component/
          |-- index.tsx
          |-- styles.scss
      |-- index.ts
    |-- types/
    |-- entry.ts
    |-- fonts.scss
    |-- global.scss
    |-- icons.ts
    |-- index.ts
    |-- logos.ts
    |-- mixins.scss
    |-- normalize.scss
  |-- ...config files and docs
```

## `build/`

Optimized, production ready output of the design system.

## `assets/`

Assets used in the project.

### `fonts/`

All font files we use in the Stellar Design System are in this folder. They need
to be imported in `/fonts.scss`.

### `icons/`

SVG files of icons we use. Make sure SVG files don’t have color on them because
it should be set in CSS. They need to be imported in `/icons.ts`.

The file name should be in lowercase and words separated with dashes
(`info-bubble.svg`). Do not prefix the file name with `icon-`.

### `logos/`

SVG files of logos we use. If possible, remove the color from the SVG files so
that it can be set in CSS. They need to be imported in `/logos.ts`.

The file name should be in lowercase and words separated with dashes
(`stellar-quest.svg`). Do not prefix the file name with `logo-`.

## `components/`

All components have their own folder named after the component
(`components/Input`). Inside the folder there are `index.tsx` and `styles.scss`
files.

### Component’s `index.tsx` structure

The contents of the `index.tsx` file should be in the following order.

#### Imports

```javascript
import React from "react";
import "./styles.scss";
```

#### Variant

Export `enum` named `[Component]Variant` (`ButtonVariant`). Use variant names
that are based on functionality and not appearance.

```javascript
export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}
```

#### Types

Interface named `[Component]Props` (`InputProps`).

```javascript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  rightElement?: string;
  note?: React.ReactNode;
  error?: string;
}
```

#### React component

- Export component directly (do not use export default).
- Use BEM naming convention (except, capitalize block element, which should
  match the component name):
  - block: the same as the component name (`Input`),
  - element: `__element` (`Input__container`),
  - modifier: `--modifier` (`Input__element--right`).
- Use only classes for styling (do not use IDs or `data-` attributes).
- Do not add a class to an HTML element if it can be styled without it (for
  example, `label`, `p` should have default styling but can be changed for this
  component as needed).
- Use global classes (`error`, `success`) instead of creating a modifier.

```javascript
<div className="Input">
  {label && <label htmlFor={id}>{label}</label>}

  <div className="Input__container">
    <div className="Input__wrapper" data-disabled={props.disabled}>
      <input id={id} aria-invalid={!!error} {...props} />
    </div>

    {rightElement && (
      <div className="Input__element--right">{rightElement}</div>
    )}
  </div>

  {error && <div className="Input__note error">{error}</div>}
  {note && <div className="Input__note">{note}</div>}
</div>
```

### Component’s `styles.scss` structure

- Root element is the component class.

```scss
.Input {
  /* all component styles go here */
}
```

- Use Sass parent selector `&` to name child classes and other selectors.

```scss
.Input {
  width: 100%;

  /* Turns into .Input__container */
  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
```

- Always use colors defined in `global.scss` (to make sure themes will always
  look good), and other variables as much as possible.

- For consistency, use `__container` for the outermost container, and
  `__wrapper` for anything that is inside of it. The analogy would be a candy
  box is a container, and every candy has a wrapper.

- Use as few wrapping elements as possible (use CSS selectors, flex, grid, etc.
  to achieve the same result).

### `/components/utils/`

Helper components, which are not part of the Design System. The component
structure should be the same as the main components.

### `/components/index.ts`

All components are listed in this file.

```javascript
export * from "./Button";
export * from "./Checkbox";
...
```

## `/types`

Global types go here.

## `entry.ts`

Main project file used to generate distribution file in Webpack. It is separated
from `index.ts` file because we don’t want to validate or compile `entry.ts` (it
can include external files).

```javascript
import "configurable-date-input-polyfill";
import "./global.scss";
import "./fonts.scss";

export * from "./index";
```

## `fonts.scss`

CSS file that contains all font files.

```scss
// Basic Latin chars
@font-face {
  font-family: "IBM Plex Sans";
  src: url("./assets/fonts/IBMPlexSans-Regular-Latin1.woff") format("woff"),
    url("./assets/fonts/IBMPlexSans-Regular-Latin1.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
    U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
    U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
    U+2212, U+FB01-FB02;
  font-display: block;
}
...
```

## `global.scss`

Main CSS file that has all the global styles shared among all components.

```scss
:root {
  // Colors and other variables
}
...
```

## `icons.ts`

All SVG icon files are listed here. The exported icon components should be named
`Icon[Filename]` (`IconCalendar`).

```javascript
export { ReactComponent as IconCalendar } from "./assets/icons/calendar.svg";
```

## `index.ts`

Exports all React components, including icons and logos.

```javascript
export * from "./components";
export * from "./icons";
export * from "./logos";
```

## `logos.ts`

All SVG logo files are listed here. The exported logo components should be named
`Logo[Filename]` (`LogoStellar`).

```javascript
export { ReactComponent as LogoStellar } from "./assets/logos/stellar.svg";
```

## `mixins.scss`

Sass mixins to share among components.

## `normalize.scss`

Normalize CSS to make UI more consistent in all browsers.
