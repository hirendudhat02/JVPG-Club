/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/Navigation/MainNavigation";
import StatusBar from "./src/Component/StatusBar";
import { Provider } from "react-redux";
import store from "./src/Redux/Store/Store";
import { COLORS } from "./src/Utils/Colors";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer independent>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
