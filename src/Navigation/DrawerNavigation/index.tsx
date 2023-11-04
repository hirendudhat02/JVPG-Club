import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SCREENS } from "../../Utils/ScreenContant";
import TabNavigation from "../TabNavigation";
import CustomDrawer from "../../Component/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      backBehavior={"none"}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transperent",
        drawerActiveTintColor: "#F16600",
        unmountOnBlur: true,
        swipeEnabled: false,
      }}
      initialRouteName={SCREENS.BOTTOM_TAB_NAVIGATOR}
      useLegacyImplementation={true}
    >
      <Drawer.Screen
        name={SCREENS.BOTTOM_TAB_NAVIGATOR}
        component={TabNavigation}
      />
    
      
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
