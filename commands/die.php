<?php

return [
	'execute' => function($message) {
		$message->channel->send('Killing the process...')->then(function() {
			die();
		});
	},
];
