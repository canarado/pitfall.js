/**
 * Get a random index/property from an array or object.
 * @param {(Array<*>|Object)} collection Array to obtain random index or Object to obtain random property.
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