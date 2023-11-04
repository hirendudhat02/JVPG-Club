import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";

const styles = StyleSheet.create({
  startTimeText: {
    fontSize: scale(10),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.SILVER,
    textTransform: "capitalize",
  },
  whiteContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: scale(15),
    borderRadius: scale(20),
    paddingVertical: scale(3),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: scale(20),
  },
  squashHead: {
    fontSize: scale(13),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  titleText: {
    fontSize: scale(22),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_BOLD,
    marginBottom: scale(30),
  },
  eventView: {
    height: Dimensions.get("screen").height / 8,
    width: Dimensions.get("screen").width / 4,
    borderRadius: scale(10),
  },
  bottomWhitwContainer: {
    backgroundColor: COLORS.WHITE,
    padding: scale(5),
    borderRadius: scale(10),
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "column",
    flex: 8,
    alignItems: "baseline",
    marginTop: scale(10),
  },
  categorySubContainer: {
    paddingHorizontal: scale(15),
    // width:scale(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(15),
    height:scale(20)
  },
  eventCategoryTitle: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: scale(10),
    color: COLORS.WHITE,
    lineHeight:scale(20)

  },
  eventTitle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(16),
    color: COLORS.BLACK,
    marginTop: scale(5),
  },
  eventtime: {
    height: scale(22),
    justifyContent: "center",
    alignItems: "baseline",
    borderRadius: scale(15),
    alignSelf: "baseline",
  },
  linearView:{
    width: Dimensions.get("screen").width / 1.1,
    height: Dimensions.get("screen").height / 3.2,
    borderRadius:scale(10),
    justifyContent:"flex-end",
    alignItems:"center",
    paddingBottom:scale(20)
  
  },
  eventIndextime: {
    height: scale(22),
    justifyContent: "center",
    alignItems: "baseline",
    borderRadius: scale(15),
    alignSelf: "center",
    backgroundColor:COLORS.WHITE,
    paddingHorizontal:scale(20),
    marginBottom:scale(10)
  },
  startTimeIndexText:{
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.RED,
    textTransform: "capitalize",
    textAlign:"center",
    lineHeight:scale(22)
  }
});
export default styles;
