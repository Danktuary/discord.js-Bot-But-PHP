// <?php

var $node_versions = process.versions.node.split('.');

module.exports = {
	__DIR__: __dirname,
	__FILE__: __filename,
	NODE_VERSION: process.version,
	NODE_MAJOR_VERSION: $node_versions[0],
	NODE_MINOR_VERSION: $node_versions[1],
	NODE_RELEASE_VERSION: $node_versions[2],
	DISCORD_JS_VERSION: require('discord.js').version,
};
