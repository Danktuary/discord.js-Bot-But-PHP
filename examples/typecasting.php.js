// <?php

require('../bootstrap.php');

function someFunction() {
	// ...
}

print_r('\n`boolval()` examples\n---------------\n');

print_r('true: ' + boolval(true));
print_r('false: ' + boolval(false));
print_r('\'\': ' + boolval(''));
print_r('\'string\': ' + boolval('string'));
print_r('0: ' + boolval(0));
print_r('10: ' + boolval(10));
print_r('10.5: ' + boolval(10.5));
print_r('[]: ' + boolval([]));
print_r('[\'an\', \'array\']: ' + boolval(['an', 'array']));
print_r('{}: ' + boolval({}));
print_r('{ some: \'object\' }: ' + boolval({ some: 'object' }));
print_r('someFunction(): ' + boolval(someFunction));

print_r('\n`strval()` examples\n---------------\n');

print_r('true: ' + strval(true));
print_r('false: ' + strval(false));
print_r('\'\': ' + strval(''));
print_r('\'string\': ' + strval('string'));
print_r('0: ' + strval(0));
print_r('10: ' + strval(10));
print_r('10.5: ' + strval(10.5));
print_r('[]: ' + strval([]));
print_r('[\'an\', \'array\']: ' + strval(['an', 'array']));
print_r('{}: ' + strval({}));
print_r('{ some: \'object\' }: ' + strval({ some: 'object' }));
print_r('someFunction(): ' + strval(someFunction));

print_r('\n`intval()` examples\n---------------\n');

print_r('true: ' + intval(true));
print_r('false: ' + intval(false));
print_r('\'\': ' + intval(''));
print_r('\'string\': ' + intval('string'));
print_r('0: ' + intval(0));
print_r('10: ' + intval(10));
print_r('10.5: ' + intval(10.5));
print_r('[]: ' + intval([]));
print_r('[\'an\', \'array\']: ' + intval(['an', 'array']));
print_r('{}: ' + intval({}));
print_r('{ some: \'object\' }: ' + intval({ some: 'object' }));
print_r('someFunction(): ' + intval(someFunction));

print_r('\n`floatval()` & `doubleval()` examples\n---------------\n');

print_r('true: ' + floatval(true));
print_r('false: ' + floatval(false));
print_r('\'\': ' + floatval(''));
print_r('\'string\': ' + floatval('string'));
print_r('0: ' + floatval(0));
print_r('10: ' + floatval(10));
print_r('10.5: ' + floatval(10.5));
print_r('[]: ' + floatval([]));
print_r('[\'an\', \'array\']: ' + floatval(['an', 'array']));
print_r('{}: ' + floatval({}));
print_r('{ some: \'object\' }: ' + floatval({ some: 'object' }));
print_r('someFunction(): ' + floatval(someFunction));
