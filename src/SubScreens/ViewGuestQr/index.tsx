import React, { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import styles from "./styles";
import QRCode from "react-native-qrcode-svg";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import RNFS from "react-native-fs";
import ViewShot from "react-native-view-shot";
import LinearGradient from "react-native-linear-gradient";
import Geolocation from "@react-native-community/geolocation";
import { getDistance } from "geolib";
import Share from "react-native-share";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import Background from "../../Component/Background";
import { IMAGES } from "../../Utils/Images";
import Header from "../../Component/Header";

const guestName = [
  "Guest 01",
  "Guest 02",
  "Guest 03",
  "Guest 04",
  "Guest 05",
  "Guest 06",
  "Guest 07",
  "Guest 08",
  "Guest 09",
  "Guest 10",
];

const data = [
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
  {
    assomembers: "12345565645657456757",
  },
];

const ViewQr = ({ navigation }: { navigation: any }) => {
  //States
  const [value, setValue] = useState(null);
  const [id, setId] = useState("");
  const [distance, setDistance] = React.useState("");
  const [guest, setGuest] = useState<any[]>(data);
  const [gueindex, setGueIndex] = useState<number>(0);
  const [guestN, setGuestName] = useState(guestName);
  const [gname, setGName] = useState(null);
  const [capture, setCapture] = useState(false);
  const [skeleton, setSkeleton] = useState(true);

  //Current Hour
  useEffect(() => {
    if (currentHour == 24) {
      AsyncStorage.removeItem(KEY.GUEST);
    } else {
      AsyncStorage.getItem(KEY.GUEST).then((value: any) => {
        var resData = value;
        setValue(resData);
      });
    }
  }, []);

  //Selectors
  // const ViewGuestRes = useSelector((state: any) => state.registerGuest);

  // //View Guest Selectors
  // useEffect(() => {
  //     if (ViewGuestRes.data.data !== null) {
  //         console.log("ViewGuestRes.data ::", ViewGuestRes.data);
  //         setGuest(ViewGuestRes.data.data);
  //         setTimeout(() => {
  //             setSkeleton(false);
  //         }, 3000);
  //     } else {
  //         setTimeout(() => {
  //             setSkeleton(false);
  //         }, 3000);
  //     }
  // }, [ViewGuestRes.data]);

  // Rendom Numbers
  useEffect(() => {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    setId(text);
  }, []);

  // Date
  var myDate = new Date();
  var currentHour = myDate.getHours();

  // Guest Press
  const guestPress = (item: any, index: any) => {
    setGueIndex(index);
    if (gname == null) {
      let name;
      guestName.map((gitem, gindex) => {
        if (gindex == index) {
          name = gitem;
        }
      });
      setGName(name);
    } else {
      setGName(item);
    }
  };

  const viewShot = React.useRef<any>();

  //Take a ScreenShot
  const captureAndShareScreenshot = () => {
    setCapture(true);
    setTimeout(() => {
      viewShot.current.capture().then((uri: any) => {
        RNFS.readFile(uri, "base64").then((res: any) => {
          let urlString = "data:image/jpeg;base64," + res;
          let description =
            "Dear friend, Here is your one-time access QR code for JVPG Club. You will be required to show this at the club entrance. It's valid for 5 minutes. Welcome to JVPG Club.";
          let options = {
            title: "Share Title",
            url: urlString,
            type: "image/jpeg",
          };

          Share.open(options)
            .then((res) => {
              setCapture(false);
            })
            .catch((err) => {
              setCapture(false);
            });
        });
      }),
        (error: any) => console.error("Oops, snapshot failed", error);
    }, 1000);
  };

  React.useEffect(() => {
    let dis;

    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);
        // setCurreLongitute(currentLongitude);
        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        // setCurrentLatitude(currentLatitude);
        dis = getDistance(
          { latitude: currentLatitude, longitude: currentLongitude },

          { latitude: 19.06065, longitude: 72.82183 }
        );

        setDistance(dis);
      },
      (error) => Alert.alert(error.message)
    );
  }, [Geolocation]);

  const qrrenderItem = ({ item, index }: { item: any; index: any }) => (
    <View
      style={[
        styles.QrMainContainer,
        {
          marginTop: scale(35),
        },
      ]}
    >
      {capture === true ? (
        <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
          <QRCode
            value={item.assomembers}
            size={scale(145)}
            color={COLORS.BLACK}
            logoBackgroundColor={COLORS.WHITE}
          />
        </ViewShot>
      ) : (
        <>
          <View style={styles.qrWhiteContainer}>
            <QRCode
              value={item.assomembers}
              size={scale(135)}
              color={COLORS.BLACK}
              backgroundColor={COLORS.WHITE}
              logoBackgroundColor={COLORS.WHITE}
            />
          </View>

          <Text style={styles.guestText}>
            Guest {("0" + (index + 1)).slice(-2)}
          </Text>
          <TouchableOpacity
            onPress={() => captureAndShareScreenshot()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextstyle}>Share</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Guest QR code"}
        menuOnPress={() => navigation.openDrawer()}
      />

      <FlatList
        data={
          value == 1
            ? guest?.slice(0, 1)
            : value == 2
            ? guest?.slice(0, 2)
            : value == 3
            ? guest?.slice(0, 3)
            : value == 4
            ? guest?.slice(0, 4)
            : value == 5
            ? guest?.slice(0, 5)
            : value == 6
            ? guest?.slice(0, 6)
            : value == 7
            ? guest?.slice(0, 7)
            : value == 8
            ? guest?.slice(0, 8)
            : value == 9
            ? guest?.slice(0, 9)
            : value == 10
            ? guest?.slice(0, 10)
            : null
        }
        renderItem={qrrenderItem}
        overScrollMode={"never"}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: scale(3),
          paddingBottom: scale(40),
          marginTop: scale(20),
        }}
        ListHeaderComponent={
          <>
            <Text style={styles.qrCount}>{value} Guests</Text>
            <Text style={styles.qrDesc}>
              Find below guest club entry QR code. You can share qr code with
              your guest.
            </Text>
          </>
        }
      />
    </Background>
  );
};
export default ViewQr;
