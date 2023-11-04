import React, { useEffect, useState } from "react";
import StackNavigation from "../StackNavigation";
import AuthNavigation from "../AuthNavigation";
import { SCREENS } from "../../Utils/ScreenContant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";

const Main = createNativeStackNavigator();

const MainNavigation = () => {
  const [initRoute, setInitRoute] = useState("");
  const theme = useColorScheme();
  const sessionInfo = async () => {
    AsyncStorage.getItem(KEY.DATA).then((value: any) => {
      let temp = JSON.parse(value);
      if (temp === null||temp==="null") {
        setInitRoute(SCREENS.AUTH_NAVIGATOR);
      } else {
        setInitRoute(SCREENS.STACK_NAVIGATOR);
      }
    });
  };
  useEffect(() => {
    sessionInfo();
  }, [initRoute]);
  return (
    initRoute.length !== 0 && (
      <Main.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Main.Screen name={SCREENS.AUTH_NAVIGATOR} component={AuthNavigation} />
        <Main.Screen
          name={SCREENS.STACK_NAVIGATOR}
          component={StackNavigation}
        />
      </Main.Navigator>
    )
  );
};
export default MainNavigation;
