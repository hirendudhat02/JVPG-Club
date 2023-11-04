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
    marginTop: scale(25),
  },
  successText: {
    fontSize: scale(20),
    color: COLORS.BLACK,
    marginVertical: scale(5),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop:scale(10)
  },
  feedText: {
    fontSize: scale(12),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  successDes: {
    fontSize: scale(12.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(24),
    textAlign: "center",
    paddingHorizontal: scale(20),
  },
  successDes2: {
    fontSize: scale(13),
    color: COLORS.MEDIUM_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
    // marginTop: scale(3),
    // paddingBottom: scale(60),
    textAlign: "center",
    paddingHorizontal: scale(20),
  },

  submitButton: {
    height: scale(45),
    width: scale(160),
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(30),
    marginHorizontal: scale(25),
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(20),
  },
  amountTitle: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  amountValue: {
    fontSize: scale(13),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
