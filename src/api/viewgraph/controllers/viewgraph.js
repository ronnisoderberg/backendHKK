"use strict";
const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

const antalDagarBak = -400;

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

  vecka: async (ctx, next) => {
    const onelessDateToday = addDays(new Date(), -1);
    const today = printTodayDate();
    const [entries, count] = await strapi.db
      .query("api::checkin.checkin")
      .findWithCount({
        orderBy: { time: "ASC" },
        // limit: 4,
        where: {
          time: {
            $between: [addDays(printTodayDate(), -400), printTodayDate()],
          },
        },
      });

    function groupTimesByFiveMinutes(arr) {
      const timeGroups = {};
      arr.forEach((item) => {
        const time = new Date(item.time);
        let minutes = time.getUTCMinutes();

        const timeGroupStart = new Date(
          Date.UTC(
            time.getUTCFullYear(),
            time.getUTCMonth(),
            time.getUTCDate(),
            time.getUTCHours(),
            minutes - (minutes % 5)
          )
        );
        const timeGroupEnd = new Date(
          timeGroupStart.getTime() + 4 * 60000 // Lägger till 4 minuter
        );

        const timeGroupIndex = {
          start: timeGroupStart,
          end: timeGroupEnd,
        };

        const timeGroup = `${timeGroupIndex.start.toUTCString()}-${timeGroupIndex.end.toUTCString()}`;

        if (timeGroup in timeGroups) {
          timeGroups[timeGroup].antal++;
        } else {
          timeGroups[timeGroup] = { antal: 1, tidsSpann: timeGroup };
        }
      });

      Object.entries(timeGroups).forEach(([key, value]) => {
        console.log(`${key} Antal: ${value.antal}`);
      });

      return Object.values(timeGroups).sort((a, b) => {
        const dateA = new Date(a.tidsSpann.split("-")[0]);
        const dateB = new Date(b.tidsSpann.split("-")[0]);
        return dateA - dateB;
      });
    }

    return groupTimesByFiveMinutes(entries);
  },
};
