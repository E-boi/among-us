const { Plugin } = require('powercord/entities');
window.sus = new Audio('https://raw.githubusercontent.com/E-boi/among-us/main/sussy.mp3');
const Settings = require('./Settings');

module.exports = class AmongUs extends Plugin {
	updateVolume() {
		window.sus.volume = this.settings.get('volume', 1);
	}

	startPlugin() {
		window.sus.pause();
		window.sus.loop = true;
		window.sus.volume = this.settings.get('volume', 1);
		window.sus.play();
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Among us',
			render: Settings,
		});
	}

	pluginWillUnload() {
		window.sus.pause();
		powercord.api.settings.unregisterSettings(this.entityID);
	}
};
