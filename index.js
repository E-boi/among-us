const { Plugin } = require('powercord/entities');

module.exports = class BlurNSFW extends Plugin {
	startPlugin() {
		const audio = new Audio();
		audio.pause();
		audio.loop = true;
		audio.src = 'https://raw.githubusercontent.com/E-boi/among-us/main/sussy.mp3';
		audio.volume = 1;
		audio.play();
	}
};
