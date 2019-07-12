/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

import Achievement from './src/page/simulation/Homepage';
import TimeShow from './src/page/Ceshis';
AppRegistry.registerComponent(appName, () => App);
