'use strict';

/**
 * annual-fee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::annual-fee.annual-fee');
