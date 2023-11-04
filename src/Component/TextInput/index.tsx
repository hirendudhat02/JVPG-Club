import { validatePathConfig } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./style";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

interface TextInputProps {
  placeholder: string;
  value?: any;
  onChangeText?: (value: string) => void;
  showText?: string;
  secureTextEntry?: boolean;
  keyboard?: any;
  onSubmitEditing?: any;
  headText?: string;
  headTextStyle?: any;
  containerStyle?: any;
  hideText?: any;
  hideImage?: any;
  selectionColor?: any;
  rs?: any;
  disabled?: boolean;
  inputContainer?: any;
  errorText?: string;
  errorView?: any;
  onFocus?: any;
  focusHandler?: () => void;
  blurHandler?: () => void;
}
const Input = (props: TextInputProps) => {
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboard,
    onSubmitEditing,
    headText,
    headTextStyle,
    hideText,
    hideImage,
    selectionColor,
    rs,
    disabled,
    containerStyle,
    inputContainer,
    errorText,
    errorView,
    onFocus,
    focusHandler,
    blurHandler,
  } = props;

  console.log("onFocus :::", onFocus);

  return (
    <View>
      <View
        style={[
          styles.mainContainer,
          containerStyle,
          {
            borderColor:
              onFocus == false
                ? COLORS.BLACK
                : errorView === undefined
                ? COLORS.WHITE
                : errorView === true
                ? COLORS.RED
                : COLORS.WHITE,
          },
        ]}
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[
            headTextStyle,
            {
              color:
                onFocus == false
                  ? COLORS.BLACK
                  : errorView === undefined
                  ? COLORS.WHITE
                  : errorView === true
                  ? COLORS.RED
                  : COLORS.WHITE,
            },
          ]}
        >
          {headText}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {rs !== undefined ? (
            <View
              style={{
                flex: scale(2),
                marginHorizontal: scale(5),
                alignSelf: "center",
              }}
            >
              <Text
                style={[
                  styles.rsText,
                  {
                    color:
                      onFocus == false
                        ? COLORS.BLACK 
                        : errorView === undefined
                        ?COLORS.WHITE
                        : errorView === true
                        ? COLORS.RED
                        :COLORS.WHITE,
                    paddingBottom: scale(5),
                  },
                ]}
              >
                {rs}
              </Text>
            </View>
          ) : null}
          <View
            style={[
              inputContainer,
              {
                flex: rs !== undefined ? 6 : 8,
              },
            ]}
          >
            <TextInput
              placeholder={placeholder}
              style={[
                styles.textInputStyle,
                {
                  fontSize:
                    rs !== undefined
                      ? scale(14)
                      : Platform.OS === "ios"
                      ? scale(13)
                      : scale(14),
                },
              ]}
              selectionColor={selectionColor}
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboard}
              onSubmitEditing={onSubmitEditing}
              onFocus={focusHandler}
              onBlur={blurHandler}
              placeholderTextColor={COLORS.LIGHT_ORANGE}
            />
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={hideText}
              style={styles.hideTextButton}
              disabled={disabled}
            >
              <Image
                source={hideImage}
                style={[
                  styles.hideShowImage,
                  {
                    tintColor: onFocus == false ? COLORS.BLACK : COLORS.WHITE,
                  },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {errorText == null || undefined || "" ? null : (
        <Text
          style={{
            marginHorizontal: scale(5),
            color: COLORS.RED,
            fontFamily: FONTS.POPPINS_REGULAR,
          }}
        >
          {errorText}
        </Text>
      )}
    </View>
  );
};
export default Input;
