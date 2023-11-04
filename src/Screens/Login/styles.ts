// import { Dimensions, Platform, StyleSheet } from "react-native";
// import { COLORS } from "../../Utils/Colors";
// import { scale } from "../../Utils/Helper/Scalling";
// import { FONTS } from "../../Utils/Fonts";

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: COLORS.ORANGE,
//     alignItems: "center",
//   },
//   logoImage:{ height: scale(180), width: scale(180), marginTop: scale(70) },
//   InputContainer: {
//     width: Dimensions.get("window").width / 1,
//     height: Dimensions.get("window").height / 3.55,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginVertical: scale(10),
//   },
//   headingText: {
//     marginTop: scale(-10),
//     marginHorizontal: scale(10),
//     backgroundColor: COLORS.ORANGE,
//     width: Dimensions.get("window").width / 4.6,
//     textAlign: "center",
//     fontSize: Platform.OS === "ios" ? scale(12) : scale(13),
//     fontFamily: FONTS.POPPINS_MEDIUM,
//   },
//   emailinputContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: scale(10),
//     width: Dimensions.get("screen").width / 1.71,
//     paddingBottom: scale(5),
//   },
//   passinputContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: scale(10),
//     width: Dimensions.get("screen").width / 1.71,
//   },
//   passheadingText: {
//     marginTop: scale(-10),
//     marginHorizontal: scale(12),
//     backgroundColor: COLORS.ORANGE,
//     width: Dimensions.get("window").width / 5,
//     textAlign: "center",
//     fontSize: Platform.OS === "ios" ? scale(12) : scale(13),
//     fontFamily: FONTS.POPPINS_MEDIUM,
//   },
//   firstTimeuserStyle: {
//     marginLeft: scale(160),
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop:scale(15)
//   },
//   ForgotPasswordText: {
//     fontSize: scale(13),
//     fontFamily: FONTS.POPPINS_REGULAR,
//     textAlign: "right",
//     color: COLORS.BLACK,
//   },
//   lastButtonContainer: {
//     width: Dimensions.get("screen").width / 1,
//     height: Dimensions.get("screen").height / 3.65,
//     alignItems: "center",
//   },
//   buttonStyle: {
//     width: Dimensions.get("window").width / 1.25,
//     height: Dimensions.get("window").height / 13,
//     borderRadius: scale(10),
//     justifyContent: "center",
//     backgroundColor:COLORS.RED,
//     alignItems: "center",
//   },
//   submitText: {
//     color: COLORS.WHITE,
//     fontSize: scale(15),
//     fontFamily: FONTS.POPPINS_REGULAR,
//   },
//   lastTextContainer: {
//     justifycontent: "center",
//     marginVertical: scale(30),
//     marginHorizontal: scale(30),
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   firstTimeuserText: {
//     color: COLORS.RED,
//     fontSize: scale(15),
//     fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
//   },
//   firstTimeHeading: {
//     fontSize: scale(15),
//     fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
//     textAlign: "center",
//     color: COLORS.BLACK,
//   },
// });
// export default styles

import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  titleText: {
    fontSize: scale(18),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: scale(40),
  },
  eyeContainer: {
    height: scale(45),
    width: scale(40),
    position: "absolute",
    right: 0,
    top: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  hideShowImage: {
    height: scale(17),
    width: scale(17),
    opacity: scale(0.7),
  },
  image: {
    width: scale(100),
    height: scale(100),
  },
  subTitleText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(10),
  },
  subContainer: {
    marginTop: scale(30),
    alignSelf: "center",
    alignItems: "center",
  },
  userNameContainer: {
    marginTop: scale(30),
  },
  input: {
    textAlignVertical: "center",
    fontSize: scale(13),
    color: COLORS.BLACK,
    backgroundColor: COLORS.WHITE,
    width: Dimensions.get("screen").width / 1.15,
    height: scale(45),
    borderRadius: scale(7),
    paddingHorizontal: scale(20),
    paddingRight: scale(45),
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  passwordContainer: {
    marginTop: scale(20),
  },
  whiteBox: {
    height: scale(20),
    width: scale(20),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(3),
    borderWidth: scale(0.7),
  },
  remeberText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginLeft: scale(10),
  },
  labelText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginBottom: scale(5),
  },
  forgetText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  rememberContainer: {
    width: Dimensions.get("screen").width / 1.15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: scale(15),
    marginHorizontal: scale(25),
  },
  rememberSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: scale(6),
  },
  buttonContainer: {
    height: scale(45),
    width: scale(200),
    marginTop: scale(40),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(7),
  },
  buttonText: {
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(25),
  },
  dontText: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  signupText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
