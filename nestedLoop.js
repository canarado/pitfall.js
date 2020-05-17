/**
 * Shortcut to writing nested loops. Works with both arrays and objects.
 * @param {Array|Object} collection1 Array or Object to loop over
 * @param {Array|Object} collection2 Array or Object, this collection is looped over in its entirety every iteration of collection1
 * @param {function} callback callback function to be called per iteration of collection2, this function is ran n(collection1's length * collection2's length) times. Both collection indexes that are the current iteration are passed to this function.
 * @returns {void} None
 * @example
 * 
 * let data1 = [1, 2, 3, 4];
 * let data2 = [5, 6, 7, 8];
 * 
 * nestedLoop(data1, data2, function(i, j) {
 *  console.log(i + j);
 * });
 */
module.exports = function nestedLoop(collection1, collection2, callback) {
    if(!callback || typeof callback != 'function') throw new TypeError('callback must be a function');

    if(Array.isArray(collection1)) {
        if(Array.isArray(collection2)) {
            for(let i = 0; i < collection1.length; i++) {
                for(let j = 0; j < collection2.length; j++) {
                    callback(i, j);
                }
            }
        } else if(typeof collection2 == 'object' && collection2 != null) {
            for(let i = 0; i < collection1.length; i++) {
                for(let j = 0; j < Object.values(collection2).length; j++) {
                    callback(i, Object.values(collection2)[j]);
                }
            }
        } else {
            throw new TypeError('collection must be an array or object');
        }
    } else if (typeof collection1 == 'object' && collection1 != null) {
        if(Array.isArray(collection2)) {
            for(let i = 0; i < Object.values(collection1).length; i++) {
                for(let j = 0; j < collection2.length; j++) {
                    callback(Object.values(collection1)[i], j);
                }
            }
        } else if(typeof collection2 == 'object' && collection2 != null) {
            for(let i = 0; i < Object.values(collection1).length; i++) {
                for(let j = 0; j < Object.values(collection2).length; j++) {
                    callback(Object.values(collection1)[i], Object.values(collection2)[j]);
                }
            }
        } else {
            throw new TypeError('collection must be an array or object');
        }
    } else {
        throw new TypeError('collection must be an array or object');
    }
}