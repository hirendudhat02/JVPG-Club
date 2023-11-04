import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(250),
  },
  emptyText: {
    fontSize: scale(15),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    color: COLORS.BLACK,
  },
  titleText: {
    fontSize: scale(12.5),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    textAlign:"center",
    paddingVertical:scale(2)
  },
  gallaryIcon: {
    height: Dimensions.get("screen").height / 4,
    justifyContent: "flex-end",
    alignItems: "center",
    width: Dimensions.get("screen").width / 1.12,
    borderRadius: scale(10),
  },
  offerMainContainer: {
    marginHorizontal: scale(15),
    marginTop: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  whiteContainer:{
    width: Dimensions.get("screen").width / 1.12,
    backgroundColor: COLORS.WHITE,
    paddingVertical: scale(10),
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    paddingHorizontal:scale(10)
  }
});
export default styles
