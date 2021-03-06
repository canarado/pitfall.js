/** @module */

/**
 * Get a random index/property from an array or object.
 * @function
 * @param {(Array<*>|Object)} collection Array to obtain random index or Object to obtain random property.
 * @returns {*}
 * @example
 * let obj = { a: 1, b: 2 };
 * 
 * random(obj);
 */
module.exports = function random(collection) {
    if(Array.isArray(collection)) {
        return collection[Math.floor(Math.random() * collection.length)];
    } else if(typeof collection == 'object' && collection !== null) {
        return collection[Object.keys(collection)[Object.keys(collection).length * Math.random() << 0]];
    } else {
        throw new TypeError('collection needs to be an array or object.')
    }
}