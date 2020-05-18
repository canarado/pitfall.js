/** @module */

/**
 * Pause a current function's execution without stopping up the entire event loop. Similiar to a setTimeout, but more inline.
 * @function
 * @param {number} ms amount of time in milliseconds that the function should pause execution.
 * @returns {Promise} awaited until the timer runs out.
 * @example
 * console.log('First log');
 * 
 * sleep(2000);
 * 
 * console.log('second log 2000 milliseconds later);
 */
module.exports = function sleep(ms) {
    if(!ms || isNaN(ms)) throw new TypeError('milliseconds parameter is either missing or NaN.');
    return new Promise(res => setTimeout(res, ms));
}