import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";

const styles = StyleSheet.create({
  emptyMainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(250),
  },
  emptyContainerText: {
    fontSize: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
  },
  NewsMainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: scale(5),
  },
  newsContainer: {
    width: Dimensions.get("screen").width / 1.11,
    borderRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: scale(10),
    flexDirection: "row",
    backgroundColor: COLORS.SKIN_COLOR,
  },
  newsTextContainer: {
    flex: scale(8),
    marginTop: scale(20),
    marginHorizontal: scale(20),
    marginBottom:scale(15)
  },
  newsSubContainer: {
    borderRadius: scale(10),
    alignSelf: "baseline",
    paddingHorizontal: scale(17),
    paddingVertical: scale(3),
    backgroundColor: COLORS.RED,
    marginLeft: scale(-2),
  },
  newsHeadText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(10),
    textAlign: "center",
    color: COLORS.WHITE,
  },
  shortDesc: {
    fontSize: scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    marginTop: scale(10),
  },
  newsDate: {
    marginTop: scale(5),
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: scale(11),
    color: COLORS.WHITE,
  },
});
export default styles;
