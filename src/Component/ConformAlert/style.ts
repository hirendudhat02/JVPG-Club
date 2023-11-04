import { StyleSheet, Dimensions } from "react-native";
// import COLORS from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
// import FONTS from "../../Utils/Fonts";

const styles = StyleSheet.create({
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
    borderTopWidth: scale(0.3),
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
  modalButton: {
    width: Dimensions.get("screen").width / 3.5,
    height: Dimensions.get("screen").height / 18,
    justifyContent: "center",
    alignItems: "center",
  },
  okButton: {
    fontSize: scale(17),
    // color: COLORS.LIGHT_BLUE,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default styles;
