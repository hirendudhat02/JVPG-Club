import React, { useState } from "react";
import styles from "./styles";
import ScreenHeader from "../../Component/ScreenHeader";
import { IMAGES } from "../../Utils/Images";
import { COLORS } from "../../Utils/Colors";
import Input from "../../Component/TextInput";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SCREENS } from "../../Utils/ScreenContant";
import Background from "../../Component/Background";
import { scale } from "../../Utils/Helper/Scalling";
import Header from "../../Component/Header";

const ForgotPassword = ({ navigation }: { navigation: any }) => {
  const [memberId, setMemberId] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
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
  return (
    // <View style={styles.mainContainer}>
    //   <KeyboardAvoidingView style={styles.mainContainer}>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //       <ScrollView
    //         nestedScrollEnabled
    //         keyboardShouldPersistTaps="handled"
    //         style={{ flexGrow: 1 }}
    //       >
    //         <ScreenHeader headText="Forgot Password?" />
    //         <View style={styles.InputContainer}>
    //           {/* ================= MemberId Input =================== */}

    //           <Input
    //             placeholder="K00999 or K0099901"
    //             value={memberId}
    //             onChangeText={(value: any) => setMemberId(value.trim())}
    //             headText={"Member ID"}
    //             headTextStyle={[
    //               styles.headingText,
    //               {
    //                 color: memberId.length === 0 ? COLORS.BLACK : COLORS.RED,
    //               },
    //             ]}
    //             hideImage={IMAGES.USER}
    //             disabled={true}
    //             inputContainer={styles.emailinputContainer}
    //             onFocus={onFocus}
    //             focusHandler={focusHandler}
    //             blurHandler={blurHandler}
    //             onSubmitEditing={Keyboard.dismiss}
    //           />
    //           {/* ================= Submit Button =================== */}

    //           <TouchableOpacity
    //             onPress={() => navigation.navigate(SCREENS.OTP_SCREEN)}
    //             style={[styles.buttonStyle]}
    //           >
    //             <Text style={styles.saveText}>Get Otp</Text>
    //           </TouchableOpacity>
    //           {/* ================= Back to Profile Button =================== */}

    //           <View style={styles.backToLoginContainer}>
    //             <TouchableOpacity
    //               style={styles.backButton}
    //               onPress={() => navigation.goBack()}
    //             >
    //               <Image
    //                 source={IMAGES.BACK_ICON}
    //                 style={styles.backIcon}
    //                 resizeMode="contain"
    //               />
    //               <Text style={styles.backText}>Back to Login</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </ScrollView>
    //     </TouchableWithoutFeedback>
    //   </KeyboardAvoidingView>
    // </View>
    <Background>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
            style={{ flexGrow: 1 }}
          >
            <View style={{ marginTop: scale(10) }}>
              <Header text={"Forgot Password"} onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.titleText}>Forgot Password?</Text>
              <Text style={styles.subTitleText}>Insert Username to reset password.</Text>
              <View style={styles.InputContainer}>
                {/* ================= MemberId Input =================== */}
                <TextInput
                  placeholder="Username"
                  onChangeText={(val: any) => setMemberId(val)}
                  value={memberId}
                  style={styles.userName}
                  placeholderTextColor={"#484848"}
                />

                {/* ================= Submit Button =================== */}

                <TouchableOpacity
                  onPress={() => navigation.navigate(SCREENS.OTP_SCREEN)}
                  style={[styles.buttonStyle]}
                >
                  <Text style={styles.saveText}>Get Otp</Text>
                </TouchableOpacity>
                {/* ================= Back to Profile Button =================== */}
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};
export default ForgotPassword;
