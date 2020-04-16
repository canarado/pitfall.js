/**
 * Pause a current function's execution without stopping up the entire event loop. Similiar to a setTimeout, but more inline.
 * @param {number} ms amount of time in milliseconds that the function should pause execution.
 */
module.exports = function sleep(ms) {
    if(!ms || isNaN(ms)) throw new TypeError('milliseconds parameter is either missing or NaN.');
    return new Promise(res => setTimeout(res, ms));
}