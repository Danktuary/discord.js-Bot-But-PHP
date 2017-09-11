// <?php

module.exports = {
	/**
	 * Throw a TypeError, PHP style.
	 * 
	 * @param {string} $function The name of the function that errored.
	 * @param {number} $parameter The position of the parameter.
	 * @param {string} $expected The expected type. 
	 * @param {*} $given The given input.
	 */
	type_error($function, $parameter, $expected, $given) {
		throw new TypeError(
			`WARNING \`${$function}()\` expects parameter ${$parameter} to be ${$expected}, ${typeof $given} given`
		);
	},
};
