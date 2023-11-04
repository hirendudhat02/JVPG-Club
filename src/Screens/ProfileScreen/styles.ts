import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.ORANGE },

  profileImageuri: {
    height: scale(130),
    width: scale(130),
    borderRadius: scale(100),
  },
  imageBackground: {
    padding: scale(5),
    backgroundColor: COLORS.YELLOW,
    alignSelf: "center",
    borderRadius: scale(100),
    marginTop: scale(30),
  },
  profileDataText: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop:scale(25)
  },
  nameText: {
    color: COLORS.BLACK,
    fontSize: scale(18),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_REGULAR,
    marginTop: scale(15),
    letterSpacing: scale(0.2),
    marginLeft: scale(10),
    textTransform: "capitalize",
  },
  idText: {
    color: COLORS.YELLOW,
    fontSize: scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(5),
    marginLeft: scale(5),
  },
  FlatimageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: scale(10),
    flexDirection: "row",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: Dimensions.get("screen").width / 1.11,
    marginHorizontal: scale(7),
    borderWidth: scale(1),
    marginTop: scale(10),
    paddingHorizontal: scale(5),
    height: scale(50),
    borderRadius: scale(10),
    backgroundColor: COLORS.WHITE,
  },
  listView: {
    width: Dimensions.get("screen").width / 1.6,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: scale(5),
    // marginLeft: scale(5),
  },
  titleText: {
    fontSize: scale(13),
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    // marginLeft: scale(10),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingHorizontal: scale(20),
    justifyContent: "center",
  },
  subModalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    paddingVertical: scale(10),
  },
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  closeIcon: {
    height: scale(35),
    width: scale(35),
    alignSelf: "flex-end",
    marginRight: scale(10),
    tintColor: COLORS.RED,
  },
  inviteMembers: {
    alignSelf: "center",
    fontSize: scale(20),
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
    color: COLORS.BLACK,
    marginTop: scale(10),
  },
  timeDesText: {
    paddingHorizontal: scale(20),
    marginTop: scale(5),
    textAlign: "center",
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  renderContainer: { marginTop: scale(20), marginHorizontal: scale(20) },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  renderKey: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLORS.BLACK,
    fontSize: scale(12),
  },
  renderValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(5),
  },
  renderValue: {
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  saveText: {
    fontSize: scale(13),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  submitButton: {
    height: Dimensions.get("screen").height / 17,
    width: Dimensions.get("screen").width / 1.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(10),
    alignSelf: "center",
  },
  logoImg:{
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
  }
});
export default styles;
