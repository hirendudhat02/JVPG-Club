import React from "react";
import { StatusBar } from "react-native";
import { COLORS } from "../../Utils/Colors";

const StatusCBar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor={COLORS.ORANGE}
      barStyle="dark-content"
    />
  );
};
export default StatusCBar;
