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

print_r('\narray_map');
print_r(array_map(function ($name) {
	return $name + ' is dank.';
}, $names));

print_r('\narray_filter');
print_r(array_filter($numbers_by_5, function ($number) {
	return $number % 10;
}));

print_r('\narray_rand (single)');
print_r(array_rand($numbers_words));

print_r('\narray_rand (multiple)');
print_r(array_rand($numbers_words, 5));

print_r('\ncount (normal)');
print_r(count($2D_array));

print_r('\ncount (recursive)')
print_r(count($2D_array, true));

print_r('\nsizeof (normal)');
print_r(sizeof($2D_array));

print_r('\nsizeof (recursive)')
print_r(sizeof($2D_array, true));

print_r('\nin_array (non-strict)');
print_r(in_array('1', $numbers));

print_r('\nin_array (strict)');
print_r(in_array('1', $numbers, true));
