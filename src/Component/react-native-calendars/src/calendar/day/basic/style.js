import { StyleSheet } from "react-native";
import * as defaultStyle from "../../../style";
import constants from "../../../commons/constants";
export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      alignSelf: "stretch",
      alignItems: "center",
    },
    base: {
      height: 35,
      width: 35,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#C6C6C6",
      borderRadius: 5,
    },
    text: {
      marginTop: constants.isAndroid ? 4 : 6,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: "rgba(255, 255, 255, 0)",
      ...appStyle.textDayStyle,
    },
    alignedText: {
      marginTop: constants.isAndroid ? 4 : 6,
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 5,
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor,
      borderRadius: 5,
    },
    todayText: {
      color: appStyle.todayTextColor,
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
    },
    disabledText: {
      color: appStyle.textDisabledColor,
    },
    inactiveText: {
      color: appStyle.textInactiveColor,
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle,
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor,
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor,
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor,
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor,
    },
    // @ts-expect-error
    ...(theme["stylesheet.day.basic"] || {}),
  });
}