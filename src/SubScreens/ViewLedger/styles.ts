import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
    renderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
     
        height: scale(40),
        paddingHorizontal: scale(10),
      },
      renderDateContainer: { flex: 5, },
      renderDateText: {
        fontSize: scale(12),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.BLACK,
      },
      renderDebit: { flex: 2.5,marginRight:scale(30)},
      renderCredit: { flex: 2, marginLeft: scale(10), alignItems: "center" },
      flatDateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: scale(20),
        marginTop: scale(10),
        backgroundColor: COLORS.RED,
        height: scale(40),
        paddingHorizontal: scale(10),
        borderRadius:scale(10)
      },
      flatDateText: {
        fontSize: scale(15),
        fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
        color: COLORS.WHITE,
      },
      debitText: {
        fontSize: scale(15),
        fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
        color: COLORS.WHITE,
        marginLeft:scale(20)
      },
      emptyContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical:scale(350)
        
      },
      emptyText:{
        fontSize: scale(15),
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLORS.BLACK,
        textAlign: "center",
      }
})
export default styles