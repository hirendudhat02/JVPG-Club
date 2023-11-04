import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  imageContainer: {
    height: Dimensions.get("screen").height / 2.3,
    width: Dimensions.get("screen").width / 1.12,
    alignSelf: "center",
    marginTop: scale(30),
    borderRadius: scale(10),
  },
  linearView: {
    height: Dimensions.get("screen").height / 2.3,
    width: Dimensions.get("screen").width / 1.12,
    borderRadius: scale(10),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  eventTitle: {
    fontSize: scale(22),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.WHITE,
    marginBottom: scale(35),
    textAlign:"center"
  },
  titleText: {
    fontSize: scale(25),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginBottom: scale(20),
  },
  renderContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    padding: scale(12),
    alignItems: "center",
    width: scale(96),
  },
  renderImage: { height: scale(25), width: scale(25), tintColor: COLORS.RED },
  renderAvailableOn: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: "center",
    alignSelf:"center"
  },
  middleContainer: { marginHorizontal: scale(20), marginVertical: scale(20) },
  aboutText: {
    fontSize: scale(23),
    color: COLORS.BLACK,
    alignSelf: "center",
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(25),
  },
  descText: {
    marginHorizontal: scale(35),
    alignSelf: "center",
    color:COLORS.WHITE,
    fontFamily:FONTS.POPPINS_REGULAR,
    fontSize:scale(11),
    marginTop:scale(10),
    textAlign:"center"
  },
  makePaymentButton: {
    height: Dimensions.get("screen").height / 14,
    width: Dimensions.get("screen").width / 1.12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
  },
  makePaymentModalButton: {
    height: scale(45),
    width: Dimensions.get("screen").width / 1.22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(5),
    alignSelf: "center",
  },
  bookButton: {
    color: COLORS.WHITE,
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: scale(20),
    justifyContent: "center",
  },
  subModalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    paddingVertical: scale(15),
  },
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  titleContainer: { flex: scale(6), alignItems: "center" },
  titleModalText: {
    fontSize: scale(17),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  slectDatetitleModalText: {
    fontSize: scale(17),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  closeContainer: { flex: 2,  },
  closeImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    tintColor:COLORS.RED,
  },
  backImg: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
  },
  prefferDate: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    fontSize: scale(12),
    marginLeft: scale(35),
    marginTop: scale(30),
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: scale(35),
    marginTop: scale(20),
  },
  borderContainer: {
    borderRadius: scale(20),
    height: scale(20),
    width: scale(20),
    borderWidth: scale(0.7),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.MEDIUM_GREY,
  },
  colorModalContainer: {
    borderRadius: scale(12),
    height: scale(12),
    width: scale(12),
    backgroundColor: COLORS.LIGHT_GREEN,
  },
  colorRedModalContainer: {
    borderRadius: scale(12),
    height: scale(12),
    width: scale(12),
    backgroundColor: COLORS.DARK_RED,
  },
  desText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    marginLeft: scale(15),
    fontFamily:FONTS.POPPINS_MEDIUM
  },
  modalDesText: {
    paddingHorizontal: scale(30),
    marginTop: scale(25),
    fontSize: scale(11.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  timeRenderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(30),
    marginTop: scale(15),
  },
  timeRenderTitle: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  timeRenderTime: {
    fontSize: scale(10.5),
    color: "#868686",
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  footerContainer: {
    position: "relative",
    height: scale(90),
    justifyContent: "center",
    alignItems: "center",
  },
  writeIcon:{
    height: scale(30),
    width: scale(30),
    alignSelf: "center",
    tintColor: COLORS.RED,
  }
});
export default styles;
