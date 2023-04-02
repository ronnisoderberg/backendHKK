// import test from "brittle";
// import { exampleAction } from "../../src/api/viewgraph/controllers/viewgraph.js";
const { mochCtx, mochCtxResponse } = require("./mochCtx.js");
const { test } = require("brittle");
let { test1 } = require("../src/api/viewgraph/controllers/viewgraph.js");

test("test", async function (t) {
  await test1();

  t.is(await test1(), "2", "Endpoint körs");

  t.end();
});
