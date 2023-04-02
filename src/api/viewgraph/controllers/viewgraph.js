"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

module.exports = {
  chart: async (ctx, next) => {
    const { timeframe } = ctx.params;
    console.log(timeframe);
  },
  test1: async (ctx, next) => {
    // // createCoreController("api::membership.membership");
    // const contentType = strapi.contentType("api::checkin.checkin");
    // const sanitizedQueryParams = await contentAPI.query(
    //   ctx.query,
    //   contentType,
    //   ctx.state.auth
    // );

    // const entities = await strapi.entityService.findMany(
    //   contentType.uid,
    //   sanitizedQueryParams
    // );

    const [entries, count] = await strapi.db
      .query("api::checkin.checkin")
      .findWithCount({
        orderBy: { time: "DESC" },
        limit: 4,
      });
    console.log("🚀 ~ file: viewgraph.js:34 ~ test1: ~ entries:", entries);
    console.log("🚀 ~ file: viewgraph.js:27 ~ test1: ~ count:", count);

    // return await contentAPI.output(entities, contentType, ctx.state.auth);
  },
};
