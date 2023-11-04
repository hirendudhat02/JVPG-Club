import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Modal,
  FlatList,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";

//styles
import styles from "./styles";

//Constants
import { COLORS } from "../../Utils/Colors";
import { KEY } from "../../Utils/AsyncKey";
import { scale } from "../../Utils/Helper/Scalling";

//Component
import AlertModal from "../../Component/Alert";

//Libraries

import { IMAGES } from "../../Utils/Images";
import { FONTS } from "../../Utils/Fonts";
import { SCREENS } from "../../Utils/ScreenContant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import Button from "../../Component/Button";
// import { FlatList } from "react-native";

const RegisterGuest = ({ navigation }: { navigation: any }) => {
  //States
  const [guest, setGuest] = useState(null);
  const [guestIndex, setGuestIndex] = useState(null);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);

  //Guest Count
  const Guest_Count = [
    { label: "1 Guest", value: 1 },
    { label: "6 Guests", value: 6 },
    { label: "2 Guests", value: 2 },
    { label: "7 Guests", value: 7 },
    { label: "3 Guests", value: 3 },
    { label: "8 Guests", value: 8 },
    { label: "4 Guests", value: 4 },
    { label: "9 Guests", value: 9 },
    { label: "5 Guests", value: 5 },
    { label: "10 Guests", value: 10 },
  ];

  // useEffect(() => {
  //     if (registerGuestRes.data !== null) {
  //         console.log("registerGuestRes.data ::", registerGuestRes.data);
  //         if (registerGuestRes.data.response_code === 200) {
  //             console.log("generate Guest qr");
  //             setErrorModal(true);
  //             setErrorMessage(registerGuestRes.data.message);
  //         } else if (registerGuestRes.data.response_code === 401) {
  //             setErrorModal(true);
  //             setErrorMessage(registerGuestRes.data.data);

  //             setTimeout(() => {
  //                 dispatch(RegisterGuestResponse(null));
  //             }, 3000);
  //         } else {
  //             setErrorModal(true);
  //             setErrorMessage(registerGuestRes.data.data);

  //             setTimeout(() => {
  //                 dispatch(RegisterGuestResponse(null));
  //             }, 3000);
  //         }
  //     }
  // }, [registerGuestRes.data]);
  //Guest Submit
  const handleSubmit = () => {
    setConfirmModal(false);
    navigation.navigate(SCREENS.VIEW_GUEST_QR, { value: guest });
    AsyncStorage.setItem(KEY.GUEST, JSON.stringify(guest));

    // AsyncStorage.getItem(KEY.LOGIN_DATA).then((value: any) => {
    //     //AsyncStorage returns a promise so adding a callback to get the value
    //     var resData = JSON.parse(value);

    //     if (resData === null || undefined) {
    //     } else {
    //         AsyncStorage.getItem(KEY.TOKEN).then((value) => {
    //             dispatch(LoaderAction(true));

    //             dispatch(
    //                 RegisterGuestRequest(
    //                     resData[0].assomembers,
    //                     guest,
    //                     navigation,
    //                     value
    //                 )
    //             );
    //         });
    //     }
    // });
  };
  //Loader Selectoe

  //Radio OnPress
  const onPress = (item: any, index: any) => {
    setGuestIndex(index);
    setGuest(item.value);
  };
  //Guest RendetIetm
  const radioRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      onPress={() => onPress(item, index)}
      style={{ marginTop: scale(20) }}
    >
      <View style={styles.choicesView}>
        <TouchableOpacity
          style={[
            styles.radioView,
            guestIndex === index
              ? {
                  borderColor: COLORS.WHITE,
                }
              : {
                  borderColor: COLORS.WHITE,
                },
          ]}
          onPress={() => onPress(item, index)}
        >
          <View
            style={[
              styles.radioinnerView,
              guestIndex === index
                ? {
                    backgroundColor: COLORS.RED,
                  }
                : {
                    backgroundColor: COLORS.SKIN_COLOR,
                  },
            ]}
          ></View>
        </TouchableOpacity>
        <View style={styles.labelContaienr}>
          <Text style={styles.radioLabel}>{item.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Background>
      <AlertModal
        openModal={errorModal}
        closeModal={() => {
          setErrorModal(false);
        }}
        message={errorMessage}
      />
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={confirmModal}
        onRequestClose={() => setConfirmModal(false)}
      >
        <View style={styles.modalContainer}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.BACKGROUND_COLOR}
          barStyle="light-content"
        />
          <View style={styles.modalSuccessSubContainer}>
            <Text style={styles.thankyouMessage}>
              Are you sure you want to generate {"(" + guest + ")"} guest entry
              qr code? This shall attract guest entry charges.
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.modalDeatilButton}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.YesButton}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalDeatilRightButton}
                onPress={() => setConfirmModal(false)}
              >
                <Text style={styles.YesButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Header
        onPress={() => navigation.goBack()}
        text={"Register Guest Entry"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <Text style={styles.selectMemberText}>Select Members</Text>
      <View style={styles.subContainer}>
        <FlatList
          data={Guest_Count}
          renderItem={radioRenderItem}
          numColumns={2}
          overScrollMode={"never"}
          scrollEnabled={false}
          ListHeaderComponent={
            <View style={styles.nullcontainer}>
              <Text style={styles.nullDispayText}>
                Please select a number of guest member
              </Text>
            </View>
          }
          contentContainerStyle={{
            // marginHorizontal: scale(5),
            marginVertical: scale(20),
            marginHorizontal:scale(22),
            paddingBottom:scale(10)
          }}
        />
      </View>
      <Button
        onPress={() => {
          if (guest === null || undefined) {
            setErrorModal(true);
            setErrorMessage("Please Select Numbers of Guests");
          } else {
            setConfirmModal(true);
          }
        }}
        text="Generate Guest QR Code"
        style={{marginTop:scale(35)}}
      />
    </Background>
  );
};
export default RegisterGuest;
