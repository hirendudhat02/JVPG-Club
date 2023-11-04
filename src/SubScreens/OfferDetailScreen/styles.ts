import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
const DEVICE_WIDTH = Dimensions.get("screen").width / 1;
const DEVICE_HEIGHT = Dimensions.get("screen").height / 8;
const styles = StyleSheet.create({
  headerImage: {
    backgroundColor: COLORS.WHITE,
    height: Dimensions.get("screen").height / 3.3,
    width: Dimensions.get("screen").width / 1.12,
    borderRadius: scale(10),
  },
  mediaTitle: {
    marginTop: scale(25),
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(18),
    color: COLORS.WHITE,
    paddingLeft: scale(25),
    paddingRight: scale(25),
    textAlign: "center",
  },
  eventDescTitle: {
    marginTop: scale(30),
    fontSize: scale(22),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(10),
    marginHorizontal: scale(25),
  },
  iconImage: { height: scale(20), width: scale(20) },
  keyFeatureTitle: {
    textAlign: "left",
    marginLeft: scale(15),
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
  },
  shareButton: {
    height: scale(50),
    width: Dimensions.get("screen").width /1.45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf:"center"
  },
  cancelButton: {
    height: scale(45),
    width: scale(145),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: scale(0.5),
    backgroundColor: COLORS.BLACK,
    borderRadius: scale(10),
  },
  shareText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(15),
    color: COLORS.WHITE,
    textAlign:"center"
  },
  footerContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    paddingHorizontal: scale(25),
  },
  lastButtonContainer: {
    width: Dimensions.get("screen").width / 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: scale(5),
  },
  desStyle:{
    lineHeight: scale(18),
    textAlign: "center",
    fontSize: scale(11),
    color: COLORS.WHITE,
  }
});
export default styles;
