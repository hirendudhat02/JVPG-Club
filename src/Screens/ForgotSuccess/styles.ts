import { Dimensions, Platform, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";

const styles=StyleSheet.create({
    // buttonStyle: {
    //     width: Dimensions.get("window").width / 1.25,
    //     height: Dimensions.get("window").height / 15,
    //     borderRadius: scale(10),
    //     fontFamily: FONTS.POPPINS_REGULAR,
    //     justifyContent: "center",
    //     marginVertical: Platform.OS === "android" ? scale(20) : scale(25),
    //     alignItems: "center",
    //     backgroundColor:COLORS.RED
    //   },
    //   submitText: {
    //     color: COLORS.WHITE,
    //     fontSize: scale(15),
    //     fontFamily: FONTS.POPPINS_REGULAR,
    //   },
    //   mainContainer: {
    //     flex: 1,
    //     backgroundColor: COLORS.ORANGE,
    //     alignItems: "center",
    //   },
    subContainer: {
      marginTop: scale(50),
      alignSelf: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: scale(18),
      color: COLORS.BLACK,
      fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
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