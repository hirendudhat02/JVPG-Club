import { StyleSheet, Dimensions, Platform } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width / 1.25,
    height: Dimensions.get("screen").height / 14,
    borderWidth: scale(0.5),
    justifyContent: "center",
    borderRadius: scale(10),
    marginTop: scale(20),
    borderStyle: "solid",
  },

  textInputStyle: {
    width: Dimensions.get("screen").width / 1.71,

    color: COLORS.BLACK,
    fontSize: scale(10),
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: "left",
    alignSelf: "center",
    padding: 0,
  },
  hideShowImage: {
    height: scale(17),
    width: scale(17),
    opacity: scale(0.7),
  },
  hideTextButton: {},
  rsText: {
    fontSize: scale(15),
    marginHorizontal: scale(10),
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  imageContainer: {
    flex: scale(1.5),
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width / 5,
    height: Dimensions.get("screen").height / 18,
    paddingBottom: scale(5),
  },
});
export default styles;
