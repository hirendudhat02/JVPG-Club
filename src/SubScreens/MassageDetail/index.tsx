import React, { useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import styles from "./styles";
import { IMAGES } from "../../Utils/Images";
import QRCode from "react-native-qrcode-svg";
import RNFS from "react-native-fs";
import Share from "react-native-share";
import ViewShot from "react-native-view-shot";
import { SCREENS } from "../../Utils/ScreenContant";

const MassageDetail = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const viewShot = React.useRef<any>();
  const [shareOpen, setShareOpen] = useState<boolean>(false);
  const [cancelOpen, setCancelOpen] = useState<boolean>(false);

  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri: any) => {
      RNFS.readFile(uri, "base64").then((res: any) => {
        let urlString = "data:image/jpeg;base64," + res;

        let options = {
          title: "Share Title",
          url: urlString,
          type: "image/jpeg",
        };

        Share.open(options)
          .then((res) => {
            setShareOpen(false);
          })
          .catch((err) => {
            setShareOpen(false);
          });
      });
    }),
      (error: any) => console.error("Oops, snapshot failed", error);
  };

  return (
    <Background>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Massage Booking Confirmed!!"}
          menuOnPress={() => navigation.openDrawer()}
        />
        <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
          <View style={styles.whiteContainer}>
            <View
              style={[
                styles.dot1,
                {
                  backgroundColor:
                    route?.params?.squash !== "class" ? "#f5a769" : "#f5a769",
                },
              ]}
            />
            <View style={styles.imageContainer}>
              <View style={{ flex: scale(3) }}>
                <Image source={{uri:route.params?.imageUrl}} style={styles.image} />
              </View>
              <View style={styles.yogaClassContainer}>
                <Text style={styles.classText}>Massage</Text>
                <Text style={styles.classId}>{route.params?.memberCode}</Text>
              </View>
            </View>
            <View style={styles.dashedView} />
            <View style={styles.qrContainer}>
              <View style={{ flex: scale(3) }}>
                <QRCode size={scale(80)} />
              </View>
              <View style={styles.yogaClassContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={IMAGES.EVENT} style={styles.icon} />
                  <Text style={styles.timeText}>29 May 2023</Text>
                </View>
                <View style={styles.timeContainer}>
                  <Image source={IMAGES.TIME} style={styles.icon} />
                  <Text style={styles.timeText}>7:00 am</Text>
                </View>
              </View>
            </View>
            <View style={styles.dashedView} />
            <View style={styles.dot2} />
          </View>
        </ViewShot>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setCancelOpen(true)}
          >
            <Text style={styles.saveText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => {
              captureAndShareScreenshot();
              setShareOpen(true);
            }}
          >
            <Text style={styles.saveText}>Share</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={cancelOpen}
          onRequestClose={() => setCancelOpen(false)}
        >
          <View style={styles.modalContainer}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.BACKGROUND_COLOR}
              barStyle="light-content"
            />
            <View style={styles.subModalContainer}>
              <Text style={styles.bookCancelText}>Booking Cancelled!</Text>
              <View style={styles.cancelBookingModalContainer}>
                <TouchableOpacity
                  style={styles.homeButton}
                  onPress={() => {
                    setCancelOpen(false);
                    navigation.navigate(SCREENS.HOME);
                  }}
                >
                  <Text style={styles.saveText}>Back to Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewBookButton}
                  onPress={() => {
                    setCancelOpen(false);
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.saveText}>Back to Booking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Background>
  );
};
export default MassageDetail;
