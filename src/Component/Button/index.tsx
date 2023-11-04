import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

interface buttonProps {
  onPress?: () => void;
  text?: string;
  style?: any;
}
const Button = (props: buttonProps) => {
  const { onPress, text, style } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.submitButton, { ...style }]}
    >
      <Text style={styles.saveText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
