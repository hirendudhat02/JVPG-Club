import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: scale(10),
    marginTop: scale(40),
    marginHorizontal: scale(20),
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  writeImage: {
    height: scale(80),
    width: scale(80),
    tintColor: COLORS.RED,
    marginTop: scale(30),
  },
  successText: {
    fontSize: scale(20),
    color: COLORS.BLACK,
    marginTop: scale(10),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  feedText: {
    fontSize: scale(14),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(5),

  },
  successDes: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(20),
    textAlign: "center",
    paddingHorizontal: scale(20),
  },
  successDes2: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingBottom: scale(60),
    marginTop: scale(20),
    textAlign: "center",
    paddingHorizontal: scale(20),
  },
  backFeedbackButton: {
    height: scale(45),
    width: scale(150),
    backgroundColor: COLORS.BLACK,
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    height: scale(45),
    width: scale(150),
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(30),
    marginHorizontal: scale(20),
  },
});
export default styles;
