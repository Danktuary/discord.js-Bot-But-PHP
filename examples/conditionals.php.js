// <?php

require('../bootstrap.php');

class EmptyClass {
	/* ... */
}

class OtherClass {
	constructor() {
		this.prop = true;
	}

	example() {
		// ...
	}

	static staticExample() {
		// ...
	}
}

var $other_class = new OtherClass;

var $closure = function() {
	// ...
};

var $undef;

print_r('\n`is_array()` examples\n---------------\n');

print_r('\'some string\': ' + is_array('some string'));
print_r('regular array: ' + is_array(['this', 'is', 'an', 'array']));
print_r('empty array: ' + is_array([]));
print_r('object: ' + is_array({}));

print_r('\n`is_bool()` examples\n---------------\n');

print_r('true: ' + is_bool(true));
print_r('false: ' + is_bool(false));
print_r('1: ' + is_bool('true'));
print_r('\'true\': ' + is_bool('true'));
print_r('Boolean(\'yes\'): ' + is_bool(Boolean('yes')));
print_r('new Boolean(\'yes\'): ' + is_bool(new Boolean('yes')));

print_r('\n`is_callable()` examples\n---------------\n');

print_r('closure: ' + is_callable($closure));
print_r('empty class: ' + is_callable(EmptyClass));
print_r('instantiated class: ' + is_callable($other_class));
print_r('class property: ' + is_callable($other_class['prop']));
print_r('class method: ' + is_callable($other_class['example']));
print_r('static class method: ' + is_callable(OtherClass.staticExample));

print_r('\n`is_float()` & `is_double()` examples\n---------------\n');

print_r('5: ' + is_float(5));
print_r('5.0: ' + is_float(5.0));
print_r('5.1: ' + is_float(5.1));
print_r('\'5.1\': ' + is_float('5.0'));
print_r('\'5.1\': ' + is_float('5.1'));
print_r('\'100 percent\': ' + is_int('100 percent'));
print_r('NaN: ' + is_float(NaN));

print_r('\n`is_int()` & `is_integer()` examples\n---------------\n');

print_r('5: ' + is_int(5));
print_r('5.0: ' + is_int(5.0));
print_r('5.1: ' + is_int(5.1));
print_r('\'5.1\': ' + is_int('5.1'));
print_r('\'5.1\': ' + is_int('5.0'));
print_r('\'100 percent\': ' + is_int('100 percent'));
print_r('NaN: ' + is_int(NaN));

print_r('\n`is_numeric()` examples\n---------------\n');

print_r('5: ' + is_numeric(5));
print_r('5.0: ' + is_numeric(5.0));
print_r('5.1: ' + is_numeric(5.1));
print_r('\'5.1\': ' + is_numeric('5.1'));
print_r('\'5.1\': ' + is_numeric('5.0'));
print_r('\'100 percent\': ' + is_int('100 percent'));
print_r('NaN: ' + is_numeric(NaN));

print_r('\n`is_null()` examples\n---------------\n');

print_r('null: ' + is_null(null));
print_r('undefined: ' + is_null(undefined));
print_r('\'\': ' + is_null(''));
print_r('0: ' + is_null(0));
print_r('NaN: ' + is_null(NaN));

print_r('\n`is_string()` examples\n---------------\n');

print_r('\'some string\': ' + is_string('some string'));
print_r('(5).toString(): ' + is_string((5).toString()));
print_r('String(true): ' + is_string(String(true)));
print_r('String(): ' + is_string(String()));

print_r('\n`empty()` examples\n---------------\n');

print_r(': ' + empty());
print_r('\'\': ' + empty(''));
print_r('0: ' + empty(0));
print_r('0.0: ' + empty(0.0));
print_r('false: ' + empty(false));
print_r('null: ' + empty(null));
print_r('undefined: ' + empty(undefined));
print_r('[]: ' + empty([]));
print_r('{}: ' + empty({}));
