/**
 * Function to abstract looping over objects.
 * @param {Object} object The object to loop over.
 * @param {function} callback The callback function that is called every iteration of the object. Called with (object.value, object.key).
 */
module.exports = function forEachValue(object, callback) {
    if(typeof object != 'object' || object === null) throw new TypeError('object parameter is not an object.');
    if(typeof callback != 'function') throw new Error('callback must be a function');

    for(let [k, i] of Object.entries(object)) {
        callback(i, k);
    }
}