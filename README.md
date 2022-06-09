# nw-builder

[![npm](https://img.shields.io/npm/v/nw-builder.svg?style=flat)](https://www.npmjs.com/package/nw-builder)
[![ci](https://github.com/nwutils/nw-builder/actions/workflows/ci.yml/badge.svg)](https://github.com/nwutils/nw-builder/actions/workflows/ci.yml)
[![cd](https://github.com/nwutils/nw-builder/actions/workflows/cd.yml/badge.svg)](https://github.com/nwutils/nw-builder/actions/workflows/cd.yml)
[![Join the chat at https://gitter.im/nwjs/nw-builder](https://badges.gitter.im/nwjs/nw-builder.svg)](https://gitter.im/nwjs/nw-builder?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Build [NW.js](https://github.com/nwjs/nw.js) applications for Mac, Windows and Linux.

## Table of Contents

- [Installation](https://github.com/nwutils/nw-builder#installation)
- [Usage](https://github.com/nwutils/nw-builder#usage)
- [API Reference](https://github.com/nwutils/nw-builder#api-reference)
- [Contributing](https://github.com/nwutils/nw-builder#contributing)
- [License](https://github.com/nwutils/nw-builder#license)

## Installation

> Tested and runs on Node 14, 16 and 18!

Using npm:

```javascript
npm install nw-builder
```

Using yarn:

```javascript
yarn add nw-builder
```

Using pnpm:

```javascript
pnpm add nw-builder
```

## Usage

CLI:

```shell
# Run
nwbuild ./src
```

Module:

```javascript
// ESM
import nwbuild from "nw-builder";
// CJS
const nwbuild = require("nw-builder");

nwbuild({
  srcDir: "./src",
});
```

## API Reference

> Stay up to date via the [Changelog](https://github.com/nwjs-community/nw-builder/blob/master/.github/CHANGELOG.md).

### Run API

| Name   | Type   | Default | Description            |
| ------ | ------ | ------- | ---------------------- |
| srcDir | string |         | Path to your NW.js app |

## Contributing

### Getting Started

1. Pick and install a Node version manager
   - Linux/OSX - [nvm](https://github.com/nvm-sh/nvm)
   - Windows 8+ - [nvm-windows](https://github.com/coreybutler/nvm-windows)
   - Windows 7 - [nodist](https://github.com/nullivex/nodist)
   - Win/Lin/OSX - [volta](https://volta.sh)
1. Use your version manager to install Node 14.19, 16.9, 18.2 or above
1. Run `corepack enable`
1. `corepack prepare pnpm@7.1.9 --activate`
1. `pnpm install`
   - If you haven't used `pnpm` before, [here is a cheatsheet](https://dev.to/equiman/npm-vs-yarn-vs-pnpm-commands-cheatsheet-3el8)
1. `pnpm demo` to test your changes at first glance
1. `pnpm test` to run unit tests
1. Don't forget to run `pnpm format && pnpm lint` before commiting your changes

### General Guidelines

- Whenever possible, open an issue before submitting a pull request.
- PRs should have short descriptive titles. For example:
  - fix(docs): fix typo in `options.platform` description
  - feat(platform): add support for mac m1
- Ideally, a PR should reference a related issue
- Ensure there are tests that cover your changes

## Credits

This project was created by [Steffen Müller](https://github.com/steffenmllr) and has been maintained by [Gabe Paez](https://github.com/gabepaez), [Andy Trevorah](https://github.com/trevorah), [Adam Lynch](https://github.com/adam-lynch) and [Rémy Boulanouar](https://github.com/DblK) in the past. This project is currently maintained by [Ayushman Chhabra](https://github.com/ayushmxn).

## License

[MIT](https://github.com/nwutils/nw-builder/blob/master/.github/LICENSE)
