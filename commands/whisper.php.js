// <?php

exports.execute = async function ($message, $arguments) {
	var $commands = $message['client']['commands'];
	var $lowercased = '`' + strtolower(implode(' ', $arguments)) + '`';
	return $commands['echo'].execute($message, explode(' ', $lowercased));
};

exports.arguments = true;
