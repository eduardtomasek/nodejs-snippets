const OBJECT_OBJECT = '[object Object]'
const OBJECT_ARRAY = '[object Array]'

/**
 * Stringify value if it's an object or array. Otherwise return null.
 * @param {any} val
 * @returns {string | null}
 */
module.exports = function stringifyOrNull (val) {
	const type = Object.prototype.toString.call(val)

	if (type === OBJECT_OBJECT || type === OBJECT_ARRAY) {
		try {
			return JSON.stringify(val)
		} catch (e) {
			return null
		}
	}

	return null
}
