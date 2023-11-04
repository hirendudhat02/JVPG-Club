import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  media_file: {
    height: Dimensions.get("screen").height / 2.3,
    width: Dimensions.get("screen").width / 1.12,
    backgroundColor: COLORS.RED,
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
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.WHITE,
    marginBottom: scale(30),
    textAlign:"center"
  },
  aboutText: {
    fontSize: scale(23),
    color: COLORS.BLACK,
    alignSelf: "center",
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(25),
  },
  chargeText: {
    fontSize: scale(23),
    color: COLORS.BLACK,
    alignSelf: "center",
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(15),
  },
  descText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingHorizontal: scale(30),
    textAlign: "center",
    // marginTop: scale(20),
  },
  makePaymentButton: {
    height: scale(50),
    width: Dimensions.get("screen").width / 1.12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
    alignSelf: "center",
    backgroundColor: COLORS.RED,
  },
  makePaymentModalButton: {
    height: scale(50),
    width: Dimensions.get("screen").width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
    alignSelf: "center",
    backgroundColor: COLORS.RED,
  },
  bookButton: {
    color: COLORS.WHITE,
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  renderContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(7),
    padding: scale(10),
    alignItems: "center",
    justifyContent: "center",
    width: scale(95),
    paddingVertical:scale(14)
  },
  renderImage: { height: scale(20), width: scale(20), tintColor: COLORS.RED },
  renderAvailableOn: {
    fontSize: scale(11),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: "center",
    marginTop: scale(5),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: scale(15),
    justifyContent: "center",
  },
  subModalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    paddingVertical: scale(10),
  },
  backImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    tintColor: COLORS.RED,
    marginRight: scale(10),
  },
  timeSlotHeading: {
    fontSize: scale(20),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  timeDesText: {
    paddingHorizontal: scale(20),
    paddingLeft:-20,
    marginTop: scale(10),
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  timeRenderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(15),
  },
  timeText: {
    marginLeft: scale(15),
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    top:scale(2)
  },
  whereradioView: {
    borderWidth: 1,
    height: scale(20),
    width: scale(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  radioinnerView: {
    backgroundColor: COLORS.LIGHT_ORANGE,
    height: scale(12),
    width: scale(12),
    borderRadius: 10,
  },
  saveText: {
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  submitButton: {
    height: Dimensions.get("screen").height / 16,
    width: Dimensions.get("screen").width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
    marginBottom:scale(7)
  },
  whiteContainer:{
    backgroundColor: COLORS.WHITE,
    marginHorizontal: scale(18),
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    borderRadius: scale(10),
    marginBottom:scale(20)
  },
  rowContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.GREY,
    paddingHorizontal: scale(15),
    borderRadius: scale(8),
    paddingVertical:scale(7)
  },
  effectiveText:{
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: scale(22),
  },
  effectiveDate:{
    fontSize: scale(12),
    color: COLORS.LIGHT_GREEN,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: scale(22),
  },
  perHourDate:{
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: scale(22),
  },
  rowWhiteContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(15),
    borderRadius: scale(6),
    paddingVertical:scale(10)
  },
  guestAllowedText:{
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    alignSelf: "center",
    marginTop: scale(15),
  }
});
export default styles;
