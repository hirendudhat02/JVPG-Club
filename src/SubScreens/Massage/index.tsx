import React, { useState, useEffect } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { IMAGES } from "../../Utils/Images";
import RenderHTML from "react-native-render-html";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import { SCREENS } from "../../Utils/ScreenContant";
import Button from "../../Component/Button";
import { useDispatch, useSelector } from "react-redux";
import { GetMassageTimeslotListRequest } from "../../Redux/Actions/GetMassageTimeslotAction";
import {
  GetFacilityListRequest,
  GetFacilityListResponse,
} from "../../Redux/Actions/GetFacilityListAction";

const MassageScreen = ({ navigation }: { navigation: any }) => {
  const [timeSlotOpen, setTimeSlotOpen] = useState<boolean>(false);
  const [timeSlots, setTimeSlots] = useState<any[]>([]);
  const [timeIndex, setTimeIndex] = useState<number>();
  const [data, setData] = useState(null);
  const [memberCode, setMemberCode] = useState("");
  const getMassageTimeSlotRes = useSelector(
    (state: any) => state.GetMassageTimeSlot
  );
  const facilityListRes = useSelector((state: any) => state.FacilityList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (facilityListRes.data !== null) {
      setData(facilityListRes.data[0]);
    } else {
      const data = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        setMemberCode(temp.member_id);
        data.append("start", "1");
        data.append("search_parameter", "Massage");
        data.append("member_id", temp.member_id);
        data.append("auth_token", temp.auth_token);
        dispatch(GetFacilityListRequest(data));
      });
    }
  }, [facilityListRes.data]);

  useEffect(() => {
    if (getMassageTimeSlotRes.data !== null) {
      setTimeSlots(getMassageTimeSlotRes.data);
    } else {
      const data = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        data.append("member_id", temp.member_id);
        data.append("auth_token", temp.auth_token);
        data.append("massage_date", "11-08-2023");
        data.append("time_slot_for", "male");
        dispatch(GetMassageTimeslotListRequest(data));
      });
    }
  }, [getMassageTimeSlotRes.data]);
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View
      style={[
        styles.renderContainer,
        { marginLeft: index === 0 ? scale(3) : scale(15) },
      ]}
    >
      <Image
        source={
          index === 2 ? item.key_feature_image : { uri: item.key_feature_image }
        }
        style={styles.renderImage}
      />
      <Text
        style={[styles.renderAvailableOn]}
        numberOfLines={2}
        adjustsFontSizeToFit
      >
        {item.key_feature_title}
      </Text>
    </View>
  );
  const source = {
    html: data !== null ? data.description : "",
  };

  const { width } = useWindowDimensions();
  const timeOnPress = (item: any, index: any) => {
    setTimeIndex(index);
  };
  function convertTo24HourFormat(timeString: string) {
    const [startTime, endTime] = timeString.match(/\d{2}:\d{2} [AP]M/g);
    const [startHour, startMinute, startPeriod] = startTime.split(/[: ]/);
    const [endHour, endMinute, endPeriod] = endTime.split(/[: ]/);

    let convertedStartHour = parseInt(startHour, 10);
    let convertedEndHour = parseInt(endHour, 10);

    if (startPeriod === "PM" && convertedStartHour !== 12) {
      convertedStartHour += 12;
    }

    if (endPeriod === "PM" && convertedEndHour !== 12) {
      convertedEndHour += 12;
    }

    const convertedStartTime = `${convertedStartHour
      .toString()
      .padStart(2, "0")}:${startMinute}`;
    const convertedEndTime = `${convertedEndHour
      .toString()
      .padStart(2, "0")}:${endMinute}`;

    return `${convertedStartTime} to ${convertedEndTime}`;
  }

  const timeSlotRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      style={[styles.timeRenderContainer, { marginLeft: scale(27) }]}
      onPress={() => timeOnPress(item, index)}
    >
      <TouchableOpacity
        style={[
          styles.whereradioView,
          timeIndex === index
            ? {
                borderColor: COLORS.BLACK,
              }
            : {
                borderColor: COLORS.RED,
              },
        ]}
        onPress={() => timeOnPress(item, index)}
      >
        <View
          style={[
            styles.radioinnerView,
            timeIndex === index
              ? {
                  backgroundColor: COLORS.RED,
                }
              : {
                  backgroundColor: COLORS.WHITE,
                },
          ]}
        ></View>
      </TouchableOpacity>
      <Text style={styles.timeText}>
        {convertTo24HourFormat(item?.time_slot_label)}
      </Text>
    </TouchableOpacity>
  );
  if (data !== null)
    return (
      <Background>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            onPress={() => {
              dispatch(GetFacilityListResponse(null));
              navigation.goBack();
            }}
            text={"Wellness"}
            menuOnPress={() => navigation.openDrawer()}
          />
          <ImageBackground
            source={{ uri: data?.facility_media_data[0]?.media_file }}
            style={styles.media_file}
            borderRadius={scale(10)}
          >
            <LinearGradient
              start={{ x: 0, y: 1.3 }}
              end={{ x: 0, y: 0 }}
              colors={[COLORS.BLACK, "transparent"]}
              style={styles.linearView}
            >
              <Text style={styles.eventTitle}>Massage Therapy</Text>
            </LinearGradient>
          </ImageBackground>
          <FlatList
            data={data.key_feature_data}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{
              marginTop: scale(25),
              marginHorizontal: scale(15),
            }}
          />
          <Text style={styles.aboutText}>About This Massage</Text>
          <RenderHTML
            contentWidth={width}
            source={source}
            baseStyle={styles.descText}
          />
          <Text style={[styles.chargeText, { marginBottom: scale(20) }]}>
            Charges
          </Text>
          <View style={styles.whiteContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.effectiveText}>Effective</Text>
              <Text style={styles.effectiveDate}>{data?.effective_date}</Text>
            </View>
            {data?.facility_charges_data?.map((obj) => (
              <View style={styles.rowWhiteContainer}>
                <Text style={styles.effectiveText}>{obj?.particular}</Text>
                <Text style={styles.perHourDate}>Rs. {obj?.rate} Per Hour</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            position: "relative",
            marginVertical: scale(16),
          }}
        >
          <Button onPress={() => setTimeSlotOpen(true)} text="Book Now" />
        </View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={timeSlotOpen}
          onRequestClose={() => setTimeSlotOpen(false)}
        >
          <View style={styles.modalContainer}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.BACKGROUND_COLOR}
              barStyle="light-content"
            />
            <View style={styles.subModalContainer}>
              <TouchableOpacity onPress={() => setTimeSlotOpen(false)}>
                <Image source={IMAGES.CLOSE} style={styles.backImg} />
              </TouchableOpacity>

              <FlatList
                data={timeSlots}
                renderItem={timeSlotRenderItem}
                numColumns={2}
                // contentContainerStyle={{marginHorizontal:scale(10)}}
                ListHeaderComponent={
                  <View style={{ marginLeft: scale(20), marginTop: scale(15) }}>
                    <Text style={styles.timeSlotHeading}>
                      Gents Massage Booking
                    </Text>
                    <Text style={styles.timeDesText}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </Text>
                  </View>
                }
                ListFooterComponent={
                  <TouchableOpacity
                    onPress={() => {
                      setTimeSlotOpen(false);
                      navigation.navigate(SCREENS.MASSAGE_DETAIL, {
                        imageUrl: data?.facility_media_data[0]?.thumbnail_image,
                        memberCode: memberCode,
                      });
                    }}
                    style={[styles.submitButton, { marginTop: scale(30) }]}
                  >
                    <Text style={styles.saveText}>Book Now</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </Modal>
      </Background>
    );
  else return null;
};
export default MassageScreen;
