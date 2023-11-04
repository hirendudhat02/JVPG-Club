import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  // mainContainer: {
  //     flex: 1,
  //     backgroundColor: COLORS.ORANGE,
  //     alignItems: "center",
  //   },
  //   InputContainer: {
  //     width: Dimensions.get("window").width / 1,
  //     height: Dimensions.get("window").height / 3.25,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginVertical: scale(10),
  //   },
  //   headingText: {
  //     marginTop: scale(-8),
  //     marginHorizontal: scale(10),
  //     backgroundColor: COLORS.ORANGE,
  //     width: Dimensions.get("window").width / 5.0,
  //     textAlign: "center",
  //     fontSize: Platform.OS === "ios" ? scale(12) : scale(13),
  //     fontFamily: FONTS.POPPINS_MEDIUM,
  //   },
  //   emailinputContainer: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     marginHorizontal: scale(10),
  //     width: Dimensions.get("screen").width / 1.71,
  //   },
  //   backToLoginContainer: {
  //     width: Dimensions.get("window").width / 1,
  //     height: Dimensions.get("window").height / 22,
  //   },
  //   backButton: {
  //     flexDirection: "row",
  //     justifyContent: "flex-start",
  //     alignItems: "center",
  //     alignSelf: "flex-start",
  //     marginHorizontal: scale(40),
  //   },
  //   backText: {
  //     fontSize: 17,
  //     fontFamily: FONTS.POPPINS_REGULAR,
  //     marginHorizontal: scale(5),
  //     color: COLORS.RED,
  //   },
  //   backIcon: {
  //     width: scale(20),
  //     height:scale(20),
  //     marginTop: Platform.OS === "ios" ? scale(0) : scale(1),
  //     tintColor: COLORS.RED,
  //   },
  //   buttonStyle: {
  //     width: Dimensions.get("window").width / 1.25,
  //     height: Dimensions.get("window").height / 15,
  //     borderRadius: scale(10),
  //     fontFamily: FONTS.POPPINS_REGULAR,
  //     justifyContent: "center",
  //     marginVertical: Platform.OS === "android" ? scale(20) : scale(25),
  //     alignItems: "center",
  //     backgroundColor:COLORS.RED
  //   },
  //   saveText: {
  //     fontSize: scale(13),
  //     color: COLORS.WHITE,
  //     fontFamily: FONTS.POPPINS_REGULAR,
  //   },
  titleText: {
    fontSize: scale(18),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
  },
  subTitleText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(5),
  },
  subContainer: {
    marginTop: scale(50),
    alignSelf: "center",
    alignItems: "center",
  },
  InputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    marginTop: scale(-8),
    marginHorizontal: scale(10),
    backgroundColor: COLORS.ORANGE,
    width: Dimensions.get("window").width / 5.0,
    textAlign: "center",
    fontSize: Platform.OS === "ios" ? scale(12) : scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  emailinputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: scale(10),
    width: Dimensions.get("screen").width / 1.71,
  },
  backToLoginContainer: {
    width: Dimensions.get("window").width / 1,
    height: Dimensions.get("window").height / 22,
    marginTop: scale(40),
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
    marginHorizontal: scale(40),
  },
  backText: {
    fontSize: 17,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginHorizontal: scale(10),
    color: COLORS.WHITE,
  },
  backIcon: {
    width: scale(20),
    height: scale(20),
    marginTop: Platform.OS === "ios" ? scale(0) : scale(1),
    tintColor: COLORS.WHITE,
  },
  buttonStyle: {
    height: scale(40),
    width: scale(170),
    marginTop: scale(40),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(5),
  },
  saveText: {
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  userName: {
    marginTop: scale(60),
    backgroundColor: COLORS.WHITE,
    width: Dimensions.get("screen").width / 1.15,
    height: scale(45),
    borderRadius: scale(5),
    paddingHorizontal: scale(20),
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
