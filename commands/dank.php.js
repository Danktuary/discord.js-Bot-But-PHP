// <?php

exports['execute'] = async function($message, $arguments) {
	var $mentions = array($message['mentions']['users']); 

	if (empty($mentions)) return $message['reply']('you didn\'t mention anybody!');
	if (count($mentions) > 5) return $message['reply']('please don\'t mention more than 5 users at a time!');

	var $dank = array_map(function($mention) {
		return `<@${$mention[0]}> is dank!`;
	}, $mentions);

	return $message['channel']['send'](implode('\n', $dank));
}

exports['arguments'] = true;
