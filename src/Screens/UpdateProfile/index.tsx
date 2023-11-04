import React, { useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Image,
  Modal,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { IMAGES } from "../../Utils/Images";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const UpdateProfile = ({ navigation }: { navigation: any }) => {
  const [address, setAddress] = useState<string>(
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  );
  const [email, setEmail] = useState<string>("pragnesh@bcreative.in");
  const [phone, setPhone] = useState<string>("+91 7575041519");
  const [addressOpen, setAddressOpen] = useState<boolean>(false);
  const [emailOpen, setEmailOpen] = useState<boolean>(false);
  const [phoneOpen, setPhoneOpen] = useState<boolean>(false);
  const [addressOtpOpen, setAddressOtpOpen] = useState<boolean>(false);
  const [emailOtpOpen, setEmailOtpOpen] = useState<boolean>(false);
  const [phoneOtpOpen, setPhoneOtpOpen] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Update Contacts"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <View style={[styles.whiteContainer, { marginTop: scale(30) }]}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 8 }}>
            <Text style={styles.addressText}>Address</Text>
            {addressOpen ? (
              <TextInput
                value={address}
                onChangeText={(val: any) => setAddress(val)}
                style={styles.input}
                multiline
              />
            ) : (
              <Text style={styles.addressValText}>{address}</Text>
            )}
          </View>
          {addressOpen ? (
            <View style={{ marginLeft: scale(20) }}>
              <TouchableOpacity onPress={() => setAddressOtpOpen(true)}>
                <Image source={IMAGES.WRITE} style={styles.editImg} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginTop: scale(10) }}
                onPress={() => setAddressOpen(false)}
              >
                <Image source={IMAGES.CLOSE} style={styles.editImg} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{ flex: 2, alignItems: "flex-end" }}
              onPress={() => setAddressOpen(true)}
            >
              <Image source={IMAGES.EDIT} style={styles.editImg} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={[styles.whiteContainer, { marginTop: scale(20) }]}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 8 }}>
            <Text style={styles.addressText}>Email</Text>
            {emailOpen ? (
              <TextInput
                value={email}
                onChangeText={(val: any) => setEmail(val)}
                style={styles.input}
              />
            ) : (
              <Text style={styles.addressValText}>{email}</Text>
            )}
          </View>
          {emailOpen ? (
            <View style={{ marginLeft: scale(20) }}>
              <TouchableOpacity onPress={() => setEmailOtpOpen(true)}>
                <Image source={IMAGES.WRITE} style={styles.editImg} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginTop: scale(10) }}
                onPress={() => setEmailOpen(false)}
              >
                <Image source={IMAGES.CLOSE} style={styles.editImg} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{ flex: 2, alignItems: "flex-end" }}
              onPress={() => setEmailOpen(true)}
            >
              <Image source={IMAGES.EDIT} style={styles.editImg} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={[styles.whiteContainer, { marginTop: scale(20) }]}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 8 }}>
            <Text style={styles.addressText}>Phone Number</Text>
            {phoneOpen ? (
              <TextInput
                value={phone}
                onChangeText={(val: any) => setPhone(val)}
                style={styles.input}
              />
            ) : (
              <Text style={styles.addressValText}>{phone}</Text>
            )}
          </View>
          {phoneOpen ? (
            <View style={{ marginLeft: scale(20) }}>
              <TouchableOpacity onPress={() => setPhoneOtpOpen(true)}>
                <Image source={IMAGES.WRITE} style={styles.editImg} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginTop: scale(10) }}
                onPress={() => setPhoneOpen(false)}
              >
                <Image source={IMAGES.CLOSE} style={styles.editImg} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{ flex: 2, alignItems: "flex-end" }}
              onPress={() => setPhoneOpen(true)}
            >
              <Image source={IMAGES.EDIT} style={styles.editImg} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={addressOtpOpen}
        onRequestClose={() => setAddressOtpOpen(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            <View style={styles.subModalContainer2}>
              <View style={{ flex: 8, alignItems: "center" }}>
                <Text style={styles.inviteMembers}>Get Otp</Text>
              </View>
              <TouchableOpacity onPress={() => setAddressOtpOpen(false)}>
                <Image source={IMAGES.CLOSE} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.otpText}>We sent an OTP to {phone}</Text>
            <View style={styles.otpInputContainer}>
              <OTPInputView
                style={styles.InputSubContainer}
                pinCount={6}
                onCodeChanged={(code) => {
                  setOtp(code);
                }}
                // autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {}}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setAddressOtpOpen(false);
                setAddressOpen(false);
              }}
              style={[styles.submitButton, { marginTop: scale(50) }]}
            >
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={emailOtpOpen}
        onRequestClose={() => setEmailOtpOpen(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            <View style={styles.subModalContainer2}>
              <View style={{ flex: 8, alignItems: "center" }}>
                <Text style={styles.inviteMembers}>Get Otp</Text>
              </View>
              <TouchableOpacity onPress={() => setEmailOtpOpen(false)}>
                <Image source={IMAGES.CLOSE} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.otpText}>We sent an OTP to {email}</Text>
            <View style={styles.otpInputContainer}>
              <OTPInputView
                style={styles.InputSubContainer}
                pinCount={6}
                onCodeChanged={(code) => {
                  setOtp(code);
                }}
                // autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {}}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setEmailOtpOpen(false);
                setEmailOpen(false);
              }}
              style={[styles.submitButton, { marginTop: scale(50) }]}
            >
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={phoneOtpOpen}
        onRequestClose={() => setPhoneOtpOpen(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            <View style={styles.subModalContainer2}>
              <View style={{ flex: 8, alignItems: "center" }}>
                <Text style={styles.inviteMembers}>Get Otp</Text>
              </View>
              <TouchableOpacity onPress={() => setPhoneOtpOpen(false)}>
                <Image source={IMAGES.CLOSE} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.otpText}>We sent an OTP to {phone}</Text>
            <View style={styles.otpInputContainer}>
              <OTPInputView
                style={styles.InputSubContainer}
                pinCount={6}
                onCodeChanged={(code) => {
                  setOtp(code);
                }}
                // autoFocusOnLoad={false}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {}}
              />
            </View>

            <TouchableOpacity
              style={[styles.submitButton, { marginTop: scale(50) }]}
              onPress={() => {
                setPhoneOtpOpen(false);
                setPhoneOpen(false);
              }}
            >
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
};
export default UpdateProfile;
