<?php

return [
	'execute' => function($message, $arguments) {
		$to_echo = implode(' ', $arguments);
		return $message->channel->send("{$to_echo}! " . str_repeat($to_echo . ', ', 3) . "{$to_echo}...");
	},
	'arguments' => true,
];
