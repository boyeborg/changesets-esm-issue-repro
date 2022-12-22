import readChangesets from "@changesets/read";

const cwd = process.cwd();

readChangesets(cwd).then(console.log);
