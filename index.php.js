// <?php

require('./bootstrap.php');
var $config = require_once(__DIR__ + '/config.php');

var { basename } = require_once('path');
var { readdirSync: scandir } = require_once('fs');
var { Client } = require_once('discord.js');

var $client = new Client;
$client['commands'] = {};

var $command_files = scandir(__DIR__ + '/commands');

for (let $file of $command_files) {
	const $name = basename($file, '.js');
	$client['commands'][basename($name, '.php')] = include_once(__DIR__ + `/commands/${$name}`);
}

$client.on('ready', function() {
	print_r('Ready!');
});

$client.on('message', function($message) {
	if (stripos($message['content'], PREFIX) !== 0 || $message['author']['bot']) return;

	var [$name, ...$arguments] = explode(' ', substr($message['content'], strlen(PREFIX)));

	// because `explode()` doesn't take a regex,
	// and I don't wanna recreate `preg_split()`
	$arguments = array_filter($arguments, function($argument) {
		return $argument;
	});

	if (!$client['commands'][$name]) return;

	var $command = $client['commands'][$name];

	if ($command['arguments'] && empty($arguments)) {
		return $message.reply('you didn\'t provide any arguments!');
	}

	$command.execute($message, $arguments)
		.catch(function($e) {
			print_r($e['stack']);
			$message.reply('there was an error trying to execute that command!');
		});
});

$client.login($config['token']);
