// <?php

module.exports = {
	/**
	 * Finds whether a variable is an array
	 * 
	 * @param {*} $variable The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is an array, FALSE otherwise.
	 */
	is_array: Array.isArray,

	/**
	 * Finds out whether a variable is a boolean
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is a boolean, FALSE otherwise.
	 */
	is_bool($var) {
		return typeof $var === 'boolean' || $var instanceof Boolean;
	},

	/**
	 * Verify that the contents of a variable can be called as a function
	 * 
	 * @param {*} $var The value to check
	 * @return {boolean} Returns TRUE if var is callable, FALSE otherwise.
	 */
	is_callable($var) {
		return typeof $var === 'function';
	},
	
	/**
	 * Alias of is_float()
	 * 
	 * @return {boolean} Returns TRUE if var is a float, FALSE otherwise.
	 */
	is_double() {
		return this.is_float(...arguments);
	},

	/**
	 * Finds whether the type of the given variable is float.
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is a float, FALSE otherwise.
	 */ 
	is_float($var) {
		return (!isNaN($var) && !Number.isInteger($var));
	},	

	/**
	 * Find whether the type of the given  variable is integer
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is an integer, FALSE otherwise.
	 */
	is_int: Number.isInteger,

	/**
	 * Alias of is_int()
	 * 
	 * @return {boolean} Returns TRUE if var is an integer, FALSE otherwise.
	 */
	is_integer: Number.isInteger,

	/**
	 * Finds whether a variable is NULL
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is null, FALSE otherwise.
	 */
	is_null($var) {
		return $var == null;
	},

	/**
	 * Finds whether a variable is a number or a numeric string
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is a number or a numeric string, FALSE otherwise.
	 */
	is_numeric($var) {
		return !isNaN($var);
	},

	/**
	 * Find whether the type of a variable is string
	 * 
	 * @param {*} $var The variable being evaluated.
	 * @return {boolean} Returns TRUE if var is of type string, FALSE otherwise.
	 */
	is_string($var) {
		return typeof $var === 'string';
	},

	/**
	 * Determine whether a variable is empty
	 * 
	 * @param {*} $var Variable to be checked
	 * @return {boolean} Returns FALSE if var exists and has a non-empty, non-zero value. Otherwise returns TRUE.
	 */
	empty($var) {
		return (!$var || (this.is_array($var) && !$var.length));
	},
};
