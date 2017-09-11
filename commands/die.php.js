// <?php

exports.execute = async function($message) {
	await $message['channel'].send('Killing the process...');
	die();
};
