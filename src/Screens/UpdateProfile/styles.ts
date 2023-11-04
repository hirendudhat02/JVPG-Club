import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  whiteContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: scale(15),
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderRadius: scale(10),
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:scale(8)
  },
  addressText: {
    fontSize: scale(12),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  editImg: { height: scale(25), width: scale(25), tintColor: COLORS.RED },
  addressValText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(5),
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
    paddingVertical: scale(20),
  },
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  closeIcon: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    marginRight: scale(10),
    tintColor: COLORS.RED,
  },
  inviteMembers: {
    alignSelf: "center",
    fontSize: scale(17),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    color: COLORS.BLACK,
  },
  otpText:{
    alignSelf: "center",
    marginTop: scale(25),
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1.5,
    color: COLORS.BLACK,
    fontSize: scale(20),
    alignSelf:"baseline"
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.RED,
    color: COLORS.BLACK,
    alignSelf:"baseline"

  },
  InputSubContainer: {
    width: "95%",
    height: Platform.OS === "ios" ? "30%" : "25%",
    alignItems: "center",
    alignSelf:"center"
  },
  saveText: {
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  submitButton: {
    height: Dimensions.get("screen").height / 17,
    width: Dimensions.get("screen").width / 1.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
  },
  otpInputContainer:{
    height: scale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  input:{
    borderBottomWidth: scale(0.7),
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  }
});
export default styles;
