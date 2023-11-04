import { Dimensions, Platform, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
    makePaymentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: scale(15),
        marginTop:scale(10),
        backgroundColor:COLORS.WHITE,
        paddingHorizontal:scale(10),
        borderRadius:scale(10),
        borderWidth:scale(0.7)
      },
    
      emailinputContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: scale(10),
        width: Dimensions.get("screen").width / 1.71,
        paddingBottom: scale(5),
      },
      makePaymentButton: {
        height: scale(50),
        width: Dimensions.get("window").width / 1.11,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(10),
        alignSelf: "center",
        marginVertical: scale(40),
        position:'relative',
        backgroundColor:COLORS.RED
      },
      rsInput:{
        height: scale(45),
        width: Dimensions.get("screen").width / 1.3,
        fontSize: scale(13),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_REGULAR,
      },
      rsText:{
        fontSize: scale(13),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_REGULAR,
      }
})
export default styles