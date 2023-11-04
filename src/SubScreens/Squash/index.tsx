import React, { useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../Utils/Colors";
import { Text } from "react-native";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";
import RenderHTML from "react-native-render-html";
import { IMAGES } from "../../Utils/Images";
import { FONTS } from "../../Utils/Fonts";
import { SCREENS } from "../../Utils/ScreenContant";
import moment from "moment";
import Button from "../../Component/Button";

const data = {
  facility_id: "8",
  facility_name: "Squash",
  description:
    '<p>Since its inception, the JVPG Club has been instrumental in churning out several national champions in the game of squash.These champions have excelled in bringing laurels to the club, state and country on a regular basis and have created an infrastructure and breeding ground for upcoming talent and future prospects to takes the game to the next level. This has only been possible due to the untiring efforts of the coaches and markers, who have imparted their knowledge to the players right from the beginner level to a very advanced level.</p><p>For several years, JVPG Club has held the Inter Club Squash Trophy thereby proving time and again that they are a major force to reckon with.</p><p>With the current stadium like air conditioned infrastructure, JVPG Club has hosted major tournaments like the Indian Squash Nationals.  The event was rated as the best ever managed National tournament by Players & Officials.</p><p>A squash academy under the guidance of Coach A I Singh was in place for a 7 to 8 year period.  We thank him for his services in providing his knowledge and time towards producing such great results for the club.  However we are in a transition phase and a new coaching program begins in September 2022.  This will be in collaboration with Start Academy under the guidance of multiple time national champion Ritwik Bhattacharya.  The head coach will be internationally renowned coach and former world No. 40 Stefan Galifi from France</p><p><b>Charges</b></p><table border="0" cellpadding="0" cellspacing="0" width="408" xss="removed">\r\n <colgroup><col width="154" xss="removed">\r\n <col width="254" xss="removed">\r\n </colgroup><tbody><tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Effective  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">01.09.2022  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Member  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 50/- per 1/2 hour  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Member Maximum  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 500/- per month per member  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Guest  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 200/- per 1/2 hour weekdays  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Guest  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 300/- per 1/2 hour Weekends / Bank Holidays & Public\r\n  Holidays  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Playing Membership Monthly  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">5000 <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Marker Fees  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs 40/- per 1/2 hour  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Senior Citizen 60 To 70 Years  <br></td>\r\n  <td class="xl66" dir="LTR" width="254" xss="removed">50% <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Senior Citizen 70 And Above  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">FREE  <br></td>\r\n </tr></tbody></table><div><br></div>',
  rules: "<p>Content pending    </p>",
  timing:
    '<p><span xss="removed">7</span><span xss="removed">.00 AM </span><span xss="removed">to 10.30 PM</span></p><p><span xss="removed"></span><br></p>',
  is_active: "1",
  created_at: "2022-09-13 15:19:29",
  updated_at: "2023-04-12 18:31:58",
  created_by: "1",
  updated_by: "1",
  facility_for: "G0002",
  effective_date: "13-09-2022",
  facility_media_data: [
    {
      media_id: "104",
      media_for: "facility",
      media_for_id: "8",
      media_title: "",
      media_file:
        "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/5a4b0ac4a9b1fdafae9aa0c0e82b5b1a.jpg",
      thumbnail_image:
        "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/1685540974.jpeg",
      media_type: "image",
      media_sort_order: "1",
      created_at: "2022-09-24 04:56:38",
      created_by: "1",
      updated_at: "2023-04-12 06:31:58",
      updated_by: "1",
    },
  ],
  key_feature_data: [
    {
      key_feature_id: "20",
      key_feature_for_id: "8",
      key_feature_for: "facility",
      key_feature_title: "7:00 am to 10:30 pm",
      key_feature_image:
        "https://newadmin.ottersclub.com/uploads/icon/dfcc5b37b9990d1bcfd8ac7289fa7cba.png",
      key_feature_sort_order: "1",
      created_at: "2023-01-04 06:01:54",
      created_by: "1",
      updated_at: "2023-04-12 06:31:58",
      updated_by: "1",
    },
    {
      key_feature_id: "21",
      key_feature_for_id: "8",
      key_feature_for: "facility",
      key_feature_title: "Professional Coaching",
      key_feature_image:
        "https://newadmin.ottersclub.com/uploads/icon/f1077e2ce41acdaea4f2bbc630fe98cd.png",
      key_feature_sort_order: "2",
      created_at: "2023-01-04 06:01:54",
      created_by: "1",
      updated_at: "2023-04-12 06:31:58",
      updated_by: "1",
    },
    {
      key_feature_id: "22",
      key_feature_for_id: "8",
      key_feature_for: "facility",
      key_feature_title: "International Level Squash Courts",
      key_feature_image:
        "https://newadmin.ottersclub.com/uploads/icon/6569112cba045d2159a92a2f1368e525.png",
      key_feature_sort_order: "3",
      created_at: "2023-01-04 06:01:54",
      created_by: "1",
      updated_at: "2023-04-12 06:31:58",
      updated_by: "1",
    },
  ],
  facility_charges_data: [
    {
      facility_charges_id: "47",
      facility_id: "8",
      particular: "Member",
      rate: "50",
      description: "(1/2 Hour)",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "48",
      facility_id: "8",
      particular: "Member Maximum",
      rate: "500",
      description: "Per Month Per Member",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "49",
      facility_id: "8",
      particular: "Guest",
      rate: "200",
      description: "Per 1/2 Hour Weekdays",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "51",
      facility_id: "8",
      particular: "Playing Membership",
      rate: "5000",
      description: "Monthly",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "52",
      facility_id: "8",
      particular: "Marker Fees",
      rate: "40",
      description: "Per 1/2 Hour",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "53",
      facility_id: "8",
      particular: "Senior Citizen",
      rate: "0",
      description: "60 To 70 Years (50%)",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
    {
      facility_charges_id: "54",
      facility_id: "8",
      particular: "Senior Citizen",
      rate: "0",
      description: "70 And Above",
      created_at: "2022-09-13 03:19:29",
      updated_at: "2023-04-12 06:31:58",
      created_by: "1",
      updated_by: "1",
    },
  ],
  share_data: {
    share_title: "Squash",
    share_description:
      '<p>Since its inception, the JVPG Club has been instrumental in churning out several national champions in the game of squash.These champions have excelled in bringing laurels to the club, state and country on a regular basis and have created an infrastructure and breeding ground for upcoming talent and future prospects to takes the game to the next level. This has only been possible due to the untiring efforts of the coaches and markers, who have imparted their knowledge to the players right from the beginner level to a very advanced level.</p><p>For several years, JVPG Club has held the Inter Club Squash Trophy thereby proving time and again that they are a major force to reckon with.</p><p>With the current stadium like air conditioned infrastructure, JVPG Club has hosted major tournaments like the Indian Squash Nationals.  The event was rated as the best ever managed National tournament by Players & Officials.</p><p>A squash academy under the guidance of Coach A I Singh was in place for a 7 to 8 year period.  We thank him for his services in providing his knowledge and time towards producing such great results for the club.  However we are in a transition phase and a new coaching program begins in September 2022.  This will be in collaboration with Start Academy under the guidance of multiple time national champion Ritwik Bhattacharya.  The head coach will be internationally renowned coach and former world No. 40 Stefan Galifi from France</p><p><b>Charges</b></p><table border="0" cellpadding="0" cellspacing="0" width="408" xss="removed">\r\n <colgroup><col width="154" xss="removed">\r\n <col width="254" xss="removed">\r\n </colgroup><tbody><tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Effective  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">01.09.2022  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Member  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 50/- per 1/2 hour  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Member Maximum  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 500/- per month per member  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Guest  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 200/- per 1/2 hour weekdays  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Guest  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs. 300/- per 1/2 hour Weekends / Bank Holidays & Public\r\n  Holidays  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Playing Membership Monthly  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">5000 <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Marker Fees  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">Rs 40/- per 1/2 hour  <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Senior Citizen 60 To 70 Years  <br></td>\r\n  <td class="xl66" dir="LTR" width="254" xss="removed">50% <br></td>\r\n </tr>\r\n <tr height="30" xss="removed">\r\n  <td height="30" class="xl65" dir="LTR" width="154" xss="removed">Senior Citizen 70 And Above  <br></td>\r\n  <td class="xl65" dir="LTR" width="254" xss="removed">FREE  <br></td>\r\n </tr></tbody></table><div><br></div>',
    share_image:
      "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/5a4b0ac4a9b1fdafae9aa0c0e82b5b1a.jpg",
    share_url: "",
  },
};

const whenDataArr = [
  {
    id: 1,
    name: "Today",
    selected: false,
  },
  {
    id: 1,
    name: "Tomorrow",
    selected: false,
  },
];
const whereDataArr = [
  {
    id: 1,
    name: "Court 1",
    selected: false,
  },
  {
    id: 1,
    name: "Court 2",
    selected: false,
  },
];

const timeSlots = [
  {
    id: 1,
    time: "7:00 PM - 3 Slots available",
    selected: false,
  },
  {
    id: 2,
    time: "8:00 PM - 2 Slots available",
    selected: false,
  },
  {
    id: 3,
    time: "8:30 PM - 4 Slots available",
    selected: false,
  },
  {
    id: 4,
    time: "9:00 PM - 2 Slots available",
    selected: false,
  },
  {
    id: 5,
    time: "9:30 PM - 4 Slots available",
    selected: false,
  },
  {
    id: 6,
    time: "10:00 PM - 2 Slots available",
    selected: false,
  },
  {
    id: 7,
    time: "10:30 PM - 4 Slots available",
    selected: false,
  },
];

const Squash = ({ navigation }: { navigation: any }) => {
  const [squashData, setSquashData] = useState<any>(data);
  const [whenData, setWhenData] = useState<any[]>(whenDataArr);
  const [openBook, setOpnBook] = useState<boolean>(false);
  const [whenIndex, setWhenindex] = useState<number>();
  const [whereData, setWhereData] = useState<any[]>(whereDataArr);
  const [whereIndex, setWhereindex] = useState<number>();
  const [memberCount, setMemberCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);
  const [markerCount, setMarkerCount] = useState<number>(0);
  const [openTimeSlot, setOpenTimeSlot] = useState<boolean>(false);
  const [timeSlotData, setTimeSotData] = useState<any[]>(timeSlots);
  const [timeIndex, setTimeIndex] = useState<number>();

  const source = {
    html: data !== null ? data.description : "",
  };

  console.log("data ::", data);
  const { width } = useWindowDimensions();
  const onPress = (item: any, index: any) => {
    setWhenindex(index);
  };
  const whereonPress = (item: any, index: any) => {
    setWhereindex(index);
  };

  const whenRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.TodaychoicesView}>
      <TouchableOpacity
        style={[
          styles.whereradioView,
          whenIndex === index
            ? {
                borderColor: COLORS.BLACK,
              }
            : {
                borderColor: COLORS.RED,
              },
        ]}
        onPress={() => onPress(item, index)}
      >
        <View
          style={[
            styles.radioinnerView,
            whenIndex === index
              ? {
                  backgroundColor: COLORS.RED,
                }
              : {
                  backgroundColor: COLORS.WHITE,
                },
          ]}
        ></View>
      </TouchableOpacity>
      <View style={{ width: Dimensions.get("screen").width / 3 }}>
        <Text style={styles.radioLabel}>{item.name}</Text>
      </View>
    </View>
  );
  const whereRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.TodaychoicesView}>
      <TouchableOpacity
        style={[
          styles.whereradioView,
          whereIndex === index
            ? {
                borderColor: COLORS.BLACK,
              }
            : {
                borderColor: COLORS.RED,
              },
        ]}
        onPress={() => whereonPress(item, index)}
      >
        <View
          style={[
            styles.radioinnerView,
            whereIndex === index
              ? {
                  backgroundColor: COLORS.RED,
                }
              : {
                  backgroundColor: COLORS.WHITE,
                },
          ]}
        ></View>
      </TouchableOpacity>
      <View style={{ width: Dimensions.get("screen").width / 3 }}>
        <Text style={styles.radioLabel}>{item.name}</Text>
      </View>
    </View>
  );
  const timeOnPress = (item: any, index: any) => {
    setTimeIndex(index);
    setOpenTimeSlot(false);
  };
  const timeSlotRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      style={styles.timeRenderContainer}
      onPress={() => timeOnPress(item, index)}
    >
      <TouchableOpacity
        style={[
          styles.whereradioView,
          timeIndex === index
            ? {
                borderColor: COLORS.MEDIUM_GREY,
              }
            : {
                borderColor: COLORS.MEDIUM_GREY,
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
      <Text style={styles.timeText}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Book Game"}
          menuOnPress={() => navigation.openDrawer()}
        />
        <ImageBackground
          source={{ uri: squashData?.facility_media_data[0]?.media_file }}
          style={styles.media_file}
          borderRadius={scale(10)}
        >
          <LinearGradient
            start={{ x: 0, y: 1.3 }}
            end={{ x: 0, y: 0 }}
            colors={[COLORS.BLACK, "transparent"]}
            style={styles.linearView}
          >
            <Text style={styles.eventTitle}>{squashData?.facility_name}</Text>
          </LinearGradient>
        </ImageBackground>
        <Text style={styles.aboutSquashText}>About Squash Game</Text>
        <RenderHTML
          contentWidth={width}
          source={source}
          baseStyle={styles.desStyles}
        />
      </ScrollView>
      <View
        style={{
          position: "relative",
          height: scale(80),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onPress={() => {
            setOpnBook(true);
          }}
          text="Book Now"
        />
      </View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={openBook}
        onRequestClose={() => setOpnBook(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            {openTimeSlot ? (
              <>
                <View style={styles.subModalContainer2}>
                  <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setOpenTimeSlot(false)}>
                      <Image
                        source={IMAGES.BACK_ICON}
                        style={styles.backImg}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.timeSlotModalText}>Select Time</Text>
                  </View>
                  <View style={styles.closeContainer}>
                    <View style={styles.backImg} />
                  </View>
                </View>
                <View style={{ marginHorizontal: scale(30) }}>
                  <Text style={styles.dayTimeDes}>Please Select Time Slot</Text>
                  <FlatList
                    data={timeSlotData}
                    renderItem={timeSlotRenderItem}
                    contentContainerStyle={{
                      paddingBottom: scale(55),
                      // marginTop: scale(5),
                    }}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={styles.subModalContainer2}>
                  <View style={styles.closeContainer}>
                    <View style={styles.closeImg} />
                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleModalText}>Book Squash</Text>
                  </View>
                  <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setOpnBook(false)}>
                      <Image
                        source={IMAGES.CLOSE}
                        style={styles.closeImg}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ marginHorizontal: scale(15) }}>
                  <Text style={styles.dayTimeDes}>
                    Please Select Day and Time
                  </Text>
                  <Text style={styles.whenDes}>When</Text>
                  <FlatList
                    data={whenData}
                    renderItem={whenRenderItem}
                    horizontal
                    contentContainerStyle={{ marginHorizontal: scale(3) }}
                  />
                  <Text style={styles.whereDes}>Where</Text>
                  <FlatList
                    data={whereData}
                    renderItem={whereRenderItem}
                    horizontal
                    contentContainerStyle={{ marginHorizontal: scale(3) }}
                  />
                  <Text style={styles.whereDes}>Start Time</Text>
                  <TouchableOpacity
                    onPress={() => setOpenTimeSlot(true)}
                    style={styles.selectTimeContainer}
                  >
                    <Text style={styles.selectTimeText}>
                      Select a Time Slot
                    </Text>
                    <Image
                      source={IMAGES.DOWN_ARROW}
                      style={styles.downArrow}
                    />
                  </TouchableOpacity>
                  <View style={styles.memberContainer}>
                    <Text style={styles.memberText}>Member</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={IMAGES.MINUS}
                          style={styles.minusImage}
                        />
                      </TouchableOpacity>
                      <Text style={styles.countText}>{memberCount}</Text>
                      <TouchableOpacity>
                        <Image source={IMAGES.PLUS} style={styles.minusImage} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.memberContainer}>
                    <Text style={styles.memberText}>Guest</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={IMAGES.MINUS}
                          style={styles.minusImage}
                        />
                      </TouchableOpacity>
                      <Text style={styles.countText}>{childCount}</Text>
                      <TouchableOpacity>
                        <Image source={IMAGES.PLUS} style={styles.minusImage} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.memberContainer}>
                    <Text style={styles.memberText}>Marker</Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={IMAGES.MINUS}
                          style={styles.minusImage}
                        />
                      </TouchableOpacity>
                      <Text style={styles.countText}>{markerCount}</Text>
                      <TouchableOpacity>
                        <Image source={IMAGES.PLUS} style={styles.minusImage} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setOpnBook(false);
                      navigation.navigate(SCREENS.BOOKING_DETAIL, {
                        squash: "squash",
                      });
                    }}
                    style={[
                      styles.submitModalButton,
                      { marginTop: scale(50), marginBottom: scale(7) },
                    ]}
                  >
                    <Text style={styles.saveText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </Background>
  );
};
export default Squash;
