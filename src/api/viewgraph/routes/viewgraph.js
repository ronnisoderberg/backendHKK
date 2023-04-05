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
      path: "/viewgraph/vecka",
      handler: "viewgraph.vecka",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
