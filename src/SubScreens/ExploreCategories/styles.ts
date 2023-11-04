import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  renderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(20),
    marginTop: scale(10),
    backgroundColor: COLORS.WHITE,
    padding: scale(8),
    borderRadius: scale(5),
  },
  categoryText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  bookText: {
    fontSize: scale(12),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  viewArrow: { height: scale(20), width: scale(20), tintColor: COLORS.RED },
});
export default styles;
