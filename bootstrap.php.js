// <?php

var { readdirSync: scandir } = require('fs');
var $functions = scandir('./functions');
const CONSTANTS = require('./constants.php');

function register_globally($array) {
	for (let $key of Object['keys']($array)) {
		global[$key] = $array[$key];
	}
}

register_globally(CONSTANTS);

for (let $function of $functions) {
	var $file = require(`./functions/${$function}`);
	register_globally($file);
}

