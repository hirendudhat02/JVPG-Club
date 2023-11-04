import { Dimensions, Platform, StyleSheet } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  draweContainerScrollView: {
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  lineView: {
    width:
      Platform.OS === "ios"
        ? Dimensions.get("window").width / 1.4
        : Dimensions.get("window").width / 1.38,
    borderTopWidth: scale(0.3),
    borderTopColor: COLORS.WHITE,
    height: scale(0.5),
    marginHorizontal: scale(12),
  },
  textContainer: {
    flex: Platform.OS == "ios" ? scale(9) : scale(9),
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: scale(5),
  },
  drawerMainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  drawerItemStyle: {
    height: scale(45),
    // justifyContent: "center",
    // width:
    //   Platform.OS === "ios"
    //     ? Dimensions.get("window").width / 1.38
    //     : Dimensions.get("window").width / 1.38,
    borderTopWidth: scale(0.3),
    borderTopColor: COLORS.WHITE,
    // paddingHorizontal:scale(5)
  },
  menuDrawerText: {
    fontSize: scale(12),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: scale(20),
  },
  hederButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  helpIcon: {
    height: scale(20),
    width: scale(20),
    marginHorizontal: scale(45),
    tintColor: COLORS.RED,
  },
  logoutIcon: {
    height: scale(20),
    width: scale(20),
    marginHorizontal: scale(5),
    tintColor: COLORS.RED,
  },

  menuTextContainer: {
    flex: scale(6),
    justifyContent: "center",
    alignItems: "flex-start",
  },
  helpContainer: {
    flex: scale(3),
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  menuText: {
    marginHorizontal: scale(20),
    fontSize: scale(17),
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  DrawerContainer: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    justifyContent:"space-between"
  },
  backContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: scale(1),
    marginTop: scale(5),
  },
  backIcon: {
    height: scale(20),
    width: scale(20),
    tintColor: COLORS.RED,
  },
  mainContainer: { flex: 1, backgroundColor: COLORS.SKIN_COLOR },
});
export default styles;
