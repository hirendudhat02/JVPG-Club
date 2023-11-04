import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Constants
import { KEY } from "../../Utils/AsyncKey";
//Screens
import OnBoarding from "../../Screens/OnBoarding";
import Login from "../../Screens/Login";
import { SCREENS } from "../../Utils/ScreenContant";
import ForgotPassword from "../../Screens/ForgotPassword";
import NewPassword from "../../Screens/NewPassword";
import RegisterScreen from "../../Screens/RegisterScreen";
import OtpScreen from "../../Screens/OtpScreen";
import RegisterDoneScreen from "../../Screens/ForgotSuccess";

const Auth = createNativeStackNavigator();

const AuthNavigation = () => {
  const [initRoute, setInitRoute] = useState("");

  const sessionInfo = async () => {

    AsyncStorage.getItem(KEY.INTRO).then((value) => {
      if (value === null) {
        setInitRoute(SCREENS.ONBOARDING);
      } else {
        // no access token
        setInitRoute(SCREENS.LOGIN);
      }
    });
  };

  useEffect(() => {
    sessionInfo();
  }, []);
  return (
    initRoute.length !== 0 && (
      <Auth.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name={SCREENS.ONBOARDING} component={OnBoarding} />
        <Auth.Screen name={SCREENS.LOGIN} component={Login} />
        <Auth.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPassword} />
        <Auth.Screen name={SCREENS.NEW_PASSWOED} component={NewPassword} />
        <Auth.Screen name={SCREENS.REGISTER} component={RegisterScreen} />
        <Auth.Screen name={SCREENS.OTP_SCREEN} component={OtpScreen} />
        <Auth.Screen name={SCREENS.FORGOT_SUCCESS} component={RegisterDoneScreen} />

      </Auth.Navigator>
    )
  );
};
export default AuthNavigation;
