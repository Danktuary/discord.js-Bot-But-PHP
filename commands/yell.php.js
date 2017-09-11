// <?php

exports.execute = async function($message, $arguments) {
	var $commands = $message['client']['commands'];
	var $uppercased = strtoupper(implode(' ', $arguments));
	return $commands['echo'].execute($message, explode(' ', $uppercased));
};

exports.arguments = true;
