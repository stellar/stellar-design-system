# Stellar Design System

Components for Stellar Development Foundation’s design system.

**NOTE: This project is at an early development stage. It is very likely the API
will have many breaking changes.**

## Usage

Install as a dependency:

```bash
yarn add @stellar/design-system
```

Add the main CSS file to your project (for example, the main `index` file of
your React project):

```javascript
import "@stellar/design-system/build/styles.min.css";
```

Import Stellar Design System components:

```javascript
import { Button } from "@stellar/design-system";
```

Available components can be found
[here](./@stellar/design-system/src/components).

## Development

This repo has two parts to it:

- [Stellar Design System repo](./@stellar/design-system/) - everything for the
  design system,
- [Stellar Design System website repo](./@stellar/design-system-website/) -
  website for the design system.

### Scripts

`build:sds` build Stellar Design System (`sds`) project only

`build:sds-web` build Stellar Design System Website (`sds-web`) project only

`build` build both projects

`start:sds` start `sds` project for local development

`start:sds-web` start `sds-web` project for local development

**Note:** You need to run each `start` command in its own window or tab

`clean` delete `node_modules` and `build` directories in the whole repo
