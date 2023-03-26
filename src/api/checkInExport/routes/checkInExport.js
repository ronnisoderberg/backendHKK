module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts-report",
      path: "/checkInExport",
      handler: "checkInExport.checkInExport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
