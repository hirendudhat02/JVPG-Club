import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";
import { IMAGES } from "../../Utils/Images";
import QRCodeScanner from "../../Component/QRCodeComp";
import Geolocation from "react-native-geolocation-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDistance } from "geolib";
import { SCREENS } from "../../Utils/ScreenContant";
import LinearGradient from "react-native-linear-gradient";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import { Alert } from "react-native";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import Button from "../../Component/Button";

const Data = {
  accounttype: "Dr",
  clubaccountbalance: "-24866",
  unbilledbalance: "3060.5",
  cashcradbalance: "0",
  Mbr_Code: "K0038400",
  Mbr_Title: "MR.",
  Mbr_FirstName: "AYAZ",
  Mbr_MidName: "B",
  Mbr_LastName: "KAZI",
  Mbr_Name: "KAZI AYAZ B",
  Mbr_Address:
    "1001,10th FLR,NENSEY SOCIETY,\r\n3rd ROAD,OPP.ALMEIDA PARK, BANDRA(W),MUMBAl",
  Mbr_Pin: "400050",
  Mbr_Mobile: "7575041519",
  Mbr_Email: "pragnesh.s@bcreative.in",
  Mbr_Password: "otters",
  Mbr_OTP: "528532",
  Mbr_Photo: "https://ottersclub.com/images/K0038400.jpg",
};
const QrCode = ({ navigation }: { navigation: any }) => {
  const [distance, setDistance] = useState<any>(null);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const data = "K0038400";
  const currdate = ("0" + new Date().getDate()).slice(-2); //To get the Current Date
  const month = ("0" + (new Date().getMonth() + 1)).slice(-2); //To get the Current Month
  const year = new Date().getFullYear().toString().slice(-2); //To get the Current Year
  const hours = ("0" + new Date().getHours()).slice(-2); //To get the Current Hours
  const min = ("0" + new Date().getMinutes()).slice(-2); //To get the Current Minutes
  const [time, setTime] = useState(
    data.slice(6, 7) +
      data.slice(1, 2) +
      hours +
      data.slice(7, 8) +
      month +
      data.slice(5, 6) +
      min +
      data.slice(3, 4) +
      currdate +
      data.slice(0, 1) +
      data.slice(2, 3) +
      data.slice(4, 5) +
      year
  );
  const isAndroid = Platform.OS === "android";

  //Location Permission
  const LocationPermission = async () => {
    if (isAndroid) {
      return RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      })
        .then(async (resp) => {
          if (resp === "enabled" || resp === "already-enabled") {
            if (isAndroid && Platform.Version < 23) {
              return true;
            }
            const hasPermission = await PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (hasPermission) return true;

            const status = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
            if (status === PermissionsAndroid.RESULTS.DENIED) {
            } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            }
            return false;
          }
        })
        .catch((err) => {
          if (err["code"] === "ERR00") {
            setErrorModal(true);
            setErrorMessage(
              "Please Enable your location for better expirience"
            );

            return false;
          } else if (err["code"] === "ERR01") {
            setErrorModal(true);
            setErrorMessage(
              "Please Enable your location manually from setting"
            );

            return false;
          } else if (err["code"] === "ERR02") {
            LocationPermission();
            return false;
          } else return false;
        });
    } else {
      const hasLocationPermission = await Geolocation.requestAuthorization(
        "always"
      );
      if (
        hasLocationPermission == "denied" ||
        hasLocationPermission == "disabled" ||
        hasLocationPermission == "restricted"
      ) {
        return false;
      }
      return true;
    }
  };
  let dis;
  //Get Distance
  const locationFun = async () => {
    const hasLocationPermission = await LocationPermission();
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
          //getting the Longitude from the location json
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Latitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);

          dis = getDistance(
            {
              latitude: currentLatitude,
              longitude: currentLongitude,
            },
            {
              latitude: currentLatitude,
              longitude: currentLongitude,
            }
            // {
            //   latitude: lat,
            //   longitude: long,
            // }
          );

          if (dis >= 500) {
            // setQrModal(true);
          } else {
          }
          setDistance(dis);
        },
        (error) => {
          Alert.alert(error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };
  useEffect(() => {
    locationFun();
  }, []);
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Get QR Code"}
        menuOnPress={() => navigation.openDrawer()}
      />
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={distance === null || distance >= 500 ? false : true}
        nestedScrollEnabled
        overScrollMode="never"
      > */}
      <View style={{ flex: 1 }}>
        <View style={styles.useImageView}>
          <Image
            source={IMAGES.USER}
            style={styles.ImageStyle}
            resizeMode="cover"
          />
          <Text style={styles.NameIdStyle}>{"Bhavik Shah"}</Text>
          <Text style={styles.dateStyle}>{"K0038400"}</Text>
          {distance === null || distance >= 500 ? null : (
            <Text style={styles.desStyle}>
              Find below your club entry QR code.
            </Text>
          )}

          {distance === null || distance >= 500 ? (
            <View style={styles.qrNotableView}>
              <Text style={styles.qrNotAbleText}>
                You have to be within the club premises to generate a QR Code.
                {/* Stay within the club premises to generate QR code. */}
              </Text>
            </View>
          ) : null}
          {distance !== null || distance <= 500 ? (
            <View
              style={
                distance === null || distance >= 500
                  ? styles.buttonCenterView
                  : styles.buttonView
              }
            >
              <View style={styles.registerButtonView}>
                {distance === null || distance >= 500 ? null : (
                  <>
                    <Button
                      onPress={() => {
                        navigation.navigate(SCREENS.REGISTER_GUEST);
                      }}
                      text="Generate Guest QR Code"
                      style={{marginTop:scale(5)}}
                    />
                  </>
                )}
              </View>

              {distance === null || distance >= 500 ? null : (
                <View
                  style={{
                    marginTop: scale(10),
                    backgroundColor: COLORS.WHITE,
                    height: scale(150),
                    width: scale(150),
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <QRCodeScanner
                    value={
                      distance === null || distance >= 500
                        ? "You are  not in 500 meter area"
                        : time
                    }
                  />
                </View>
              )}
            </View>
          ) : null}
        </View>
      </View>
      {/* </ScrollView> */}
    </Background>
  );
};
export default QrCode;
