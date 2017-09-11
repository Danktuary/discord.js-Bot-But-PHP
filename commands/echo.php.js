// <?php

exports['execute'] = async function($message, $arguments) {
	var $to_echo = implode(' ', $arguments);
	return $message['channel']['send'](`${$to_echo}! ` + str_repeat($to_echo + ', ', 3) + `${$to_echo}...`);
}

exports['arguments'] = true;
