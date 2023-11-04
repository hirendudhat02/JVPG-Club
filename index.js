/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import messaging from "@react-native-firebase/messaging";
import { Text } from "react-native";

messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
AppRegistry.registerComponent(appName, () => App);
