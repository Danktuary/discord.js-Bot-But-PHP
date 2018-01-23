<?php

use CharlotteDunois\Yasmin\Models\MessageEmbed;

return [
	'execute' => function($message, $arguments) {
		$client = $message->client;
		$sanc = $client->users->get('126485019500871680');

		$embed = (new MessageEmbed())
			->setColor('#4E5A91')
			->setAuthor(
				"Made by {$sanc->tag}, for shits 'n giggles.",
				$sanc->getDisplayAvatarURL(),
				'https://github.com/Danktuary/discord.js-Bot-But-PHP'
			)
			->addField('Total commands', count($client->commands), true)
			->addField('Total users', count($client->users->all()), true)
			->addField('Total servers', count($client->guilds->all()), true)
			->addField('PHP_VERSION', PHP_VERSION, true)
			->addField('YASMIN_VERSION', YASMIN_VERSION, true)
			->addField('PREFIX', PREFIX, true);

		return $message->channel->send('', compact('embed'));
	},
];
