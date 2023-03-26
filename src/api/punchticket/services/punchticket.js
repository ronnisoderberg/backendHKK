'use strict';

/**
 * punchticket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::punchticket.punchticket');
