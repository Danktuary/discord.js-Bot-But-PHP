// <?php

var { type_error } = require('../errors.php');
var { is_array, is_bool, is_callable, is_numeric } = require('./conditional_checks.php');
var { boolval } = require('./typecasting.php');

module['exports'] = {
	/**
	 * Create an array
	 * 
	 * @param {*} $var The variable to turn into an array. 
	 * @return {array} Returns an array of the parameters.
	 */
	array($var) {
		return Array['from']($var);
	},

	/**
	 * Applies the callback to the elements of the given arrays
	 * 
	 * @param {function} $callback Callback function to run for each element in each array.
	 * @param {array} $array An array to run through the callback function.
	 * @return {array} Returns an array containing all the elements of $array
	 * after applying the callback function to each one.
	 */
	array_map($callback, $array) {
		if (!is_callable($callback)) type_error('array_map', 1, 'function', $callback);
		if (!is_array($array)) type_error('array_map', 2, 'array', $array);

		return $array['map']($callback);
	},

	/**
	 * Filters elements of an array using a callback function
	 * 
	 * @param {array} $array The array to iterate over
	 * @param {function} $callback The callback function to use
	 * @return {array} Returns the filtered array.
	 */
	array_filter($array, $callback) {
		if (!is_array($array)) type_error('array_filter', 1, 'array', $array);
		if (!is_callable($callback)) type_error('array_filter', 2, 'function', $callback);

		return $array['filter']($callback);
	},

	/**
	 * Pick one or more random entries out of an array
	 * 
	 * @param {array} $array The input array.
	 * @param {number} $num Specifies how many entries should be picked.
	 * @return {*} When picking only one entry, array_rand() returns the key for a random entry.
	 * Otherwise, an array of keys for the random entries is returned.
	 */
	array_rand($array, $num = 1) {
		if (!is_array($array)) type_error('array_rand', 1, 'array', $array);
		if (!is_numeric($num)) type_error('array_rand', 2, 'integer', $num);
		if ($num < 1 || $num > this['count']($array)) {
			throw new Error('WARNING `array_rand()`: Second argument has to be between 1 and the number of elements in the array');
		}

		var $indexes = [];
		
		for (var i = 0; i < $num; ++i) {
			$indexes['push'](Math['floor'](Math['random']() * this['count']($array)));
		}

		return $indexes;
	},

	/**
	 * Count all elements in an array, or something in an object
	 * 
	 * @param {array} $array An array.
	 * @param {boolean} $recursive If set to true, count() will recursively count the array.
	 * @return {number} Returns the number of elements in $array.
	 */
	count($array, $recursive = false) {
		if (!is_array($array)) type_error('count', 1, 'array', $array);
		if (!is_bool($recursive)) type_error('count', 2, 'bool', $recursive);

		if ($recursive !== true) return $array['length'];

		var $count = 0;

		function count_array($arr) {
			for (var $i = 0; $i < $arr['length']; ++$i) {
				if (is_array($arr[$i])) {
					count_array($arr[$i]);
					continue;
				}

				++$count;
			}

			return $count;
		}

		return count_array($array);
	},

	/**
	 * Alias of count()
	 */
	sizeof() {
		return this['count'](...arguments);
	},

	/**
	 * Checks if a value exists in an array
	 * 
	 * @param {*} $needle The searched value.
	 * @param {array} $haystack The array.
	 * @param {boolean} $strict If the third parameter strict is set to TRUE
	 * then the in_array() function will also check the types of the needle in the haystack.
	 * @return {boolean} Returns TRUE if needle is found in the array, FALSE otherwise.
	 */
	in_array($needle, $haystack, $strict = false) {
		if (!is_array($haystack)) type_error('in_array', 2, 'array', $haystack);
		if (!is_bool($strict)) type_error('in_array', 2, 'bool', $strict);

		return boolval($haystack['find'](function($toFind) {
			return ($strict === true) ? $toFind === $needle : $toFind === $needle;
		}));
	},

	/**
	 * Join array elements with a string
	 * 
	 * @param {string} $glue Defaults to an empty string.
	 * @param {array} $pieces The array of strings to implode.
	 * @return {string} Returns a string containing a string representation
	 * of all the array elements in the same order, with the glue string between each element.
	 */
	implode($glue, $pieces) {
		if (!is_null($pieces) && !is_string($glue)) type_error('implode', 1, 'string', $glue);
		if (!is_null($pieces) && !is_array($pieces)) type_error('implode', 2, 'array', $pieces);

		return (!is_null($pieces)) ? $pieces['join']($glue) : $glue['join']('');
	},

	/**
	 * Alias of implode()
	 */
	join() {
		return this['implode'](...arguments);
	},
};
