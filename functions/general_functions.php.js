// <?php

var { inspect } = require('util');
var { is_integer, is_null } = require('./conditional_checks.php');

module.exports = {
	/**
	 * The `require_once` statement is identical to `require`
	 * except it will check if the file has already been included,
	 * and if so, not include (require) it again.
	 */
	require_once: require,

	/**
	 * The include statement includes and evaluates the specified file
	 *
	 * @param {string} $file The file to include.
	 */
	include($file) {
		try {
			return require($file);
		} catch ($e) {
			console.error($e);
		}
	},

	/**
	 * The include statement includes and evaluates the specified file
	 *
	 * @param {string} $file The file to include.
	 */
	include_once() {
		return this.include(...arguments);
	},

	/**
	 * Prints human-readable information about a variable
	 * 
	 * @param {*} $expression The expression to be printed.
	 * @param {boolean} $return If you would like to capture the output of print_r(), use the return parameter.
	 * When this parameter is set to TRUE, print_r() will return the information rather than print it.
	 * @return {*} Returns the variable representation when the return parameter is used and evaluates to TRUE.
	 * Otherwise, this function will return NULL.
	 */
	print_r($expression = '', $return = false) {
		if ($return == true) return $expression;
		if ($expression === '') return console.log();
		if (this.gettype($expression) === 'string') return console.log($expression);
		return console.log(inspect($expression, { showHidden: true, depth: null }));
	},

	/**
	 * Outputs or returns a parsable string representation of a variable
	 * 
	 * @param {*} $expression The variable you want to export.
	 * @param {boolean} $return If used and set to TRUE, var_export() will return the variable representation instead of outputting it.
	 * @return {*} Returns the variable representation when the return parameter is used and evaluates to TRUE.
	 * Otherwise, this function will return NULL.
	 */
	var_export() {
		return this.print_r(...arguments);
	},

	/**
	 * Get the type of a variable
	 * 
	 * @param {*} $var The variable being type checked.
	 */
	gettype($var) {
		return typeof $var;
	},

	/**
	 * Output a message and terminate the current script
	 * 
	 * @param {*} $status If status is a string, this function prints the status just before exiting.
	 * If status is an integer, that value will be used as the exit status and not printed.
	 * The status 0 is used to terminate the program successfully.
	 * @return {void}
	 */
	exit($status) {
		if (is_integer($status)) process.exit($status);
		if (!is_null($status)) this.print_r($status);
		process.exit();
	},

	/**
	 * Equivalent to exit
	 */
	die() {
		return this.exit(...arguments);
	},
};
