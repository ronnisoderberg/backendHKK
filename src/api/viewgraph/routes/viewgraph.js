module.exports = {
  routes: [
    {
      method: "GET",
      // path: "/viewgraph/:timeframe",
      path: "/viewgraph",
      handler: "viewgraph.chart",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/viewgraph/test",
      handler: "viewgraph.test1",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
