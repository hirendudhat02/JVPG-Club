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
//   InputContainer: {
//     width: Dimensions.get("window").width / 1,
//     height: Dimensions.get("window").height / 6.15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: Platform.OS === "ios" ? scale(20) : scale(20),
//   },
//   headText: {
//     fontSize: scale(16),
//     alignSelf: "flex-start",
//     marginHorizontal: scale(15),
//     top: scale(15),
//     fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
//     color: COLORS.BLACK,
//   },
//   InputSubContainer: {
//     width: Dimensions.get("window").width / 1.2,
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: scale(15),
//     marginTop: scale(25),
//     marginHorizontal: scale(15),
//   },
//   underlineStyleBase: {
//     width: 40,
//     height: 45,
//     borderWidth: 0,
//     borderBottomWidth: 1.5,
//     color: COLORS.BLACK,
//     fontSize: scale(20),
//   },

//   underlineStyleHighLighted: {
//     borderColor: "#FF8C00",
//     color: COLORS.BLACK,
//   },
//   footerContainer: {
//     alignItems: "center",
//     height: Dimensions.get("screen").height / 13,
//     justifyContent: "center",
//   },
//   buttonStyle: {
//     width: Dimensions.get("window").width / 1.18,
//     height: Dimensions.get("window").height / 15,
//     borderRadius: scale(10),
//     justifyContent: "center",
//     marginVertical: scale(30),
//     alignItems: "center",
//     backgroundColor:COLORS.RED
//   },
//   buttonText: {
//     textAlign: "center",
//     fontSize: scale(17),
//     fontFamily: FONTS.POPPINS_REGULAR,
//     color: COLORS.WHITE,
//   },
//   buttonView: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   goBackButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: scale(30),
//   },
//   backImage: {
//     height: scale(20),
//     width: scale(20),
//     alignSelf: "center",
//     tintColor: COLORS.RED,
//   },
//   backText: {
//     fontSize: scale(16),
//     fontFamily: FONTS.POPPINS_REGULAR,
//     marginTop: Platform.OS === "ios" ? scale(0) : scale(5),
//     marginHorizontal: scale(5),
//     color: COLORS.RED,
//   },
//   sendAgainButton: {
//     alignItems: "center",
//     marginLeft: scale(20),
//     alignSelf: "center",
//   },
//   sendAgainText: {
//     fontSize: scale(16),
//     fontFamily: FONTS.POPPINS_REGULAR,
//     color: COLORS.RED,
//     marginTop: Platform.OS === "ios" ? scale(0) : scale(5),
//   },
// });
// export default styles;

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
  subTitleText: {
    fontSize: scale(12),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(10),
    paddingHorizontal: scale(60),
    textAlign: "center",
  },
  subContainer: {
    marginTop: scale(50),
    alignSelf: "center",
    alignItems: "center",
  },
  InputSubContainer: {
    width: Dimensions.get("window").width / 1.15,
    justifyContent: "center",
    alignItems: "center",
    fontSize: scale(15),
    marginTop: scale(60),
    marginHorizontal: scale(15),
  },
  underlineStyleBase: {
    width: scale(47),
    height: scale(50),
    borderWidth: 1,
    backgroundColor:COLORS.WHITE,
    color: COLORS.BLACK,
    fontSize: scale(20),
    borderRadius:scale(10)
  },

  underlineStyleHighLighted: {
    borderColor: "#FF8C00",
    color: COLORS.BLACK,
  },
  buttonContainer:{
    height: scale(45),
    width: scale(180),
    marginTop: scale(50),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLORS.RED,
    borderRadius:scale(7)
  },
  buttonText:{
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
});
export default styles;
