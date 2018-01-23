<?php

return [
	'execute' => function($message, $arguments) {
		$commands = $message->client->commands;
		$uppercased = strtoupper(implode(' ', $arguments));
		return $commands['echo']['execute']($message, explode(' ', $uppercased));
	},
	'arguments' => true,
];
