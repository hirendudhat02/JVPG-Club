import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.ORANGE,
  },
  flatmainView: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: scale(10),
  },
  flatSubview: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width / 1.2,
    borderWidth: scale(1),
    borderRadius: scale(5),
  },

  buttonStyle: {
    width: scale(140),
    height: Dimensions.get("window").height / 19,
    borderRadius: scale(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    marginTop: scale(20),
  },
  qrWhiteContainer:{
    height: scale(140),
    width: scale(140),
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  guestText:{
    alignSelf: "center",
    fontSize: scale(17),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(3),
  },
  buttonTextstyle: {
    textAlign: "center",
    fontSize: scale(14),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.WHITE,
  },
  contentContainerStyle: {
    marginHorizontal: scale(15),
    paddingBottom: scale(50),
  },

  guestNameText: {
    marginHorizontal: scale(15),
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(14),
  },
  desStyle: {
    fontSize: scale(16),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(10),
  },
  QrMainContainer: {
    alignSelf: "center",
    marginHorizontal: scale(16),
  },
  qrFormat: {
    height: scale(310),
    width: scale(200),
    justifyContent: "center",
    alignItems: "center",
  },
  qrDesc: {
    fontSize: scale(11.5),
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(35),
    paddingHorizontal: scale(35),
    textAlign: "center",
    color: COLORS.WHITE,
  },
  qrCount: {
    fontSize: scale(14),
    fontFamily: FONTS.POPPINS_MEDIUM,
    textAlign: "center",
    color: COLORS.WHITE,
    marginTop: scale(30),
  },
});
export default styles;
