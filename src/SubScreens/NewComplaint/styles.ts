import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: scale(5),
    marginTop: scale(25),
  },
  buttonSubContainer: { justifyContent: "center", alignItems: "center" },
  buttonText: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: scale(25),
    backgroundColor:COLORS.BLACK,
    borderRadius:scale(10),
    marginBottom:scale(20),
    marginTop:scale(10)
  },
  barStyle: {
    width: Dimensions.get("screen").width / 2.45,
    height: scale(6),
    borderRadius: scale(10),
  },
  depDropContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(10),
    backgroundColor: COLORS.WHITE,
    paddingVertical: scale(10),
    marginTop: scale(10),
    borderRadius: scale(10),
    borderWidth: scale(0.5),
  },
  dropdownText: {
    fontSize: scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
  },
  selectDropdownText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  subContainer: { marginTop: scale(25), marginHorizontal: scale(20) },
  downArrow: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
  },
  desInput: {
    height: scale(150),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_REGULAR,
    borderWidth: scale(0.5),
    textAlignVertical: "top",
    paddingHorizontal: scale(10),
    color:COLORS.BLACK,
    marginTop: scale(10),
  },
  addComplaintButton:{
    width: Dimensions.get("window").width / 1.12,
    height: Dimensions.get("window").height / 16.5,
    borderRadius: scale(10),
    justifyContent: "center",
    backgroundColor: COLORS.RED,
    alignItems: "center",
  },
  addComplaintText:{
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  footerContainer:{
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(25),
  },
  viewBookingContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Dimensions.get("screen").height / 22,
    marginTop: scale(10),
    marginHorizontal: scale(20),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: scale(20),
    justifyContent: "center",
  },
  subModalContainer: {
    backgroundColor: COLORS.SKIN_COLOR,
    borderRadius: scale(10),
    paddingVertical: scale(10),
  },
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  titleContainer: { flex: scale(8), alignItems: "center" },
  titleModalText: {
    fontSize: scale(17),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    marginLeft: scale(20),
  },
  closeContainer: { flex: 2, justifyContent: "center" },
  closeImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    tintColor: COLORS.RED,
  },
  cameraMainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cameraSubContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cameraContainer : {
    height: scale(80),
    width: scale(80),
    borderRadius: scale(100),
    borderWidth: 0.6,
    marginTop: scale(10),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.RED,
  },
  cameraImg: {
    height: scale(45),
    width: scale(45),
    tintColor: COLORS.RED,
  },
  cameraText: {
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(5),
    color: COLORS.RED,
  },
});
export default styles;
