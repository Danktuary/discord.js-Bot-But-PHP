<?php

require './vendor/autoload.php';
require './constants.php';

$config = require_once __DIR__ . '/config.php';

$loop = \React\EventLoop\Factory::create();
$client = new \CharlotteDunois\Yasmin\Client([], $loop);

$client->on('ready', function() {
	print_r('eNd mEeeEEEE pleAASeee' . PHP_EOL);
	print_r('Ready!' . PHP_EOL);
});

$client->commands = [];

$command_files = array_diff(scandir(__DIR__ . '/commands'), ['..', '.']);

foreach ($command_files as $file) {
	$name = basename($file, '.php');
	$client->commands[$name] = include_once(__DIR__ . "/commands/{$file}");
}

$client->on('message', function($message) use($client) {
	if (stripos($message->content, PREFIX) !== 0 || $message->author->bot) return;

	$exploded = explode(' ', substr($message->content, strlen(PREFIX)));

	$name = $exploded[0];
	$arguments = array_filter(array_slice($exploded, 1), function($argument) {
		return $argument;
	});

	if (!isset($client->commands[$name])) return;

	$command = $client->commands[$name];

	if (isset($command['arguments']) && $command['arguments'] && empty($arguments)) {
		return $message->reply('you didn\'t provide any arguments!');
	}

	try {
		$command['execute']($message, $arguments);
	}
	catch (Exception $e) {
		print_r($e->getMessage());
		$message->reply('there was an error trying to execute that command!');
	}

});

$client->login($config['token']);
$loop->run();
