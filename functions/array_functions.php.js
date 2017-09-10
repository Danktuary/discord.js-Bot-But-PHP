// <?php

var { type_error } = require('../errors.php');
var { is_array, is_bool, is_callable, is_numeric } = require('./conditional_checks.php');

module.exports = {
	array_map($callback, $array) {
		if (is_callable($callback)) type_error('array_map', 1, 'function', $callback)
		if (!is_array($array)) type_error('array_map', 2, 'array', $array);

		return $array.map($callback);
	},

	array_filter($array, $callback) {
		if (!is_array($array)) type_error('array_filter', 1, 'array', $array);
		if (is_callable($callback)) type_error('array_filter', 2, 'function', $callback)

		return $array.filter($callback);
	},

	array_rand($array, $num = 1) {
		if (!is_numeric($num)) type_error('array_rand', 2, 'integer', $num);
		if ($num < 1 || $num > this.count($array)) {
			throw new Error('WARNING `array_rand()`: Second argument has to be between 1 and the number of elements in the array');
		}

		if ($num == 1) return Math.floor(Math.random() * this.count($array));

		var $indexes = [];
		
		for (var i = 0; i < $num; ++i) {
			$indexes.push(Math.floor(Math.random() * this.count($array)));
		}

		return $indexes;
	},

	count($array, $recursive = false) {
		if (!is_array($array)) type_error('count', 1, 'array', $array);
		if (!is_bool($recursive)) type_error('count', 2, 'bool', $recursive);

		if ($recursive != true) return $array.length;

		var $count = 0;

		function count_array($arr) {
			for (var $i = 0; $i < $arr.length; ++$i) {
				if (is_array($arr[$i])) return count_array($arr[$i]);
				++$count;
			}

			return $count;
		}

		return count_array($array);
	},
};
