import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  renderItemContainer: {
    borderRadius: scale(10),
    marginHorizontal: scale(15),
    marginBottom: scale(15),
    backgroundColor: COLORS.SKIN_COLOR,
    paddingHorizontal: scale(10),
    width: Dimensions.get("screen").width / 1.1,
  },
  renderItemRow: {
    flexDirection: "row",
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
  },
  renderItemHeadText: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
    fontSize: scale(14),
    flex: 1,
  },
  renderItemText: {
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  lineView: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 0.2,
    marginHorizontal: scale(15),
  },
  buttonText: {
    textDecorationLine: "underline",
    color: COLORS.ORANGE,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: scale(12),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: scale(15),
  },
  pastBillRenderItem: {
    flexDirection: "row",
    justifyContent: "center",
  },
  reciptNo: {
    fontSize: scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.RED,
    paddingHorizontal: scale(5),

  },
  downloadPdfImg: {
    height: scale(22),
    width: scale(22),
    marginLeft: scale(10),
  },
  paidContainer: {
    width: Dimensions.get("screen").width / 7.3,
    backgroundColor: COLORS.RED,
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
    alignSelf: "flex-end",
    borderRadius: scale(20),
    height:scale(23),
    paddingVertical:scale(1),
    marginTop:scale(5)
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(20),
    marginTop: scale(5),
  },
  date: {
    fontSize: scale(11),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
  },
  dateValue: {
    fontSize: scale(11),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
  },
  amountStyle: {
    fontSize: scale(12),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
  },
  headerContainer: {
    marginTop: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateView: {
    marginHorizontal: scale(5),
    marginTop: scale(2),
    flexDirection: "row",
    alignItems: "center",
  },
  downBillIcon: { height: scale(65), width: scale(65), marginRight: scale(5) },
  dateSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateSubContainer2: {
    flex: 1,
    marginTop: scale(5),
    flexDirection: "column",
    alignItems: "baseline",
  },
});
export default styles;
