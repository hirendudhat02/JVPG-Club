import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
    // mainContainer: {
    //     flex: 1,
    //     backgroundColor: COLORS.ORANGE,
    //     alignItems: "center",
    //   },
    //   InputContainer: {
    //     width: Dimensions.get("window").width / 1,
    //     height: Dimensions.get("window").height / 2.55,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   },
    //   passheadingText: {
    //     marginTop: scale(-10),
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
    //   buttonText: {
    //     textAlign: "center",
    //     fontSize: scale(17),
    //     fontFamily: FONTS.POPPINS_REGULAR,
    //     color: COLORS.WHITE,
    //   },
    //   submitText: {
    //     color: COLORS.WHITE,
    //     fontSize: scale(15),
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
      marginTop: scale(10),
    },
    subContainer: {
      marginTop: scale(50),
      alignSelf: "center",
      alignItems: "center",
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
    whiteBox: {
      height: scale(20),
      width: scale(20),
      backgroundColor: COLORS.WHITE,
      borderRadius: scale(3),
      borderWidth: scale(0.7),
    },
  
    buttonContainer: {
      height: scale(40),
      width: scale(170),
      marginTop: scale(40),
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.RED,
      borderRadius: scale(7),
    },
    buttonText: {
      fontSize: scale(15),
      color: COLORS.WHITE,
      fontFamily: FONTS.POPPINS_REGULAR,
    },
})
export default styles