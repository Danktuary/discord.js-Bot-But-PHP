// <?php

var { type_error } = require('../errors.php');
var { is_array, is_integer, is_null, is_string } = require('./conditional_checks.php');

module.exports = {
	implode($glue, $pieces) {
		if (!is_null($pieces) && !is_string($glue)) type_error('implode', 1, 'string', $glue);
		if (!is_null($pieces) && !is_array($pieces)) type_error('implode', 2, 'array', $pieces);

		return (!is_null($pieces)) ? $pieces.join($glue) : $glue.join('');
	},

	join() {
		return this.implode(...arguments);
	},

	explode($delimiter, $string, $limit = null) {
		if (!is_string($delimiter)) type_error('explode', 1, 'string', $delimiter);
		if (!is_string($string)) type_error('explode', 2, 'string', $string);
		if (!is_null($limit) && !is_integer($limit)) type_error('explode', 3, 'integer', $limit);

		if ($limit) {
			var $rest = $string.split($delimiter).slice($limit).join($delimiter);
			return $string.split($delimiter, $limit).concat($rest);
		}

		return $string.split($delimiter);
	},

	lcfirst($str) {
		if (!is_string($str)) type_error('lcfirst', 1, 'string', $str);
		return $str[0].toLowerCase() + $str.slice(1);
	},

	ucfirst($str) {
		if (!is_string($str)) type_error('ucfirst', 1, 'string', $str);
		return $str[0].toUpperCase() + $str.slice(1);
	},

	strtolower($string) {
		if (!is_string($str)) type_error('strtolower', 1, 'string', $string);
		return $string.toLowerCase();
	},

	strtoupper($string) {
		if (!is_string($str)) type_error('strtoupper', 1, 'string', $string);
		return $string.toUpperCase();
	},
};
