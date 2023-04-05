"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function printTodayDate() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // set time to 0
  return today;
}

module.exports = {
  chart: async (ctx, next) => {
    const { timeframe } = ctx.params;
    console.log(timeframe);
  },
  //---------------------------------------------------->>>>>>>>>>>>>>>>>>>>>
  vecka: async (ctx, next) => {
    const onelessDateToday = addDays(new Date(), -1);
    const today = printTodayDate();
    const [entries, count] = await strapi.db
      .query("api::checkin.checkin")
      .findWithCount({
        orderBy: { time: "ASC" },
        limit: 4,
        where: {
          time: {
            $between: [addDays(printTodayDate(), -7), printTodayDate()],
          },
        },
      });

      
    console.log("🚀 ~ file: viewgraph.js:34 ~ vecka: ~ entries:", entries);
    console.log("🚀 ~ file: viewgraph.js:27 ~ vecka: ~ count:", count);
    console.log(
      "🚀 ~ file: viewgraph.js:27 ~ vecka: ~ count:",
      addDays(printTodayDate(), -3)
    );
  },
};
