// <?php

module.exports = {
	/**
	 * Get the boolean value of a variable
	 * 
	 * @param {*} $var The scalar value being converted to a boolean.
	 * @return {boolean} The boolean value of $var.
	 */
	boolval: Boolean,

	/**
	 * Get the string  value of a variable
	 * 
	 * @param {*} $var The variable that is being converted to a string.
	 * @return {string} The string value of $var.
	 */
	strval: String,

	/**
	 * Get the integer value of a variable
	 * 
	 * @param {*} $var The scalar value being converted to an integer
	 * @param {number} $base The base for the conversion
	 * @return {number} The integer value of var on success, or 0 on failure.
	 */
	intval: parseInt,

	/**
	 * Get the float value of a variable
	 * 
	 * @param {*} $var May be any scalar type.
	 * @return {boolean} The float value of the given variable.
	 */
	floatval: parseFloat,

	/**
	 * Alias of floatval()
	 */
	doubleval: parseFloat,
};
