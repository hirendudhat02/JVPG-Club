import { StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginVertical: scale(10),
    // borderWidth:scale(0.5),
    paddingHorizontal:scale(15),
  },
 
  nextBackIcon: {
    height: scale(30),
    width: scale(30),
    tintColor: COLORS.WHITE,
  },
  textStyle: {
    textAlign: "center",
    fontSize: scale(22),
    // marginRight: scale(10),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    color: COLORS.BLACK,
    lineHeight:scale(25)
  },
  
  filterIcon: {
    height: scale(30),
    width: scale(30),
  },
});
export default styles;
