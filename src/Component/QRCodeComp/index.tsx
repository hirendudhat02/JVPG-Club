import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./style";
import { COLORS } from "../../Utils/Colors";

interface QrProps {
  value: string;
}
const QRCodeScanner = (props: QrProps) => {
  const { value } = props;
  return (
    <View style={styles.qr}>
      <QRCode value={value} size={scale(140)} />
    </View>
  );
};
export default QRCodeScanner;
