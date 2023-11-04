import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { IMAGES } from "../../Utils/Images";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";

interface headerProps {
  onPress?: () => void;
  text: any;
  menuOnPress?: () => void;
}
const Header = (props: headerProps) => {
  const { onPress, text, menuOnPress } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={{ flex: 2 }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={IMAGES.BACK_ICON}
            style={styles.nextBackIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>  
      </View>
      <View style={{ flex: 8}}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={{ flex: 2,alignItems:"flex-end"}}>
        <TouchableOpacity onPress={menuOnPress}>
          <Image source={IMAGES.MORE} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
