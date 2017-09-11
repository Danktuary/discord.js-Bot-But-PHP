// <?php

var { type_error } = require('../errors.php');
var { strval } = require('./typecasting.php');
var { is_array, is_integer, is_null, is_string } = require('./conditional_checks.php');

module.exports = {
	/**
	 * 
	 * @param {string} $delimiter The boundary string.
	 * @param {string} $string The input string.
	 * @param {number} $limit? If limit is set and positive, the returned array will contain
	 * a maximum of limit elements with the last element containing the rest of string.
	 * If the limit parameter is negative, all components except the last -limit are returned.
	 * If the limit parameter is zero, then this is treated as 1.
	 * @return {string[]} Returns an array of strings created by splitting the string parameter on boundaries formed by the delimiter.
	 */
	explode($delimiter, $string, $limit = null) {
		if (!is_string($delimiter)) type_error('explode', 1, 'string', $delimiter);
		if (!is_string($string)) type_error('explode', 2, 'string', $string);
		if (!is_null($limit) && !is_integer($limit)) type_error('explode', 3, 'integer', $limit);

		if ($limit) {
			if ($limit == 0) return [$string];
			if ($limit < 0) return $string.split($delimiter, $limit);

			var $rest = $string.split($delimiter).slice($limit).join($delimiter);
			return $string.split($delimiter, $limit).concat($rest);
		}

		return $string.split($delimiter);
	},

	/**
	 * Make a string's first character lowercase
	 * 
	 * @param {string} $str The input string.
	 * @return {string} Returns the resulting string.
	 */
	lcfirst($str) {
		if (!is_string($str)) type_error('lcfirst', 1, 'string', $str);
		return $str[0].toLowerCase() + $str.slice(1);
	},

	/**
	 * Make a string's first character uppercase
	 * 
	 * @param {string} $str The input string.
	 * @return {string} Returns the resulting string.
	 */
	ucfirst($str) {
		if (!is_string($str)) type_error('ucfirst', 1, 'string', $str);
		return $str[0].toUpperCase() + $str.slice(1);
	},

	/**
	 * Make a string lowercase
	 * 
	 * @param {string} $string The input string.
	 * @return {string} Returns the lowercased string.
	 */
	strtolower($string) {
		if (!is_string($string)) type_error('strtolower', 1, 'string', $string);
		return $string.toLowerCase();
	},

	/**
	 * Make a string uppercase
	 * 
	 * @param {string} $string The input string.
	 * @return {string} Returns the uppercased string.
	 */
	strtoupper($string) {
		if (!is_string($string)) type_error('strtoupper', 1, 'string', $string);
		return $string.toUpperCase();
	},

	/**
	 * Get string length
	 * 
	 * @param {string} $string The string being measured for length.
	 * @return {number} The length of the string on success, and 0 if the string is empty.
	 */
	strlen($string) {
		if (!is_string($string) && !is_numeric($string)) type_error('strlen', 1, 'string', $string);
		return strval($string).length;
	},

	/**
	 * Repeat a string
	 * 
	 * @param {string} $input The string to be repeated.
	 * @param {number} $multiplier Number of time the input string should be repeated.
	 * multiplier has to be greater than or equal to 0. If the multiplier is set to 0, the function will return an empty string.
	 * @return {string} Returns the repeated string.
	 */
	str_repeat($input, $multiplier) {
		if (!is_string($input)) type_error('str_repeat', 1, 'string', $input);
		if (!is_numeric($multiplier)) type_error('str_repeat', 2, 'integer', $multiplier);
		return $input.repeat($multiplier);
	}
};
