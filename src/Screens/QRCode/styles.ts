import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.ORANGE },

  useImageView: { alignItems: "center" },
  ImageStyle: {
    height: scale(160),
    width: scale(160),
    borderRadius: scale(80),
    borderWidth:scale(7),
    borderColor:"#f6c217",
    marginTop: scale(20),
  },
  NameIdStyle: {
    fontSize: scale(20),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(25),
  },
  dateStyle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(12),
    color: COLORS.YELLOW,
    marginTop: scale(5),
  },
  desStyle: {
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_MEDIUM,
    paddingLeft: scale(5),
    marginTop: scale(25),
    textAlign: "center",
    color: COLORS.WHITE,
  },
  qrNotableView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(30),
    borderTopWidth:scale(1),
    paddingVertical:scale(35),
    borderBottomWidth:scale(1),
    borderStyle:"dashed",
    borderColor:COLORS.WHITE,
    marginHorizontal:scale(5)

  },
  qrNotAbleText: {
    paddingHorizontal: scale(50),
    // lineHeight: scale(22),
    letterSpacing: 1,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(12),
    textAlign: "center",
    color:COLORS.WHITE
  },
  buttonView: {
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    // flex: 3.8,
    height: Dimensions.get("screen").height / 1.75,
    marginVertical: scale(10),
  },
  buttonCenterView: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    // flex: 3.8,
    height: Dimensions.get("screen").height / 1.7,
  },
  registerButtonView: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(25),
  },
  viewQRStyle: {
    width: Dimensions.get("screen").width / 1.15,
    height: Dimensions.get("window").height / 16.5,
    borderRadius: scale(10),
    justifyContent: "center",
    backgroundColor: COLORS.RED,
    alignItems: "center",
  },
  ButtonTextStyle: {
    color: COLORS.WHITE,
    fontSize: scale(18),
    fontFamily: FONTS.POPPINS_REGULAR,
  }, 
});
export default styles;
