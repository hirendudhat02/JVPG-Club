import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";

interface backgroundProps {
  children: React.ReactNode;
}
const Background = (props: backgroundProps) => {
  const { children } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
         <StatusBar
      animated={true}
      backgroundColor={COLORS.LIGHT_ORANGE}
      barStyle="dark-content"
    />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.7 }}
        colors={["#f7c471", "#f35856"]}
        style={styles.backgroundContainer}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Background;
