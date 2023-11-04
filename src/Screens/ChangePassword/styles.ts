import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  titleText: {
    fontSize: scale(18),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
  },
  subTitleText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(10),
  },
  subContainer: {
    marginTop: scale(50),
    alignSelf: "center",
    alignItems: "center",
  },
  userName: {
    marginTop: scale(60),
    backgroundColor: COLORS.WHITE,
    width: Dimensions.get("screen").width / 1.15,
    height: scale(45),
    borderRadius: scale(5),
    paddingHorizontal: scale(20),
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  whiteBox: {
    height: scale(20),
    width: scale(20),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(3),
    borderWidth: scale(0.7),
  },

  buttonContainer: {
    height: scale(40),
    width: scale(170),
    marginTop: scale(40),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(7),
  },
  buttonText: {
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
