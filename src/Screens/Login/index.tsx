// import React, { useState } from "react";
// import {
//   Image,
//   Keyboard,
//   KeyboardAvoidingView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
//   ActivityIndicator,
// } from "react-native";
// import { COLORS } from "../../Utils/Colors";
// import Background from "../../Component/Background";
// import { IMAGES } from "../../Utils/Images";
// import { scale } from "../../Utils/Helper/Scalling";
// import styles from "./styles";
// import { Platform } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Input from "../../Component/TextInput";
// import ScreenHeader from "../../Component/ScreenHeader";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { KEY } from "../../Utils/AsyncKey";
// import { SCREENS } from "../../Utils/ScreenContant";

// const Login = ({ navigation }: { navigation: any }) => {
//   const [memberId, setMemberId] = useState("");
//   const [password, setPassword] = useState("");
//   const [hide, setHide] = useState(true);
//   const [onFocus, setOnFocus] = useState(false);
//   const [onBlur, setOnBlur] = useState(false);
//   const [onPassFocus, setPassOnFocus] = useState(false);
//   const [onPassBlur, setPassOnBlur] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const focusHandler = () => {
//     setOnFocus(true);
//     setOnBlur(false);

//     // Do something with event
//   };
//   // Handling input onBlur event
//   const blurHandler = () => {
//     setOnFocus(false);
//     setOnBlur(true);
//   };
//   const PassfocusHandler = () => {
//     setPassOnFocus(true);
//     setPassOnBlur(false);

//     // Do something with event
//   };
//   // Handling input onBlur event
//   const PassblurHandler = () => {
//     setPassOnFocus(false);
//     setPassOnBlur(true);
//   };
//   //Hide Text
//   const hideText = () => {
//     //hide show text button
//     setHide((hide) => !hide);
//   };
//   const MemberFunc = (value: any) => {
//     setMemberId(value);
//     // if (value?.length === 8) {
//     //   AsyncStorage.getItem(KEY.TOKEN).then((val) => {
//     //     dispatch(validateMemberRequest(value, val, navigation));
//     //   });
//     // } else {
//     // }
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <KeyboardAvoidingView style={styles.mainContainer}>
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <ScrollView
//             nestedScrollEnabled
//             keyboardShouldPersistTaps="handled"
//             style={{ flexGrow: 1 }}
//           >
//             <ScreenHeader headText="Welcome Back" />

//             <View style={styles.InputContainer}>
//               {/* ================ MemberId Input ============== */}
//               <Input
//                 placeholder="K00999 or K0099901"
//                 value={memberId}
//                 onChangeText={(value: any) => MemberFunc(value.trim())}
//                 headText={"Member ID"}
//                 hideImage={require("../../../Assets/Icons/user.png")}
//                 headTextStyle={styles.headingText}
//                 disabled={true}
//                 inputContainer={styles.emailinputContainer}
//                 onFocus={onFocus}
//                 focusHandler={focusHandler}
//                 blurHandler={blurHandler}
//                 onSubmitEditing={Keyboard.dismiss}
//               />
//               {/* ================ Password Input ============== */}
//               <Input
//                 placeholder="***********"
//                 value={password}
//                 onChangeText={(value) => setPassword(value.trim())}
//                 secureTextEntry={hide}
//                 headText={"Password"}
//                 headTextStyle={styles.passheadingText}
//                 hideText={hideText}
//                 hideImage={hide === true ? IMAGES.HIDE_EYE : IMAGES.SHOW_EYE}
//                 disabled={false}
//                 inputContainer={styles.passinputContainer}
//                 onFocus={onPassFocus}
//                 focusHandler={PassfocusHandler}
//                 blurHandler={PassblurHandler}
//                 onSubmitEditing={Keyboard.dismiss}
//               />
//               {/* ================ Forgot Password Button ============== */}

//               <View
//                 style={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}
//                   style={styles.firstTimeuserStyle}
//                 >
//                   <Text style={styles.ForgotPasswordText}>
//                     Forgot Password?
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             {/* ================ Login Button ============== */}

//             <View style={styles.lastButtonContainer}>
//               <TouchableOpacity
//                 style={styles.buttonStyle}
//                 onPress={() => {
//                   let data = {
//                     email: memberId,
//                     password: password,
//                   };
//                   AsyncStorage.setItem(KEY.LOGIN_DATA, JSON.stringify(data));
//                   navigation.replace(SCREENS.STACK_NAVIGATOR);
//                 }}
//                 //   onPress={() => onHandleChange()}
//               >
//                 {loading ? (
//                   <ActivityIndicator size="large" color={COLORS.WHITE} />
//                 ) : (
//                   <Text
//                     style={styles.submitText}
//                     numberOfLines={2}
//                     adjustsFontSizeToFit
//                   >
//                     Submit
//                   </Text>
//                 )}
//               </TouchableOpacity>

//               {/* ================ Register ============== */}

//               <View style={styles.lastTextContainer}>
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate(SCREENS.REGISTER)}
//                 >
//                   <Text style={styles.firstTimeuserText}>
//                     Register{Platform.OS === "ios" ? "  " : "  "}
//                   </Text>
//                 </TouchableOpacity>
//                 <Text style={styles.firstTimeHeading}>
//                   if you’re a new member
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </View>
//   );
// };
// export default Login;

import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";
import { KEY } from "../../Utils/AsyncKey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";
import { AlertRequest, AlertResponse } from "../../Redux/Actions/AlertAction";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../../Component/Alert";
import { LoginRequest, LoginResponse } from "../../Redux/Actions/LoginAction";
import { LoaderAction } from "../../Redux/Actions/LoaderAction";
import { COLORS } from "../../Utils/Colors";
import { IMAGES } from "../../Utils/Images";
const Login = ({ navigation }: { navigation: any }) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [hide, setHide] = useState<boolean>(true);
  const AlertRes = useSelector((state: any) => state.Alert);
  const [loading, setLoading] = useState(false);

  console.log("AlertRes :;", AlertRes);
  console.log("AlertRes :;", AlertRes?.data?.modal);
  console.log("AlertRes :;", AlertRes?.data?.des);

  useEffect(() => {
    if (AlertRes.data !== null) {
      setModal(AlertRes.data.modal);
      setMessage(AlertRes.data.des);
      setLoading(false);
    } else {
      setModal(false);
      setMessage("");
      setLoading(false);
    }
  }, [AlertRes.data]);

  const dispatch = useDispatch();
  const hideText = () => {
    console.log("i am clicked..........................................");
    Keyboard.dismiss();
    setHide((hide) => !hide);
  };
  const handleSubmit = () => {
    console.log("Testing91...............................");
    // let deviceId = DeviceInfo?.getDeviceId();

    //   let model = DeviceInfo?.getModel();

    //   let getSystemName = DeviceInfo?.getSystemName();

    //   const version = DeviceInfo?.getVersion();

    //   const getToken = DeviceInfo.getDeviceToken()
    //   console.log("deviceToken ::",getToken)
    if (userName.length === 0 && password.length === 0) {
      const payload = {
        modal: true,
        des: "Please Enter Member Id and Password",
      };
      dispatch(AlertRequest());
      dispatch(AlertResponse(payload));
    } else if (userName.length === 0) {
      const payload = {
        modal: true,
        des: "Please Enter Member Id",
      };
      dispatch(AlertRequest());
      dispatch(AlertResponse(payload));
    } else if (password.length === 0) {
      const payload = {
        modal: true,
        des: "Please Enter Password",
      };
      dispatch(AlertRequest());
      dispatch(AlertResponse(payload));
    } else {
      setLoading(true);
      const data = new FormData();
      data.append("member_id", userName);
      data.append("password", password);
      data.append("device_token", "k6893v1_64");
      dispatch(LoginRequest(data, navigation));
    }
  };

  return (
    <Background>
      <AlertModal
        openModal={modal}
        message={message}
        closeModal={() => {
          dispatch(AlertResponse(null));
          dispatch(LoginResponse(null));
        }}
      />
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image source={IMAGES.APP_LOGO} style={styles.image} />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.titleText}>Welcome Back</Text>
              <Text style={styles.subTitleText}>Sign in to your account</Text>
              <View style={styles.userNameContainer}>
                <Text style={styles.labelText}>Member Id</Text>
                <TextInput
                  placeholder="A00999 or A0099901"
                  onChangeText={(val: any) => setUserName(val)}
                  value={userName}
                  style={styles.input}
                  placeholderTextColor={"#AFAFAF"}
                />
              </View>
              <View style={styles.passwordContainer}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  placeholder="*********"
                  onChangeText={(val: any) => setPassword(val)}
                  value={password}
                  style={styles.input}
                  placeholderTextColor={"#AFAFAF"}
                  secureTextEntry={hide}
                  onSubmitEditing={Keyboard.dismiss}
                />
                  <TouchableOpacity style={styles.eyeContainer} onPress={hideText}>
                    <Image
                      source={hide === true ? IMAGES.HIDE_EYE : IMAGES.SHOW_EYE}
                      style={[styles.hideShowImage]}
                    />
                  </TouchableOpacity>
              </View>

              <View style={styles.rememberContainer}>
                {/* <View style={styles.rememberSubContainer}>
                  <View style={styles.whiteBox} />
                  <Text style={styles.remeberText}>Remember me</Text>
                </View> */}
                <TouchableOpacity
                  onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}
                >
                  <Text style={styles.forgetText}>Forget Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.buttonContainer}
                disabled={loading}
                onPress={() => {
                  handleSubmit();
                  // let data = {
                  //   email: userName,
                  //   password: password,
                  // };
                  // AsyncStorage.setItem(KEY.LOGIN_DATA, JSON.stringify(data));
                  // navigation.replace(SCREENS.STACK_NAVIGATOR);
                }}
              >
                {loading ? (
                  <ActivityIndicator size="large" color={COLORS.WHITE} />
                ) : (
                  <Text style={styles.buttonText}>Sign In</Text>
                )}
              </TouchableOpacity>
              <View style={styles.registerContainer}>
                <Text style={styles.dontText}>New to mobile app? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(SCREENS.REGISTER)}
                >
                  <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};
export default Login;
