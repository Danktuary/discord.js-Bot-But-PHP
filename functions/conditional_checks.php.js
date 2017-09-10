// <?php

var { gettype } = require('./general_functions.php');

module.exports = {
	is_array: Array.isArray,

	is_bool($var) {
		return gettype($var) === 'boolean' || $var instanceof Boolean;
	},

	is_callable($var) {
		return gettype($var) === 'function';
	},

	is_float($var) {
		return (!isNaN($var) && !Number.isInteger($var));
	},

	is_double() {
		return this.is_float(...arguments);
	},

	is_int: Number.isInteger,

	is_integer: Number.isInteger,

	is_numeric($var) {
		return !isNaN($var);
	},

	is_null($var) {
		return $var == null;
	},

	is_string($var) {
		return gettype($var) === 'string';
	},

	empty($var) {
		return (!$var || (this.is_array($var) && !$var.length));
	},
};
