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
  aboutSquashText: {
    alignSelf: "center",
    fontSize: scale(20),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop:scale(25)
  },
  desStyles: {
    marginHorizontal: scale(25),
    alignSelf: "center",
    color:COLORS.WHITE,
    fontFamily:FONTS.POPPINS_REGULAR,
    fontSize:scale(11),
    textAlign:"center"
  },
  saveText: {
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  submitButton: {
    height: Dimensions.get("screen").height / 14,
    width: Dimensions.get("screen").width / 1.12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
  },
  submitModalButton: {
    height: Dimensions.get("screen").height / 14,
    width: Dimensions.get("screen").width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
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
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  titleContainer: { flex: scale(8), alignItems: "center" },
  titleModalText: {
    fontSize: scale(19),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    // marginLeft: scale(20),
    // marginTop:scale(20)
  },
  timeSlotModalText: {
    fontSize: scale(17),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,

  },
  closeContainer: { flex: 2, justifyContent: "center" },
  closeImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    tintColor: COLORS.RED,
  },
  backImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-start",
    tintColor: COLORS.RED,
  },
  dayTimeDes:{
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(30),
    marginHorizontal:scale(3)
  },
  whenDes:{
    fontSize: scale(10.5),
    color: COLORS.MEDIUM_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(10),
    marginHorizontal:scale(3)

  },
  whereDes:{
    fontSize: scale(10.5),
    color: COLORS.MEDIUM_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(25),
    marginHorizontal:scale(3)

  },
  TodaychoicesView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop:scale(5)
    // marginRight: scale(20),
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
  radioLabel: {
    marginLeft: scale(5),
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
  },
  selectTimeContainer:{
    borderWidth: scale(0.5),
    borderRadius: scale(9),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:scale(5),
    marginHorizontal:scale(2)

  },
  selectTimeText:{
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  downArrow:{ height: scale(20), width: scale(20) },
  memberContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(20),
    marginHorizontal:scale(7)

  },
  memberText:{
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  minusImage:{ height: scale(35), width: scale(35) },
  countText:{
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginHorizontal: scale(15),
  },
  timeRenderContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(25),
  },
  timeText:{
    marginLeft: scale(15),
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    top:scale(2)
  }
});
export default styles;
