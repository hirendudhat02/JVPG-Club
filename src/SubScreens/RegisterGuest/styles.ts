import { StyleSheet, Dimensions } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.ORANGE },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.SKIN_COLOR,
    marginHorizontal:scale(17),
    borderRadius:scale(10),
    marginTop:scale(10)
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height / 14,
    width: Dimensions.get("screen").width / 1.12,
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    marginTop:scale(30),
    alignSelf:"center"
  },
  buttonTextstyle: {
    textAlign: "center",
    fontSize: scale(17),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.WHITE,
    lineHeight: scale(45),
  },
  choicesView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal:scale(5)
  },
  radioLabel: {
    marginLeft: scale(5),
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily:FONTS.POPPINS_MEDIUM,
    marginTop:scale(3)
  },
  radioView: {
    borderWidth: 1,
    height: scale(25),
    width: scale(25),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(40),
    marginHorizontal: scale(10),
  },
  radioinnerView: {
    backgroundColor: COLORS.LIGHT_ORANGE,
    height: scale(15),
    width: scale(15),
    borderRadius: 10,
  },
  labelContaienr: {
    width: Dimensions.get("screen").width / 4.1,
    justifyContent: "space-between",
  },
  nullDispayText: {
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingLeft: scale(10),
    textAlign: "center",
    color:COLORS.BLACK,
  },
  nullcontainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    marginBottom:scale(10)
  },
  modalSuccessSubContainer: {
    width: Dimensions.get("screen").width / 1.32,
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(17),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  thankyouMessage: {
    padding: scale(20),
    textAlign: "center",
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
    letterSpacing: scale(1),
    fontWeight: "600",
  },
  modalDeatilButton: {
    width: Dimensions.get("screen").width / 2.6,
    height: Dimensions.get("screen").height / 18,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: scale(0.3),
    borderTopColor: COLORS.BLACK,
    borderRightWidth: scale(0.25),
  },
  YesButton: {
    fontSize: scale(14.5),
    color: COLORS.BLACK,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: scale(30),
  },
  modalDeatilRightButton: {
    width: Dimensions.get("screen").width / 2.6,
    height: Dimensions.get("screen").height / 18,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: scale(0.3),
    borderTopColor: COLORS.BLACK,
  },

  selectMemberText:{
    fontSize: scale(15),
    color: COLORS.WHITE,
    alignSelf: "center",
    marginVertical: scale(25),
    fontFamily:FONTS.POPPINS_MEDIUM
  }
});
export default styles;
