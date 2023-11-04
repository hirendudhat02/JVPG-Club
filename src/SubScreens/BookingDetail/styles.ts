import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  submitText: {
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(15),
    marginBottom:scale(15)
  },
  image: {
    height: scale(85),
    width: scale(85),
    borderRadius: scale(8),
    alignSelf: "flex-start",
  },
  whiteContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: scale(17),
    marginTop: scale(20),
    // paddingHorizontal: scale(20),
    borderRadius: scale(10),
  },
  dot1: {
    height: scale(25),
    width: scale(25),
    borderRadius: scale(20),
    // backgroundColor: "#f6ad6b",
    
    alignSelf: "center",
    marginTop: scale(-15),
  },
  imageContainer: {
    flexDirection: "row",
    // alignItems: "center",
    paddingHorizontal: scale(20),
    // marginTop: scale(10),
    paddingVertical: scale(10),
    marginBottom: scale(10),
  },
  qrContainer: {
    flexDirection: "row",
    // alignItems: "center",
    marginTop: scale(10),
    paddingVertical: scale(10),
    marginBottom: scale(10),
    marginHorizontal: scale(20),
  },
  yogaClassContainer: {
    flex: 5.5,
    justifyContent: "center",
  },
  classText: {
    fontSize: scale(15),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  classId: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(3),
  },
  timeText: {
    fontSize: scale(12.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginLeft: scale(10),
  },
  icon: { height: scale(20), width: scale(20), tintColor: COLORS.RED },
  dashedView: {
    borderWidth: scale(0.7),
    borderStyle: "dashed",
    borderColor:"#cfcfcf"
    // marginHorizontal: scale(20),
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: scale(10),
  },
  subHeaderText: {
    marginTop: scale(10),
    alignSelf: "center",
    fontSize: scale(13),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  memberText: {
    alignSelf: "center",
    fontSize: scale(12.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  enrollMentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.GREY,
    paddingVertical: scale(10),
    marginVertical: scale(10),
    paddingHorizontal: scale(10),
    borderRadius: scale(5),
    marginHorizontal: scale(10),
    marginTop: scale(20),
  },
  enrollKey: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: "center",
  },
  enrollValue: {
    fontSize: scale(13),
    color: COLORS.GREEN,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginRight: scale(22),
  },
  amountValue: {
    fontSize: scale(13),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
    // marginRight: scale(10),
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    borderRadius: scale(5),
    marginHorizontal: scale(10),
  },
  dot2: {
    height: scale(25),
    width: scale(25),
    borderRadius: scale(20),
    backgroundColor: "#f35856",
    alignSelf: "center",
    top: scale(15),
  },
  cancelButton: {
    height: scale(50),
    width: scale(150),
    backgroundColor: COLORS.BLACK,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
  },
  shareButton: {
    height: scale(50),
    width: scale(150),
    backgroundColor: COLORS.RED,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
  },
  saveText: {
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(18),
    marginTop: scale(50),
    marginBottom:scale(20)
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: scale(30),
    justifyContent: "center",
  },
  subModalContainer: {
    backgroundColor: COLORS.SKIN_COLOR,
    borderRadius: scale(10),
    paddingVertical: scale(10),
  },
  bookCancelText: {
    marginTop: scale(5),
    alignSelf: "center",
    fontSize: scale(15),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  homeButton: {
    height: scale(40),
    width: scale(130),
    backgroundColor: COLORS.BLACK,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
  },
  viewBookButton: {
    height: scale(40),
    width: scale(130),
    backgroundColor: COLORS.RED,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
  },
  cancelBookingModalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(10),
    marginTop: scale(10),
  },
  enrollTitle:{
    fontSize: scale(13.5),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  subHeadText:{
    fontSize: scale(10.5),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingHorizontal:scale(40),
    textAlign:"center"
  }
});
export default styles;
