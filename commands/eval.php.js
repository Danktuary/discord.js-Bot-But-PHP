// <?php

var { inspect } = include_once('util');

exports.execute = async function($message, $arguments) {
	var $client = $message['client'];
	var $bot = $client;
	var $msg = $message;

	try {
		var $regex = new RegExp($client['token']);
		var $evaled = eval(implode(' ', $arguments));
		
		if (gettype($evaled) !== 'string') $evaled = inspect($evaled, false, 0);

		return $message['channel'].send('```\n' + $evaled + '```');
	}
	catch ($e) {
		print_r($e);
		return $message['channel'].send('```\n' + $e + '```');
	}
};

exports.arguments = true;
