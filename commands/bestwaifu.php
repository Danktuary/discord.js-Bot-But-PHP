<?php

return [
	'execute' => function($message, $arguments) {
		if (count($arguments) < 2) {
			return $message->reply('you need to give me at least 2 waifus to choose from!');
		}

		$chosen = array_rand($arguments);
		return $message->channel->send("{$arguments[$chosen]} is the best waifu!");
	},
	'arguments' => true,
];
