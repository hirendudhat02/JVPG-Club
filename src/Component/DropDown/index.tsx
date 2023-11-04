/* eslint-disable no-undef */
import React from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
const { width } = Dimensions.get("window");
import SelectDropdown from "react-native-select-dropdown";
import { COLORS } from "../../Utils/Colors";
import { IMAGES } from "../../Utils/Images";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";

export default DropdownComponent = ({
  placeHolder,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <SelectDropdown
      data={options}
      onSelect={(selectedItem, index) => {
        setSelectedOption(selectedItem.value);
        console.log(selectedItem, index);
      }}
      defaultButtonText={placeHolder}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.label;
      }}
      rowTextForSelection={(item, index) => {
        return item.label;
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={(isOpened) => {
        return isOpened ? (
          <Image source={IMAGES.DOWN_ARROW} style={styles.upArrow} />
        ) : (
          <Image source={IMAGES.DOWN_ARROW} style={styles.downArrow} />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
      selectedRowStyle={styles.dropdown1SelectedRowStyle}
      search={true}
      searchInputStyle={styles.dropdown1searchInputStyleStyle}
      searchPlaceHolder={"Search here"}
      searchPlaceHolderColor={"darkgrey"}
      renderSearchInputLeftIcon={() => {
        return <Image source={IMAGES.SEARCH} style={styles.searchIcon} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },
  downArrow: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
  },
  searchIcon: {
    height: scale(30),
    width: scale(30),
    tintColor: COLORS.RED,
  },
  upArrow: {
    height: scale(25),
    width: scale(25),
    tintColor: COLORS.RED,
    transform: [{ rotate: "180deg" }],
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: scale(10),
    fontFamily: FONTS.POPPINS_REGULAR,
    marginTop: scale(10),
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1SelectedRowStyle: { backgroundColor: "rgba(0,0,0,0.1)" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2SelectedRowStyle: { backgroundColor: "rgba(255,255,255,0.2)" },
  dropdown2searchInputStyleStyle: {
    backgroundColor: "#444",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: "slategray",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
  },
});
