import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";

const styles = StyleSheet.create({
  qr: {
    justifyContent: "center",
    marginVertical: scale(10),
    marginHorizontal: scale(80),
    backgroundColor:COLORS.ORANGE
  },
});
export default styles;
