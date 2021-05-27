const { Plugin } = require('powercord/entities');
const audio = new Audio('https://raw.githubusercontent.com/E-boi/among-us/main/sussy.mp3');
const Settings = require('./Settings');

module.exports = class AmongUs extends Plugin {
	updateVolume() {
		audio.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		audio.pause();
		audio.loop = true;
		audio.volume = this.settings.get('volume', 1);
		audio.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Among us',
			render: Settings,
		});
	}

	pluginWillUnload() {
		audio.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
