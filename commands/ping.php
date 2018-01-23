<?php

return [
	'execute' => function($message) {
		$message->channel->send('Ping...')->then(function($sent) use($message) {
			$ping_time = $sent->createdTimestamp - $message->createdTimestamp;
			$sent->edit("Pong! Took {$ping_time}s");
		});
	},
];
