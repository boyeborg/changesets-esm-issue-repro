# changesets esm issue reproduction

See: https://github.com/changesets/changesets/issues/1046

## Setup

Install dependencies:

```
npm install
```

## Issue

As a user of `@changesets/read` I expect index.js to work. However, when running `node index.js` you get the following error:

```
readChangesets(cwd).then(console.log);
^

TypeError: readChangesets is not a function
```

## Workaround

It is possible to work around the issue. See: `workaround.js`.

## Patch

A patch to fix the issue also exists. However, this patch only exists to highlight the issue. The solution is likley to update some build configurations.

Run: `npx patch-package`, then `node index.js` works as expected.
