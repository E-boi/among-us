const { React } = require('powercord/webpack');
const { SliderInput } = require('powercord/components/settings');

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
					window.sus.volume = change / 100;
				}}
			>
				Volume
			</SliderInput>
		);
	}
};
