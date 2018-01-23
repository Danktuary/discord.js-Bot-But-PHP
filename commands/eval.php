<?php

return [
	'execute' => function($message, $arguments) {
		$client = $message->client;
		$bot = $client;
		$msg = $message;

		try {
			$evaled = eval(implode(' ', $arguments));
			return $message->channel->send('```php' . PHP_EOL . $evaled . '```');
		}
		catch (Exception $e) {
			print_r($e->getMessage());
			return $message->channel->send('```php' . PHP_EOL . $e->getMessage() . '```');
		}
	},
	'arguments' => true,
];
