import { StyleSheet, Platform, Dimensions } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
// import COLORS from '../../Utils/Colors';
// import FONTS from '../../Utils/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: scale(1),
    backgroundColor: COLORS.ONBOARD_ORANGE,
  },
  imageContainer: {
    height: Dimensions.get("screen").height / 1.22,
    width: Dimensions.get("screen").width,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: scale(30),
    marginBottom: scale(20),
  },
  titleText: {
    fontSize: scale(25),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    paddingHorizontal: scale(80),
    textAlign: "center",
  },
  subTitleText: {
    fontSize: scale(11),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingHorizontal: scale(50),
    textAlign: "center",
    marginTop: scale(20),
  },
  dotMainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotContainer: {
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: scale(70),
  },
  dotStyle: { height: scale(6), borderRadius: scale(6) },
  backContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: { height: scale(35), width: scale(35) },
});

export default styles;
