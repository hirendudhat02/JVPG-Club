// import React, { useState } from "react";
// import Background from "../../Component/Background";
// import {
//   Image,
//   Keyboard,
//   KeyboardAvoidingView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";
// import ScreenHeader from "../../Component/ScreenHeader";
// import styles from "./styles";
// import OTPInputView from "@twotalltotems/react-native-otp-input";
// import LinearGradient from "react-native-linear-gradient";
// import { IMAGES } from "../../Utils/Images";
// import { SCREENS } from "../../Utils/ScreenContant";

// const OtpScreen = ({ navigation }: { navigation: any }) => {
//   const [otp, setOtp] = useState<string>("");
//   return (
//     <View style={styles.mainContainer}>
//       <KeyboardAvoidingView style={styles.mainContainer}>
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <ScrollView
//             nestedScrollEnabled
//             keyboardShouldPersistTaps="handled"
//             style={{ flexGrow: 1 }}
//           >
//             <View style={styles.InputContainer}>
//               <Text style={styles.headText}>Insert OTP</Text>
//               <View style={{ flex: 1 }}>
//                 <OTPInputView
//                   style={styles.InputSubContainer}
//                   pinCount={6}
//                   code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
//                   onCodeChanged={(code) => {
//                     setOtp(code);
//                   }}
//                   autoFocusOnLoad={false}
//                   codeInputFieldStyle={styles.underlineStyleBase}
//                   codeInputHighlightStyle={styles.underlineStyleHighLighted}
//                   onCodeFilled={(code) => {}}
//                 />
//               </View>
//             </View>
//             <View style={styles.footerContainer}>
//               <TouchableOpacity
//                 style={styles.buttonStyle}
//                 onPress={() => navigation.navigate(SCREENS.NEW_PASSWOED)}
//               >
//                 <Text style={styles.buttonText}>Submit</Text>
//               </TouchableOpacity>

//               <View style={styles.buttonView}>
//                 <TouchableOpacity
//                   style={styles.goBackButton}
//                   onPress={() => {
//                     navigation.goBack();
//                   }}
//                 >
//                   <Image
//                     source={IMAGES.BACK_ICON}
//                     style={styles.backImage}
//                     resizeMode="contain"
//                   />
//                   <Text style={styles.backText}>Edit Member ID</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.sendAgainButton}>
//                   <Text style={styles.sendAgainText}>Send Again</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </ScrollView>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };
// export default OtpScreen;

import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import { SCREENS } from "../../Utils/ScreenContant";

const OtpScreen = ({ navigation }: { navigation: any }) => {
  const [otp, setOtp] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <Background>
      <View style={{ marginTop: scale(10) }}>
        <Header text={"OTP"} onPress={() => navigation.goBack()} />
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.subContainer}>
                <Text style={styles.titleText}>Enter OTP</Text>
                <Text style={styles.subTitleText}>
                  Enter 6 Digit code has been sent to your mobile number +91
                  xxxxxx-5263
                </Text>
                <View style={{ flex: 1 }}>
                  <OTPInputView
                    style={styles.InputSubContainer}
                    pinCount={6}
                    code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    onCodeChanged={(code: any) => {
                      setOtp(code);
                    }}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code: any) => {}}
                  />
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate(SCREENS.NEW_PASSWOED)}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginTop: scale(25) }}
                  onPress={() => resendOTP()}
                  disabled={seconds > 0 || minutes > 0 ? true : false}
                >
                  {seconds > 0 || minutes > 0 ? (
                    <Text
                      style={{
                        fontSize: scale(12),
                        color: COLORS.WHITE,
                        fontFamily: FONTS.POPPINS_MEDIUM,
                      }}
                    >
                      Resend OTP in {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontSize: scale(12),
                        color: COLORS.WHITE,
                        fontFamily: FONTS.POPPINS_MEDIUM,
                      }}
                    >
                      Resend OTP
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </Background>
  );
};
export default OtpScreen;
