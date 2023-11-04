import React from "react";
import { View, Text, Image } from "react-native";
import StatusCBar from "../StatusBar";
import { IMAGES } from "../../Utils/Images";
import styles from "./style";
import FastImage from "react-native-fast-image";

interface ScreenHeaderProps {
  headText: string;
  smallHeadText?: any;
}

const ScreenHeader = (props: ScreenHeaderProps) => {
  const { headText, smallHeadText } = props;
  return (
    <View style={styles.Container}>
      <StatusCBar />
      <FastImage
        source={IMAGES.MAIN_LOGO}
        style={styles.imageLogoStyle}
        resizeMode="stretch"
      />
      <Text style={styles.signinHeadingText}>{headText}</Text>
    </View>
  );
};
export default ScreenHeader;
