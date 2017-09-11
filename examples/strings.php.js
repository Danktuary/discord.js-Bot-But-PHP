// <?php

require('../bootstrap.php');

print_r('\n`explode()` examples\n---------------\n');

print_r('\'This is a sentence.\' by ` `: ');
print_r(explode(' ', 'This is a sentence.'));

print_r('\n\'This is a sentence.\' by `i`: ');
print_r(explode('i', 'This is a sentence.'));

print_r('\n\'100,000,000,000.00\' by `,`: ');
print_r(explode(',', '100,000,000,000.00'));

print_r('\n\'100.00\' by ``: ');
print_r(explode('', '100.00'));

print_r('\n`lcfirst()` examples\n---------------\n');

print_r('\'some string\': ' + lcfirst('some string'));
print_r('\'Some string\': ' + lcfirst('Some string'));
print_r('\'SOME STRING\': ' + lcfirst('SOME STRING'));

print_r('\n`ucfirst()` examples\n---------------\n');

print_r('\'some string\': ' + ucfirst('some string'));
print_r('\'Some string\': ' + ucfirst('Some string'));
print_r('\'SOME STRING\': ' + ucfirst('SOME STRING'));

print_r('\n`strtolower()` examples\n---------------\n');

print_r('\'some string\': ' + strtolower('some string'));
print_r('\'Some string\': ' + strtolower('Some string'));
print_r('\'SOME STRING\': ' + strtolower('SOME STRING'));

print_r('\n`strtoupper()` examples\n---------------\n');

print_r('\'some string\': ' + strtoupper('some string'));
print_r('\'Some string\': ' + strtoupper('Some string'));
print_r('\'SOME STRING\': ' + strtoupper('SOME STRING'));

print_r('\n`strlen()` examples\n---------------\n');

print_r('\'Some string\': ' + strlen('Some string'));
print_r('555: ' + strlen(555));
print_r('555.0: ' + strlen(555.0));
print_r('555.5: ' + strlen(555.5));

print_r('\n`str_repeat()` examples\n---------------\n');

print_r('\'something\' x 0: ' + str_repeat('something', 0));
print_r('\'something\' x 1: ' + str_repeat('something', 1));
print_r('\'something\' x 5: ' + str_repeat('something', 5));
