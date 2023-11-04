import React, { useState } from "react";
import Background from "../../Component/Background";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ScreenHeader from "../../Component/ScreenHeader";
import styles from "./styles";
import Input from "../../Component/TextInput";
import { COLORS } from "../../Utils/Colors";
import { IMAGES } from "../../Utils/Images";
import LinearGradient from "react-native-linear-gradient";
import { SCREENS } from "../../Utils/ScreenContant";
import { scale } from "../../Utils/Helper/Scalling";
import Header from "../../Component/Header";

const NewPassword = ({ navigation }: { navigation: any }) => {
  const [password, setPassword] = useState<string>("");
  const [hide, setHide] = useState<boolean>(true);
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [onBlur, setOnBlur] = useState<boolean>(false);

  const focusHandler = () => {
    setOnFocus(true);
    setOnBlur(false);

    // Do something with event
  };
  // Handling input onBlur event
  const blurHandler = () => {
    setOnFocus(false);
    setOnBlur(true);
  };

  // Hide Text
  const hideText = () => {
    //hide show text button
    setHide((hide) => !hide);
  };
  return (
    // <View style={styles.mainContainer}>
    //   <KeyboardAvoidingView style={styles.mainContainer}>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //       <ScrollView
    //         nestedScrollEnabled
    //         keyboardShouldPersistTaps="handled"
    //         style={{ flexGrow: 1 }}
    //       >
    //         <ScreenHeader headText="Set Password" />
    //         <View style={styles.InputContainer}>
    //           <Input
    //             placeholder="***********"
    //             value={password}
    //             onChangeText={(value: any) => setPassword(value)}
    //             headText={"Password"}
    //             secureTextEntry={hide}
    //             headTextStyle={[
    //               styles.passheadingText,
    //               {
    //                 color:
    //                   password.length === 0
    //                     ? COLORS.BLACK
    //                     : COLORS.LIGHT_ORANGE,
    //               },
    //             ]}
    //             hideText={hideText}
    //             hideImage={hide === true ? IMAGES.HIDE_EYE : IMAGES.SHOW_EYE}
    //             inputContainer={styles.emailinputContainer}
    //             onFocus={onFocus}
    //             focusHandler={focusHandler}
    //             blurHandler={blurHandler}
    //             onSubmitEditing={Keyboard.dismiss}
    //           />
    //           {/* =================== Submit Button ================== */}
    //           <TouchableOpacity
    //             style={styles.buttonStyle}
    //             onPress={() => navigation.navigate(SCREENS.FORGOT_SUCCESS)}
    //           >
    //             <Text
    //               style={styles.submitText}
    //               numberOfLines={2}
    //               adjustsFontSizeToFit
    //             >
    //               Confirm
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       </ScrollView>
    //     </TouchableWithoutFeedback>
    //   </KeyboardAvoidingView>
    // </View>
    <Background>
      <View style={{ marginTop: scale(10) }}>
        <Header text={"New Password"} onPress={()=>navigation.goBack()}/>
      </View>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subContainer}>
              <Text style={styles.titleText}>Set Password</Text>
              <Text style={styles.subTitleText}>
                Create strong password below
              </Text>
              <TextInput
                placeholder="Password"
                onChangeText={(val: any) => setPassword(val)}
                value={password}
                style={styles.userName}
                placeholderTextColor={"#484848"}
              />

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate(SCREENS.FORGOT_SUCCESS)}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};
export default NewPassword;
