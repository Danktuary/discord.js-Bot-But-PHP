// <?php

var { inspect } = require('util');

module.exports = {
	require_once: require,

	include($file) {
		try {
			return require($file);
		} catch ($e) {
			console.error($e);
		}
	},

	include_once() {
		return this.include(...arguments);
	},

	print_r($expression, $return = false) {
		if ($return == true) return $expression;
		return console.log(inspect($expression, { showHidden: true, depth: null }));
	},

	var_export() {
		return this.print_r(...arguments);
	},

	die($status) {
		if (Number.isInteger($status)) process.exit($status);
		if ($status != null) this.print_r($status);
		process.exit();
	},

	exit() {
		return this.die(...arguments);
	},

	gettype($var) {
		return typeof $var;
	},
};
