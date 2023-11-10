# Vite Starter Complete

## Overview

This document provides an overview of the Vite Complete Template Front-end Application, including useful information, instructions for setup and usage, and details on how to contribute to the project.

## Useful Information

The project structure is based on [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

## Setup

Before you begin, ensure that you have the following dependencies installed:

- [pnpm](https://pnpm.io/) (install using homebrew with `brew install pnpm` or [follow the official documentation](https://pnpm.io/installation))

Please note that this project requires Node.js version 18.16.0. If you already have Node.js version 18.16.0 installed with a different version manager, you can skip steps 1-4.

1. Open your terminal and run the following command to check your Node.js version:

```
node -v
```

If your Node.js version is `v18.16.0`, you can go straight to step 5. If you have a different version of Node.js or don't have Node.js installed, please follow steps 2-4.

2. Install [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) using the following command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

3. Restart your terminal or run the following command to apply the changes:

```
source ~/.bashrc
```

4. Once nvm is installed, use the following command to install Node.js version 18.16.0:

```
nvm install 18.16.0
```

5. To install the project dependencies, run the following command:

```
pnpm install
```

Now you're ready to use the Vite Starter Complete.

## Scripts

- `pnpm dev` - start a development server with hot reload.
- `pnpm dev-https` - start a development server with hot reload and HTTPS enabled.
- `pnpm dev-clean` - start a dev server and reset Vite cache, fixes `504 (Outdated Optimize Dep)`.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm preview` - locally preview the production build.
- `pnpm test` - run unit and integration tests related to changed files based on git.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with Playwright.
- `pnpm test:e2e:ui` - run all e2e tests with Playwright and show the browser.
- `pnpm format` - format all files with Prettier.
- `pnpm lint` - runs TypeScript and ESLint.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.

## Contributing

Before you commit, please run the `pnpm lint` command and fix any errors (warnings are fine).\
Commit your changes using the `pnpm commit` command, which uses Commitizen to ensure unified formatting of all commits.

## Other

After running the `pnpm build` command, you can inspect the `analyze-bundle.html` file to see detailed information about the bundle.
