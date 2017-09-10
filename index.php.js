// <?php

require('./bootstrap.php');

print_r('test');

die();

require('./functions.php');
include_once('./constants.php');
include_once('./config.php');

print_r(explode(',', 'this,is,a,string', 2));

exit();

var $Discord = require_once('discord.js');
var $client = new $Discord.Client;

$client.on('ready', function() {
	print_r('Ready!');
});

$client.on('message', function($message) {
	if ($message.content === 'ping') {
		$message.reply('pong');
	}
});

$client.login($config['token']);
