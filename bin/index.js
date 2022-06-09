#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import nwbuild from "../src/api/nwbuild.js";

const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

// nwbuild ./test/unit/srcPkg works
nwbuild({
  srcDir: argv._.length !== 0 ? argv._[0] : undefined,
});

// nwbuild({
//     srcDir: argv._,
// })
