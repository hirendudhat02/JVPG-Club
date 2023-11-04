import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    marginHorizontal: scale(15),
    marginTop: scale(20),
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    height:scale(40),
    marginBottom:scale(10)
  },
  searchIcon: { height: scale(30), width: scale(30),tintColor:COLORS.RED },
  searchInputContainer: {
    fontSize: scale(11),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_REGULAR,
    marginLeft: scale(10),
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(17),
    marginVertical: scale(12),
    
  },
  headerText: {
    fontSize: scale(14),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  viewArrow: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
  },
  arrivalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    marginLeft: scale(15),
    width: scale(210),
    paddingHorizontal: scale(12),
    borderRadius: scale(9),
    paddingVertical: scale(5),
  },
  arrivalImageContainer: {
    height: scale(100),
    width: scale(60),
    // backgroundColor: COLORS.RED,
  },
  arrivalBookname: {
    fontSize: scale(14),
    color: COLORS.RED,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  arrivalBookAuthor: {
    fontSize: scale(10),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
  },
  arrivalBookCategory: {
    backgroundColor: COLORS.BLACK,
    alignSelf: "baseline",
    marginTop: scale(10),
    paddingHorizontal: scale(20),
    paddingVertical: scale(3),
    borderRadius: scale(20),
  },
  arrivalBookCategoryText: {
    fontSize: scale(10),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    marginHorizontal: scale(15),
    marginTop: scale(15),
    paddingVertical: scale(12),
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
    borderWidth: scale(0.5),
  },
  footerText: {
    fontSize: scale(14),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
  },
  footerImg: { height: scale(20), width: scale(20), tintColor: COLORS.RED },
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
  titleContainer: { flex: scale(8), alignItems: "center" },
  titleModalText: {
    fontSize: scale(20),
    color: COLORS.BLACK,
    fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
  },
  closeContainer: { flex: 2, justifyContent: "center" },
  closeImg: {
    height: scale(30),
    width: scale(30),
    alignSelf: "flex-end",
    tintColor: COLORS.RED,
  },
  subModalContainer2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },
  nameInput: {
    borderWidth: scale(0.4),
    marginTop: scale(5),
    height: scale(45),
    borderRadius: scale(9),
    fontSize: scale(12),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_REGULAR,
    paddingHorizontal: scale(10),
    textAlignVertical:"center"
  },
  bookContainer: { marginHorizontal: scale(15), marginTop: scale(45) },
  authorContainer: { marginHorizontal: scale(15), marginTop: scale(30) },

  saveText: {
    fontSize: scale(17),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS_MEDIUM,
  },
  submitButton: {
    height: Dimensions.get("screen").height / 16,
    width: Dimensions.get("screen").width / 1.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.RED,
    borderRadius: scale(7),
    alignSelf: "center",
    marginBottom:scale(5)
  },
  bookNameText:{
    fontSize: scale(11),
    color: COLORS.MEDIUM_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
  }
});
export default styles;
