import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles =StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.RED,
        alignItems: "center",
        marginHorizontal: scale(20),
        marginTop: scale(20),
        borderRadius: scale(10),
        // paddingVertical: scale(5),
        paddingHorizontal: scale(10),
      },
      searchIcon: { height: scale(30), width: scale(30) },
      searchInputContainer: {
        fontSize: scale(11),
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_REGULAR,
        marginLeft: scale(10),
        width: "100%",
      },
      renderContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: scale(10),
        backgroundColor:COLORS.WHITE,
        padding:scale(10),
        borderRadius:scale(10)
      },
      collectionText:{
        fontSize: scale(12),
        color: COLORS.RED,
        fontFamily: FONTS.POPPINS_REGULAR,
      },
      bookName:{
        fontSize: scale(14),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_REGULAR,
      },
      bookAuthor:{
        fontSize: scale(10),
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_REGULAR,
      },
      wishlistText:{
        fontSize: scale(11),
        color: COLORS.RED,
        fontFamily: FONTS.POPPINS_REGULAR,
        textAlign:"center"
      },
      allowedBookText:{
        fontSize: scale(11),
        fontFamily: FONTS.POPPINS_REGULAR,
        textAlign:"center"
      },
      imageContainer:{ flex: 2, alignItems: "center" }
})
export default styles