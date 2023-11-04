import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SCREENS } from "../../Utils/ScreenContant";
import DrawerNavigation from "../DrawerNavigation";
import ForgotPassword from "../../Screens/ForgotPassword";
import NewPassword from "../../Screens/NewPassword";
import OtpScreen from "../../Screens/OtpScreen";
import ChangePassword from "../../Screens/ChangePassword";
import RegisterDoneScreen from "../../Screens/ForgotSuccess";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      //   initialRouteName={initRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={SCREENS.DRAWER_NAVIGATION}
        component={DrawerNavigation}
      />
      <Stack.Screen name={SCREENS.CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={SCREENS.NEW_PASSWOED} component={NewPassword} />
      <Stack.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
      <Stack.Screen name={SCREENS.FORGOT_SUCCESS} component={RegisterDoneScreen} />

    </Stack.Navigator>
  );
};
export default StackNavigation;
