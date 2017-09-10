// <?php

module.exports = {
	type_error($function, $parameter, $expected, $given) {
		throw new TypeError(`WARNING \`${$function}()\` expects parameter ${$parameter} to be ${$expected}, ${typeof $given} given`);
	},
};
