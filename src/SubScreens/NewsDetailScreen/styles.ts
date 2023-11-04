import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
const DEVICE_WIDTH = Dimensions.get("screen").width / 1;
const DEVICE_HEIGHT = Dimensions.get("screen").height / 11;
const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: COLORS.SKIN_COLOR,
    alignSelf: "center",
    marginTop: scale(25),
    borderRadius: scale(10),
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(20),
  },
  mediaTitle: {
    marginTop: scale(5),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    fontSize: scale(20),
    color: COLORS.RED,
    paddingLeft: scale(25),
    paddingRight: scale(25),
    textAlign: "center",
  },
  footerMainContainer: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
  footerContainer: {
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    flexDirection: "row",
    paddingHorizontal: scale(15),
    marginTop:scale(15)
  },
  cancelButton: {
    height: scale(50),
    width: scale(152),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: scale(0.5),
    backgroundColor: COLORS.BLACK,
    borderRadius: scale(10),
  },
  shareText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: scale(16),
    color: COLORS.WHITE,
  },
  zoomImage: {
    width: "90%",
    height: "80%",
    marginTop: scale(-10),
    alignSelf: "center",
    borderRadius: scale(10),
  },
  modalShareButton: {
    height: scale(40),
    width: scale(150),
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: scale(0.5),
    // borderColor: COLORS.RED,
    borderRadius: scale(10),
    marginTop: scale(-150),
    alignSelf: "center",
  },
  modalShareText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: scale(15),
    color: COLORS.WHITE,
  },
  shareButton: {
    height: scale(50),
    width: scale(152),
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: scale(0.5),
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
  },
  modalContainer: { flex: 1, backgroundColor: COLORS.SKIN_COLOR },
  modalCloseTouchable: {
    marginTop: scale(50),
    alignItems: "flex-end",
    marginHorizontal: scale(330),
  },
  modalClose: {
    height: scale(15),
    width: scale(15),
  },
  pinchImage: {
    borderRadius: scale(10),
    // backgroundColor:'red'
  },
});
export default styles;
