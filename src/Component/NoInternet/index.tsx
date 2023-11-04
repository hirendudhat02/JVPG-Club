import React from "react";
import { View, Text, ImageBackground } from "react-native";
import FastImage from "react-native-fast-image";
import { scale } from "../../Utils/Helper/Scalling";
const NoInternet = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FastImage
        source={require("../../../Assets/Icons/no-internet.png")}
        style={{ height: scale(70), width: scale(70) }}
        tintColor="#2E4D85"
      />
      <Text>No Internet Connection</Text>
    </View>
  );
};
export default NoInternet;
