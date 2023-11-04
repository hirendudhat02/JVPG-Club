import { StyleSheet, Dimensions } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
const DEVICE_WIDTH = Dimensions.get("screen").width / 1;
const DEVICE_HEIGHT = Dimensions.get("screen").height / 9;

const styles = StyleSheet.create({
  favHeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
    marginVertical: scale(10),
  },
  backIcon: {
    height: scale(20),
    width: scale(20),
    marginHorizontal: scale(20),
  },
  headerText: {
    fontSize: scale(20),
    marginHorizontal: scale(80),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  FlatContainer: {
    flexDirection: "row",
    marginVertical: scale(5),
    alignItems: "center",
    marginHorizontal: scale(20),
    borderBottomWidth: scale(0.5),
    borderBottomColor: "#d9dbda",
    paddingHorizontal:scale(10)
  },
  imageContainer: {
    backgroundColor: "#C0C0C0",
    height: scale(40),
    width: scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: { height: scale(25), width: scale(25) },
  nameText: {
    marginHorizontal: scale(5),
    textAlign: "center",
    alignSelf: "flex-start",
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(13),
    bottom: scale(5),
    fontWeight: "500",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: scale(50),
    width: "100%",
    padding: scale(20),
  },
  submitButton: {
    height: Dimensions.get("screen").height / 16,
    width: Dimensions.get("screen").width / 1.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
  },
  submitContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    shadowColor: "black",
  },
  headingText: {
    fontSize: scale(17),
    right: scale(30),
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  messageText: {
    marginHorizontal: scale(35),
    textAlign: "center",
    fontSize: scale(12.5),
    fontFamily: FONTS.POPPINS_MEDIUM,
    lineHeight: scale(20),
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  submitText: {
    color: "white",
    fontSize: scale(20),
    fontFamily: FONTS.POPPINS_MEDIUM,

    lineHeight: scale(40),
  },
  flatListStyle: { paddingBottom: scale(210) },
  checkbox: {
    height: scale(30),
    width: scale(30),
    borderRadius: scale(10),
  },
  itemNameView: {
    width: scale(260),
    justifyContent: "flex-start",
    marginVertical: scale(8),
    alignItems:"center"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalSubContainer: {
    width: Dimensions.get("screen").width / 1.17,
    backgroundColor: COLORS.WHITE,
    marginVertical: scale(230),
    marginHorizontal: scale(25),
    bottom: scale(35),
    alignItems: "center",
    borderRadius: scale(10),
  },
  modalSuccessSubContainer: {
    width: Dimensions.get("screen").width / 1.35,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    borderRadius: scale(17),
  },
  thankyouMessage: {
    padding: scale(20),
    textAlign: "center",
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
    letterSpacing: scale(0.2),
  },
  modalButton: {
    width: Dimensions.get("screen").width / 1.35,
    height: Dimensions.get("screen").height / 18,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
    borderTopWidth: scale(0.3),
    borderTopColor: COLORS.BLACK,
  },
  okButton: {
    fontSize: scale(17),
    color: COLORS.RED,
    fontWeight: "bold",
    alignSelf: "center",
  },
  saveText: {
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  plusButton: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
    marginBottom: scale(10),
  },
  headText:{
    fontSize: scale(12),
    paddingHorizontal: scale(50),
    color: COLORS.BLACK,
    fontFamily:FONTS.POPPINS_REGULAR,
    textAlign:"center",
    marginBottom:scale(30),
    marginTop:scale(20)
  }
});
export default styles;
