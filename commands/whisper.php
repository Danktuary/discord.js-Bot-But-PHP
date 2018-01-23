<?php

return [
	'execute' => function($message, $arguments) {
		$commands = $message->client->commands;
		$lowercased = '`' . strtolower(implode(' ', $arguments)) . '`';
		return $commands['echo']['execute']($message, explode(' ', $lowercased));
	},
	'arguments' => true,
];
