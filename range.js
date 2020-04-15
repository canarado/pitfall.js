/**
 * An abstraction over classic loops to do something n times.
 * @param {number} end End of the range, loop will run end(n) times.
 * @param {function} callback Function to be invoked every loop.
 * @throws {TypeError} If callback is missing or not a function.
 * @throws {Error} If end parameter is missing, NaN, or negative.
 */
module.exports = function range(end, callback) {
    if(!callback || typeof callback != 'function') throw new TypeError("callback parameter must be a function");
    if(!end || isNaN(end) || end < 1) throw new Error('no end value or value is not a positive integer');

    for(let i = 0; i < end; i++) {
        callback(i);
    }
}