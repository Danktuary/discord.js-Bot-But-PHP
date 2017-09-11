// <?php

var { RichEmbed } = include_once('discord.js');

exports['execute'] = async function($message, $arguments) {
	var $client = $message['client'];
	var $sanc = $client['users']['get']('126485019500871680');

	var $embed = new RichEmbed()
		['setColor']('#4E5A91')
		['setAuthor'](
			`Made by ${$sanc['tag']}, for shits 'n giggles.`,
			$sanc['displayAvatarURL'],
			'https://github.com/Danktuary/discord.js-Bot-But-PHP',
		)
		['addField']('Total commands', count(Object['keys']($client['commands'])), true)
		['addField']('Total users', count(array($client['users'])), true)
		['addField']('Total servers', count(array($client['guilds'])), true)
		['addField']('NODE_VERSION', NODE_VERSION, true)
		['addField']('DISCORD_JS_VERSION', DISCORD_JS_VERSION, true)
		['addField']('PREFIX', PREFIX, true);

	return $message['channel']['send']({ embed: $embed });
};
