// <?php

var { readdirSync: scandir } = require('fs');
var $functions = scandir('./functions');

for (let $function of $functions) {
	var $file = require(`./functions/${$function}`);

	for (let $key of Object.keys($file)) {
		global[$key] = $file[$key];
	}
}
