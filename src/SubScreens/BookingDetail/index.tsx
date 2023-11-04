import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Image,
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiConstants from "../../Redux/Services/ApiConstants";
import { KEY } from "../../Utils/AsyncKey";
import AlertModal from "../../Component/Alert";
import moment from "moment";

const BookingDetail = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const viewShot = React.useRef<any>();
  const [data, setData] = useState({});
  const [shareOpen, setShareOpen] = useState<boolean>(false);
  const [cancelOpen, setCancelOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [totalMembers, setTotalMembers] = useState<number>(0);
  const [member, setMember] = useState({
    name: "",
    code: "",
  });
  useEffect(() => {
    console.log(
      "Testing Booking Detail........................",
      route?.params?.data
    );
    if (route?.params?.data) {
      const temp = route?.params?.data;
      let total =
        parseInt(temp?.adult) +
        parseInt(temp?.adult_guest) +
        parseInt(temp?.child) +
        parseInt(temp?.child_guest);
      if (!isNaN(total)) setTotalMembers(total);
      setData(route?.params?.data);
    }
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      setMember({
        name: temp?.member_name,
        code: temp?.member_id,
      });
    });
  }, [route?.params?.data]);

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
  const handleCancelBooking = () => {
    if (data?.event_booking_id && data?.event_id) {
      console.log(
        "i am handle Cancel Booking...................",
        data?.event_booking_id,
        data?.event_id
      );
    }
    // return;
    const payload = new FormData();
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      payload.append("member_id", temp.member_id);
      payload.append("auth_token", temp.auth_token);
      payload.append("event_booking_id", data?.event_booking_id);
      payload.append("event_id", data?.event_id);
      fetch(`${ApiConstants.BASE_URL}/eventCancelled`, {
        method: "POST",
        body: payload,
      })
        .then((response) => response.json())
        .then((res) => {
          if (res?.status == false) {
            setMessage(res?.message);
            setOpenModal(true);
            return;
          } else {
            setCancelOpen(true);
          }
          console.log("Event Booking Cancel Successfully..............");
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <Background>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Booking Detail"}
          menuOnPress={() => navigation.openDrawer()}
        />
        <AlertModal
          message={message}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
        <View style={{ alignItems: "center" }}>
          {route?.params?.squash === "class" ? (
            <View style={{ marginTop: scale(10), alignItems: "center" }}>
              <Text style={styles.enrollTitle}>
                Class Enrollment request received
              </Text>
              <Text style={styles.subHeadText}>
                Club admin will update you about class enrollment confirmation{" "}
              </Text>
            </View>
          ) : (
            <Text style={styles.submitText}>
              {route?.params?.data === "banquet"
                ? "Request Received"
                : "Event Booking Confirmed"}
            </Text>
          )}
        </View>
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
                <Image
                  source={{ uri: data?.event_image }}
                  style={styles.image}
                />
              </View>
              <View style={styles.yogaClassContainer}>
                <Text style={styles.classText}>
                  {data?.event_title ? data?.event_title : null}
                </Text>
                <Text style={styles.classId}>{data?.booking_number}</Text>
              </View>
            </View>
            <View style={styles.dashedView} />
            <View style={styles.qrContainer}>
              <View style={{ flex: scale(3) }}>
                <QRCode value={data?.booking_slug} size={scale(80)} />
              </View>
              <View style={styles.yogaClassContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={IMAGES.EVENT} style={styles.icon} />
                  <Text style={styles.timeText}>
                    {moment(data?.start_date).format("DD MMMM YYYY")}
                  </Text>
                </View>
                <View style={styles.timeContainer}>
                  <Image source={IMAGES.TIME} style={styles.icon} />
                  <Text style={styles.timeText}>{data?.start_time}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={IMAGES.LOCATION} style={styles.icon} />
                  <Text style={styles.timeText}>{data?.venue}</Text>
                </View>
              </View>
            </View>
            <View style={styles.dashedView} />
            {route?.params?.squash === "squash" ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: scale(40),
                    marginTop: scale(25),
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.BLACK,
                      fontFamily: FONTS.POPPINS_MEDIUM,
                    }}
                  >
                    Guest
                  </Text>
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.RED,
                      fontFamily: FONTS.POPPINS_REGULAR,
                    }}
                  >
                    01
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: scale(40),
                    marginVertical: scale(10),
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.BLACK,
                      fontFamily: FONTS.POPPINS_MEDIUM,
                    }}
                  >
                    Marker
                  </Text>
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.RED,
                      fontFamily: FONTS.POPPINS_REGULAR,
                    }}
                  >
                    01
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: scale(40),
                    marginBottom: scale(20),
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.BLACK,
                      fontFamily: FONTS.POPPINS_MEDIUM,
                    }}
                  >
                    Member
                  </Text>
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: COLORS.RED,
                      fontFamily: FONTS.POPPINS_REGULAR,
                    }}
                  >
                    01
                  </Text>
                </View>
              </>
            ) : route?.params?.squash === "class" ? (
              <>
                <Text style={styles.subHeaderText}>
                  {member?.name}{" "}
                  <Text style={{ color: COLORS.BLACK }}>
                    {`( ${member?.code} )`}
                  </Text>
                </Text>
                <Text style={styles.memberText}>Members - 02</Text>
                <View style={styles.enrollMentView}>
                  <Text style={styles.enrollKey}>Enrollment Status</Text>
                  <Text
                    style={[styles.amountValue, { marginRight: scale(10) }]}
                  >
                    Pending
                  </Text>
                </View>
                <View style={styles.totalContainer}>
                  <Text style={styles.enrollKey}>Enrollment Request</Text>
                  <Text
                    style={[styles.amountValue, { marginRight: scale(10) }]}
                  >
                    Next Month
                  </Text>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.subHeaderText}>
                  {member?.name}{" "}
                  <Text style={{ color: COLORS.BLACK }}>
                    {`( ${member?.code} )`}
                  </Text>
                </Text>
                <Text style={styles.memberText}>Members - {totalMembers}</Text>
                <View style={styles.enrollMentView}>
                  <Text style={styles.enrollKey}>Enrollment Status</Text>
                  <Text style={styles.enrollValue}>Active</Text>
                </View>
                <View style={styles.totalContainer}>
                  <Text style={styles.enrollKey}>Total Amount</Text>
                  <Text style={styles.amountValue}>
                    Rs. {data?.total || "0.00"}/-
                  </Text>
                </View>
              </>
            )}

            <View style={styles.dot2} />
          </View>
        </ViewShot>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancelBooking()}
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
                    navigation.navigate(SCREENS.DASHBOARD);
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
export default BookingDetail;
