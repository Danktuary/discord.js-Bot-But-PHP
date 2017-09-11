// <?php

exports.execute = async function($message) {
	var $sent = await $message['channel'].send('Ping...');
	$sent.edit(`Pong! Took ${$sent['createdTimestamp'] - $message['createdTimestamp']}`);
};
