import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FocusAwareStatusBar = ({ barColor = "#000", barStyle = "default", isLightBar = false, isTopSpace = true }) => {
	const insets = useSafeAreaInsets();
	const isFocused = useIsFocused();
	const isAndroid = Platform.OS === 'android';

	return isAndroid
		?
		isFocused
			?
			<>
				<StatusBar backgroundColor={!isTopSpace ? "#00000000" : barColor} translucent={true} barStyle={isLightBar ? 'light-content' : 'dark-content'} />
				<View style={{ height: isTopSpace ? StatusBar.currentHeight : 0 }} />
			</>
			:
			<View style={{ height: StatusBar.currentHeight }} />
		// null
		:
		<View style={{ paddingTop: insets.top, backgroundColor: barColor }} >
			<StatusBar transculent={true} barStyle={isLightBar ? 'light-content' : 'dark-content'} />
		</View>
};

export default FocusAwareStatusBar;