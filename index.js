import * as dateDealer from "./lib/DateDealer"
/**
 * Resolve ES6 and CommonJS compatibility issues
 * 1. CommonJS code
 *    const dateDealer = require('date-dealer');
 * 2. ES6 code
 *    import dateDealer from 'date-dealer';
 */
module.exports = dateDealer;
module.exports.default = dateDealer;
