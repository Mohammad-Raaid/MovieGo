/**
 * @format
 */

import {AppRegistry, Text, TouchableOpacity} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


console.disableYellowBox = true;
// Override Text scaling
if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
} else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
}
if (TouchableOpacity.defaultProps) {
    TouchableOpacity.defaultProps.activeOpacity = 1;
} else {
    TouchableOpacity.defaultProps = {};
    TouchableOpacity.defaultProps.activeOpacity = 1;
}

AppRegistry.registerComponent(appName, () => App);
