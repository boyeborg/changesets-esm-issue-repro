# changesets esm issue reproduction

As a user of `@changesets/read` I expect index.js to work. However, when running `node index.js` you get the following error:

```
readChangesets(cwd).then(console.log);
^

TypeError: readChangesets is not a function
```

Workaround exists. See: `workaround.js`.

A patch to fix the issue also exists. Run: `npx patch-package` then `node index.js` works as expected.
