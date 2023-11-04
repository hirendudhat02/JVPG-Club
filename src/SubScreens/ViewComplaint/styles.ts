import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: scale(5),
    marginTop: scale(25),
  },
  buttonSubContainer: { justifyContent: "center", alignItems: "center" },
  buttonText: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: scale(20),
    backgroundColor:COLORS.BLACK,
    borderRadius:scale(10),
    marginBottom:scale(20)
  },
  barStyle: {
    width: Dimensions.get("screen").width / 2.45,
    height: scale(6),
    borderRadius: scale(10),
  },
  renderMainContainer: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: scale(10),
    marginHorizontal: scale(20),
    marginTop: scale(20),
    borderRadius: scale(10),
    paddingHorizontal: scale(20),
  },
  complaintIdKey: {
    fontSize: scale(11),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  complaintIdValue: {
    fontSize: scale(12),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  complaintTitle: {
    fontSize: scale(12.5),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  billNoText: {
    fontSize: scale(12),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  departmentText: {
    fontSize: scale(11),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    width: scale(140),
    textAlign: "center",
  },
  dateText: {
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  dashContainer: {
    borderTopWidth: scale(1),
    borderBottomWidth: scale(1),
    flex: 1,
    borderStyle: "dashed",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(5),
    marginTop:scale(5)
  },
  complaintDesc: {
    marginVertical: scale(10),
    fontSize: scale(10),
    color: "#C4C4C4",
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  footerContainer: {
    height: scale(70),
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  addComplaintButton:{
    width: Dimensions.get("window").width / 1.12,
    height: Dimensions.get("window").height / 16.5,
    borderRadius: scale(10),
    justifyContent: "center",
    backgroundColor: COLORS.RED,
    marginLeft: scale(5),
    alignItems: "center",
  },
  addComplaintText:{
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  }
});
export default styles;
