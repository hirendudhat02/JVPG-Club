import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";

const styles =StyleSheet.create({
    emptyContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      emptyText:{
        fontFamily: FONTS.POPPINS_REGULAR,
        fontSize: scale(15),
        color: COLORS.BLACK,
        marginVertical: scale(250),
      },
      boxContainer: {
        marginHorizontal: scale(15),
        paddingVertical: scale(10),
        paddingHorizontal: scale(15),
        marginBottom: scale(15),
        backgroundColor:COLORS.WHITE,
        borderRadius:scale(5),
        flexDirection:"row"
      },
      reciptNo:{
        fontSize: scale(12),
        fontFamily: FONTS.POPPINS_MEDIUM,
        color: COLORS.RED,
      },
      subDateContainer:{
        height: scale(3),
        width: scale(3),
        borderRadius: scale(3),
        backgroundColor: "#707070",
        marginTop: scale(5),
        marginLeft: scale(5),
      },
      transactionText:{
        fontSize: scale(11),
        fontFamily: FONTS.POPPINS_REGULAR,
        marginTop: scale(3),
        marginLeft: scale(5),
        color: "#707070",
        width:Dimensions.get('screen').width /2
      },
      renderKey:{
        fontSize: scale(11),
        color: COLORS.BLACK,
        fontFamily:FONTS.POPPINS_REGULAR,
      },
      renderAmount:{
        fontSize: scale(11),
        color: COLORS.RED,
        fontFamily: FONTS.POPPINS_REGULAR,
        marginTop:scale(3)

      },
      renderRowContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      billDateContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: scale(10),
      },
      payMode:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: scale(2),
      }
})
export default styles