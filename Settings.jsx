const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');
const path = require('path');

module.exports = class AmongSettings extends React.PureComponent {
	render() {
		const { getSetting, updateSetting } = this.props;
		return (
			<SliderInput
				minValue={1}
				maxValue={100}
				initialValue={getSetting('volume', 1) * 100}
				markers={[1, 50, 100]}
				onValueChange={change => {
					updateSetting('volume', change / 100);
					powercord.pluginManager.get(__dirname.split(path.sep).pop()).updateVolume();
				}}
			>
				Volume
			</SliderInput>
		);
	}
};
