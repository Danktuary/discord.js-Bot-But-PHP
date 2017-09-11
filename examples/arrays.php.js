// <?php

require('../bootstrap.php');

var $names = ['Sanc', 'Dank', 'Sanctuary', 'Danktuary'];

var $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var $numbers_words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var $numbers_by_5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

var $2D_array = [
	'first',
	'second',
	[
		'inner first',
		'inner second',
		[
			'inner inner first',
			'inner inner second'
		],
	],
	'fourth',
];

function someFunction () {
	// ...
}

print_r('\n`array()` examples\n---------------\n');

print_r('true: ');
print_r(array(true));

print_r('\nfalse: ');
print_r(array(false));

print_r('\n\'\': ');
print_r(array(''));

print_r('\n\'string\': ');
print_r(array('string'));

print_r('\n0: ');
print_r(array(0));

print_r('\n10: ');
print_r(array(10));

print_r('\n10.5: ');
print_r(array(10.5));

print_r('\n[]: ');
print_r(array([]));

print_r('\n[\'an\', \'array\']: ');
print_r(array(['an', 'array']));

print_r('\n{}: ');
print_r(array({}));

print_r('\n{ some: \'object\' }: ');
print_r(array({ some: 'object' })); 

print_r('\nsomeFunction(): ');
print_r(array(someFunction));

print_r('\n`array_map()` examples\n---------------\n');

print_r('$names mapped, appending \' is dank\': ');
print_r(array_map(function($name) {
	return $name + ' is dank.';
}, $names));

print_r('\n$numbers multiplied by themselves: ');
print_r(array_map(function($number) {
	return $number * $number;
}, $numbers));

print_r('\n`array_filter()` examples\n---------------\n');

print_r('$numbers_by_5 % 10: ');
print_r(array_filter($numbers_by_5, function($number) {
	return $number % 10;
}));

print_r('\n$number_words with lengths greater than 3: ');
print_r(array_filter($numbers_words, function($word) {
	return strlen($word) > 3;
}));

print_r('\n`array_rand()` examples\n---------------\n');

print_r('Single key: ');
print_r(array_rand($numbers_words));

print_r('\nMultiple keys: ');
print_r(array_rand($numbers_words, 5));

print_r('\n`count()` & `sizeof()` examples\n---------------\n');

print_r('2D array (non-recursive): ');
print_r(count($2D_array));

print_r('\n2D array (recursive): ');
print_r(count($2D_array, true));

print_r('\n`in_array()` examples\n---------------\n');

print_r('Non-strict: ');
print_r(in_array('1', $numbers));

print_r('\nStrict: ');
print_r(in_array('1', $numbers, true));
