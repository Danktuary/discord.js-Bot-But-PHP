<?php

return [
	'execute' => function($message, $arguments) {
		$mentions = $message->mentions->users->all();

		if (empty($mentions)) return $message->reply('you didn\'t mention anybody!');
		if (count($mentions) > 5) return $message->reply('please don\'t mention more than 5 users at a time!');

		echo 'got here' . PHP_EOL;

		$dank = array_map(function($mention) {
			return "{$mention} is dank!";
		}, $mentions);

		print_r($dank ?? 'nullllll');

		return $message->channel->send(implode(PHP_EOL, $dank));
	},
	'arguments' => true,
];
