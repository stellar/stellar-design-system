# Stellar Design System

Components for Stellar Development Foundation’s design system.

## Usage

Install as a dependency:

```bash
yarn add @stellar/design-system
```

Add the main CSS file to your project (for example, the main index file of your
React project).

```javascript
import "@stellar/design-system/build/styles.min.css";
```

Import Stellar Design System components

```javascript
import { Button, Input } from "@stellar/design-system";
```

Available components can be found
[here](./@stellar/design-system/src/components).

## Development

This repo has two parts to it:

- [Stellar Design System repo](./@stellar/design-system/) - everything for the
  design system,
- [Stellar Design System website repo](./@stellar/design-system-website/) -
  website for the design system.

This project is tested with
[BrowserStack](https://email.browserstack.com/c/eJwlzE1uwyAURtHV1DOQMf8D1lIB7yNBcewaSNl-LXV8dS6CMNas0imrFwo6abJLDUbCaKE2CCPNt1RpS8KQLQlIq9LCb94W3ivhVS9WGq4PjsEKsZ-TPh2xD8HesR6SPRpwMO3JOefJs3yZPL_Uijvv_Kb9Segvns_38gxZSYKzSaikfIFdBbIUSWFD1NbFZQ9zTp7aOTtaHzH_yxbqL0a8v31g32PjZ3v8AQZ4Rr0).

### Scripts

`build:sds` build Stellar Design System (`sds`) project only

`build:sds-web` build Stellar Design System Website (`sds-web`) project only

`build` build both projects

`start:sds` start `sds` project for local development

`start:sds-web` start `sds-web` project for local development

`clean` delete `node_modules` and `build` directories in the whole repo

**Note** You need to run each `start` command in its own window or tab.

### Test Locally Before Publishing

- For updates that touch many files, ensure everything works locally before
  publishing.
- Recommended workflow:
  1. Build SDS: Run `yarn build:sds` in the root directory.
  2. In your consuming project (e.g., Lab), remove the installed SDS package
     from `node_modules`.
  3. Start the consuming project and confirm it errors due to missing SDS.
  4. Copy the freshly built SDS files from `@stellar/design-system/build` and
     paste them into the corresponding
     `node_modules/@stellar/design-system/build` directory of the consuming
     project.
  5. Verify the consuming project works as expected with the new build.

## Release Process

To release a new version of the Stellar Design System (SDS) to npm:

1. **Bump the Version**

- For non-breaking dependency updates or minor changes, bump the patch version
  in `@stellar/design-system/package.json`.
- For reference, see
  [this example PR](https://github.com/stellar/stellar-design-system/pull/326/changes/07f9a7860dc1888138a1f24340a5566a3f826916).

2. **Publish to npm**

- Start drafting a new release on
  [New release](https://github.com/stellar/stellar-design-system/releases/new)
  page on GitHub.
- Create a new tag matching the new version of SDS (for example, v3.2.7).
- Set the Release title matching the tag.
- Add release notes. You can start by automatically generating the release notes
  and tweaking if necessary.
- Make sure "Set as the latest release" is checked.
- Click "Publish release" button, which will trigger the release workflow.

3. **Update Consuming Projects**

- Once the new version is available on npm, you can update the SDS version in
  any consuming projects and verify integration.

**Note:** Always ensure all tests pass and the build is clean before publishing.
