import readChangesets_ from "@changesets/read";

/** @type {typeof readChangesets_} */
const readChangesets = readChangesets_.default;

const cwd = process.cwd();

readChangesets(cwd).then(console.log);
