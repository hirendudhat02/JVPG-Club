import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    marginHorizontal: scale(15),
    marginTop: scale(20),
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    height: scale(40),
    marginBottom:scale(20)
  },
  searchIcon: { height: scale(30), width: scale(30), tintColor: COLORS.RED },
  searchInputContainer: {
    fontSize: scale(11),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginLeft: scale(10),
    width: "100%",
  },
  renderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(20),
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: scale(20),
    paddingVertical:scale(10),
    borderRadius: scale(10),
  },
  collectionText: {
    fontSize: scale(11),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  bookName: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  bookAuthor: {
    fontSize: scale(10),
    color: COLORS.MEDIUM_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  wishlistText: {
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: "center",
    marginTop:scale(3)

  },
  allowedBookText: {
    fontSize: scale(10),
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: "center",
    marginTop:scale(3)
  },
  imageContainer: { flex: 2, alignItems: "center" },
});
export default styles;
