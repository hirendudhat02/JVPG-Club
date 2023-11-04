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
    fontSize: scale(14),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  barContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: scale(33),
    // width: Dimensions.get("screen").width / 2.4,
    height: scale(5),
    backgroundColor:COLORS.BLACK,
    borderRadius:scale(10),
    marginTop:scale(10)
  },
  barStyle: {
    width: Dimensions.get("screen").width / 2.65,
    height: scale(5),
    borderRadius: scale(10),
  
  },
  viewBookingTextheading: {
    textAlign: "center",
    fontSize: scale(19),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    color: COLORS.BLACK,
  },
  viewBookingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(10),
    marginHorizontal: scale(10),
  },
  nextBackIcon: {
    height: scale(27),
    width: scale(27),
    tintColor: COLORS.WHITE,
  },
  flatListMaincontainer: {
    marginTop: scale(25),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: scale(5),
  },
  eventView: {
    height: Dimensions.get("screen").height / 6,
    justifyContent: "flex-end",
    alignItems: "center",
    width: Dimensions.get("screen").width / 2.31,
    borderTopStartRadius:scale(10),
    borderTopRightRadius:scale(10),
    backgroundColor: COLORS.SKIN_COLOR,
  },
  eventTitle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: scale(14),
    color: COLORS.BLACK,
    paddingTop: scale(5),
    textAlign:"justify"
  },
  contentContainer: {
    marginHorizontal: scale(9.5),
    marginTop: scale(20),
  },
});
export default styles;
