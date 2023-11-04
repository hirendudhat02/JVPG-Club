import { StyleSheet, Dimensions, Platform } from "react-native";
// import COLORS from "../../Utils/Colors";
// import FONTS from "../../Utils/Fonts";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width / 1,
    marginTop: Platform.OS === "ios" ? scale(70) : scale(70),
  },
  imageLogoStyle: {
    height: scale(150),
    width: scale(150),
  },
  signininsmallHeadText: {
    fontSize: scale(14),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: "#333333",
    textAlign: "center",
    lineHeight: scale(20),
    marginTop: scale(5),
    paddingLeft: scale(30),
    paddingRight: scale(30),
  },
  signinHeadingText: {
    fontSize: scale(26),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    color: COLORS.BLACK,
    marginTop: scale(15),
    textAlign: "center",
  },
});
export default styles;
