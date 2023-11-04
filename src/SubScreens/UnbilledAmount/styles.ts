import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
    renderItemContainer: {
        width: Dimensions.get("screen").width / 1.13,
        backgroundColor: COLORS.WHITE,
        marginHorizontal: scale(20),
        paddingHorizontal: scale(20),
        marginBottom: scale(15),
        borderRadius: scale(10),
        flexDirection:"row",
        justifyContent:"space-between",
        // alignItems:"center",
        
      },
      headerText:{
        fontSize: scale(13),
        color: COLORS.BLACK,
        paddingHorizontal: scale(65),
        fontFamily: FONTS.POPPINS_REGULAR,
        lineHeight: scale(20),
      },
      headerBold:{
        fontSize: scale(13),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_MEDIUM,
      },
      amountfor:{
        fontSize: scale(12),
        color: COLORS.RED,
        fontFamily: FONTS.POPPINS_MEDIUM,
      },
      timeText:{
        fontSize: scale(11),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_REGULAR,
        marginTop:scale(3)
      },
      amountText:{
        fontSize: scale(11),
        color: COLORS.RED,
        paddingBottom: scale(15),
        // marginTop:scale(3)
      },
      viewBillButton:{
        backgroundColor: COLORS.BLACK,
        height: scale(30),
        width: scale(80),
        borderRadius: scale(7),
        justifyContent:"center",
        alignItems:"center"
      },
      viewBillText:{
        fontSize: scale(10.5),
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_REGULAR,
      },
      downloadBillButton:{
        backgroundColor: COLORS.RED,
        height: scale(30),
        width: scale(80),
        borderRadius: scale(7),
        justifyContent: "center",
        alignItems: "center",
        marginTop: scale(10),
      },
      downloadBillText:{
        fontSize: scale(10.5),
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_REGULAR,
      }
});
export default styles;
