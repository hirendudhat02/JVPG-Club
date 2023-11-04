import { StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  renderContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    alignSelf: "baseline",
    width: scale(160),
    borderRadius: scale(10),
  },
  renderBorderContainer: {
    flexDirection: "row",
    alignSelf: "baseline",
    width: scale(165),
    // paddingVertical:scale(2),
    borderRadius: scale(10),
    borderWidth:scale(2),
    justifyContent:"center",
    alignItems:"center",
    marginLeft: scale(5),
  },
  renderDateContainer:{
    height: scale(70),
    width: scale(60),
    backgroundColor: COLORS.SKIN_COLOR,
    borderTopStartRadius: scale(10),
    borderBottomStartRadius: scale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  dateText:{
    fontSize: scale(16),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_REGULAR,
    textAlign: "center",
  },
  billNo:{
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  amount:{
    fontSize: scale(11),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  renderAmountContainer:{
    flexDirection: "column",
    marginHorizontal: scale(10),
  },
  billHeader:{
    fontSize: scale(20),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    color: COLORS.BLACK,
    alignSelf: "center",
    marginTop: scale(20),
  },
  queryTextTitle:{ marginHorizontal: scale(15),marginTop:scale(20) },
  queryText:{
    fontSize: scale(20),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  contentContainerStyle:{
    marginHorizontal: scale(5),
    marginTop: scale(25),
    paddingRight: scale(15),
    alignSelf: "baseline",
  },
  queryDes:{
    fontSize: scale(11.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(5),
  },
  desInput:{
    height: scale(140),
    backgroundColor: COLORS.WHITE,
    marginTop: scale(20),
    borderRadius: scale(10),
    fontSize: scale(12),
    paddingHorizontal: scale(15),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
    textAlignVertical:"top"
  },
  submitText:{
    fontSize: scale(14),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  submitContainer:{
    height: scale(45),
    backgroundColor: COLORS.RED,
    marginTop: scale(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(10),
  }
});
export default styles