import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";
import { scale } from "../../Utils/Helper/Scalling";
import { IMAGES } from "../../Utils/Images";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import { FlatList } from "react-native";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import { DashboardRequest } from "../../Redux/Actions/DashboardAction";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Carousel from "react-native-snap-carousel";
import EventCarousel from "../../Component/EventCarousel";

const initialValues = {
  event_data: [],
  news_data: [],
  category_class_data: [],
  home_page_offer_banner_data: [],
};
const Dashboard = ({ navigation }: { navigation: any }) => {
  const [image, setImage] = useState<any>(null);
  const [Data, setData] = useState(initialValues);
  const [memberName, setMemberName] = useState("");
  const [skeleton, setSkeleton] = useState(true);

  const homeRes = useSelector((state: any) => state.Dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  });
  useEffect(() => {
    if (homeRes.data !== null) {
      setData(homeRes.data);
      setSkeleton(false);
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        setMemberName(temp?.member_name);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        dispatch(DashboardRequest(payload));
      });
    }
  }, [homeRes.data]);
  let myDate = new Date();
  let hrs = myDate.getHours();
  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 21) greet = "Good Evening";
  else if (hrs >= 21 && hrs <= 24) greet = "Good Night";
  const handleBannerClick = (obj) => {
    const categoryData = obj?.category_data;
    if (categoryData) {
      if (categoryData?.length > 0) {
        if (categoryData[0]?.category_name === "Offer")
          navigation.navigate(SCREENS.OFFER_SUB_SCREEN);
      }
    }
  };
  // Event RenderItem
  const EventRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.EVENT_DETAIL, {
          event_id: item?.event_id,
          item: "event",
          from: "dashboard",
        });
      }}
    >
      <ImageBackground
        source={{ uri: item?.event_media_data[0]?.media_file }}
        style={[
          styles.eventImage,
          { marginLeft: index === 0 ? scale(0) : scale(15) },
        ]}
        borderRadius={scale(10)}
      >
        <LinearGradient
          start={{ x: 0, y: 1.3 }}
          end={{ x: 0, y: 0 }}
          colors={[COLORS.BLACK, "transparent"]}
          style={styles.linearView}
        >
          <View style={[styles.eventtime, { right: scale(5) }]}>
            <Text
              style={styles.startTimeText}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {moment(item.start_date).format("DD MMMM YYYY")}
            </Text>
          </View>
          <Text
            style={[styles.eventTitle, { right: scale(5) }]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {item?.event_title}
          </Text>
          <Text style={styles.TimeText}>
            {moment(item.start_date).format("hh:mm")} hours ago
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  // News RenderItem
  const newsRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.NEWS_DETAIL_SCREEN, {
          data: item,
        });
      }}
    >
      <View
        style={[
          styles.newsMainContainer,
          {
            marginLeft: index === 0 ? scale(0) : scale(7),
            // marginRight:
            //   index === Data.news_data.length - 1 ? scale(40) : scale(0),
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View style={styles.newsSubContainer}>
              <Text style={styles.newsHeadText}>
                {item?.category_data[0]?.category_name}
              </Text>
            </View>
            <Text style={styles.newsDesc} numberOfLines={4}>
              {item.news_title}
            </Text>
            <Text style={styles.newsDate}>
              {moment(item?.news_date).format("MMMM DD, YYYY")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  // const ClassRenderItem = ({ item, index }: { item: any; index: any }) =>
  //   item.media_file === undefined ? (
  //     <>
  //       <TouchableOpacity
  //         style={{ marginTop: scale(10) }}
  //         onPress={() => {
  //           if (item?.category_id !== "view_all")
  //             navigation.navigate(SCREENS.CLASSES, {
  //               category_id: item?.category_id,
  //             });
  //         }}
  //       >
  //         <View style={styles.viewAllclassimage}>
  //           <Text
  //             style={[styles.viewClassTitle, { textTransform: "uppercase" }]}
  //           >
  //             {item.category_name}
  //           </Text>
  //         </View>
  //       </TouchableOpacity>
  //     </>
  //   ) : (
  //     <View>
  //       <TouchableOpacity
  //         style={{
  //           marginTop: scale(10),
  //           height: scale(100),
  //           width: scale(100),
  //           backgroundColor: COLORS.WHITE,
  //           marginLeft: index === 0 ? scale(10) : scale(10),
  //           borderRadius: scale(10),
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //         onPress={() => {
  //           if (item?.category_id !== "view_all")
  //             navigation.navigate(SCREENS.CLASSES, {
  //               category_id: item?.category_id,
  //             });
  //         }}
  //       >
  //         <FastImage
  //           source={item.media_file}
  //           style={[styles.classimage]}
  //           resizeMode="contain"
  //         />
  //       </TouchableOpacity>
  //       <Text style={styles.classTitle}>{item.category_name}</Text>
  //     </View>
  //   );

  return (
    <SafeAreaView style={styles.mainContainer}>
       <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 1 }}
          nestedScrollEnabled={true}
        >
      {skeleton ? (
        
        <SkeletonPlaceholder backgroundColor={COLORS.LIGHT_ORANGE}>
          <View style={styles.contentcontainer}>
            <View style={{ flex: scale(2) }}>
              <View style={styles.userIcon} />
            </View>
            <View style={styles.nameContainer}>
                <View style={styles.nameSkeleton} />
                <View style={styles.nameSubSkeleton} />
              </View>
          </View>
          <View style={styles.subContentContainer}>
              <View style={styles.classesRowView}>
                <View style={styles.headTextSkeleton} />
                <View style={styles.arrowSkeleton} />
              </View>

              <View
                style={{ flexDirection: "row", marginHorizontal: scale(20) }}
              >
                <View style={{ flexDirection: "column" }}>
                  <View style={styles.eventViewSkeleton} />
                </View>
                <View>
                  <View style={{ flexDirection: "column" }}>
                    <View style={styles.event2ViewSkeleton} />
                  </View>
                </View>
              </View>
              <View style={styles.subContentContainer}>
                <View style={styles.classesRowView}>
                  <View style={styles.classHedContainer} />
                  <View style={styles.arrowSkeleton} />
                </View>
                <View style={{marginHorizontal: scale(20),flexDirection: "row" }}>
                  <View style={styles.classViewconteinSkeleton} />
                  <View style={styles.classViewconteinSkeleton2} />
                </View>
              </View>
              </View>
              <View style={styles.bannerSkeleton} />
        </SkeletonPlaceholder>
      ) : (
        <>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.ORANGE}
            barStyle="dark-content"
          />
          <View style={styles.contentcontainer}>
            <View
              style={{
                flex: scale(2),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.PROFILE);
                }}
              >
                <Image
                  source={
                    image === null || undefined ? IMAGES.USER : { uri: image }
                  }
                  style={styles.userIcon}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.headingText}>Hi, {memberName}</Text>
              <Text style={styles.greetMessage}>{greet}</Text>
            </View>
            <TouchableOpacity
              style={styles.qrContainer}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              {/* ============ Open Drawer ============= */}

              <Image source={IMAGES.MORE} style={styles.qrIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.subContentContainer}>
            {/* ============ Events ============= */}
            <View style={styles.classesRowView}>
              <Text style={styles.contentHeading}>Events</Text>
              <TouchableOpacity
                style={{ marginTop: scale(5) }}
                onPress={() => navigation.navigate(SCREENS.EVENTS)}
              >
                <Image
                  source={IMAGES.VIEW_ARROW}
                  style={styles.nextIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.eventContainer}>
            <EventCarousel
              data={Data?.event_data.slice(0, 5)}
              renderItem={EventRenderItem}
            />
          </View> */}

            <FlatList
              data={Data?.event_data.slice(0, 5)}
              renderItem={EventRenderItem}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              overScrollMode={"never"}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.eventContainer}
            />
          </View>
          {/* ================ News And Notices ==================== */}

          <View style={styles.subContentContainer}>
            <View style={styles.classesRowView}>
              <Text style={styles.contentHeading}>News & Notices</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.NEWS_SUB_SCREEN);
                }}
              >
                <Image
                  source={IMAGES.VIEW_ARROW}
                  style={styles.nextIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={Data?.news_data}
              renderItem={newsRenderItem}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              overScrollMode={"never"}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.eventContainer}
              ListEmptyComponent={
                <View style={{ marginHorizontal: scale(105) }}>
                  <Text
                    style={{
                      fontSize: scale(15),
                      fontFamily: FONTS.POPPINS_MEDIUM,
                      color: COLORS.BLACK,
                    }}
                  >
                    No News Available
                  </Text>
                </View>
              }
            />
          </View>
          {/* ================ Classes ==================== */}
          {/* <View style={styles.subContentContainer}>
          <View style={styles.classesRowView}>
            <Text style={styles.contentHeading}>Classes</Text>
          </View>
          <FlatList
            data={[
              ...Data?.category_class_data?.slice(0, 5),
              {
                category_id: "view_all",
                category_name: "View All Classes",
                category_for: "class",
                is_active: "1",
                created_at: "2022-10-11 17:53:23",
                created_by: "1",
                updated_at: "2022-10-11 17:53:49",
                updated_by: "1",
                start_date: "2023-01-01 09:15:00",
                end_date: "2023-09-30 10:30:00",
              },
            ]}
            renderItem={ClassRenderItem}
            overScrollMode={"never"}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginLeft: scale(5),
              paddingRight: scale(40),
              marginTop: scale(10),
            }}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={{ marginHorizontal: scale(105) }}>
                <Text style={styles.emptyContainer}>No Classes Available</Text>
              </View>
            }
          />
        </View> */}
          <View style={{ marginTop: scale(30), marginBottom: scale(25) }}>
            <TouchableOpacity
              onPress={() =>
                handleBannerClick(Data?.home_page_offer_banner_data[0])
              }
            >
              <FastImage
                source={{
                  uri:
                    Data?.home_page_offer_banner_data[0]
                      ?.home_page_offer_banner_image || "",
                  priority: FastImage.priority.high,
                }}
                resizeMode="cover"
                style={{
                  height: Dimensions.get("screen").height / 3.7,
                  width: Dimensions.get("screen").width / 1.11,
                  alignSelf: "center",
                  borderRadius: scale(10),
                }}
              />
            </TouchableOpacity>
          </View>
          </>
      )}
        </ScrollView>
    </SafeAreaView>
  );
};
export default Dashboard;
