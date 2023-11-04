import React, { useState, useEffect } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import {
  GetEventListRequest,
  GetEventListResponse,
} from "../../Redux/Actions/GetEventListAction";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { COLORS } from "../../Utils/Colors";

const Events = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<any>([]);
  const [page, SetPage] = useState(1);
  const [skeleton, setSkeleton] = useState(true);
  const eventListRes = useSelector((state: any) => state.EventList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventListRes.data !== null) {
      setSkeleton(false);
      if (eventListRes?.data?.length !== 0) {
        setData([...data, ...eventListRes.data]);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", "1");
        payload.append("event_type", "event");
        dispatch(GetEventListRequest(payload));
      });
    }
  }, [eventListRes.data]);

  const pagination = () => {
    if (data?.length > 9) {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", page + 1);
        payload.append("event_type", "event");
        dispatch(GetEventListRequest(payload));
        SetPage(page + 1);
      });
    }
  };
  //Day RenderItem
  const TimeRenderItem = ({ item, index }: { item: any; index: any }) => (
    <Text style={styles.startTimeText} numberOfLines={1} adjustsFontSizeToFit>
      {(index ? ", " : "") + item?.day?.slice(0, 3)}
    </Text>
  );

  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      style={{ marginHorizontal: scale(16) }}
      onPress={() => {
        navigation.navigate(SCREENS.EVENT_DETAIL, {
          data: item,
          item: "event",
          root: "events",
        });
      }}
    >
      <View
        style={[
          styles.bottomWhitwContainer,
          {
            marginTop: index === 0 ? scale(20) : scale(10),
          },
        ]}
      >
        <View style={{ flex: 4 }}>
          <FastImage
            style={styles.eventView}
            source={{
              uri:
                item.event_media_data.length !== 0
                  ? item?.event_media_data[0]?.media_file
                  : "",
              priority: FastImage.priority.high,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.categoryContainer}>
          {item?.event_category[0]?.category_name === null ||
          item?.event_category[0]?.category_name === undefined ? null : (
            <View style={styles.categorySubContainer}>
              <Text style={styles.eventCategoryTitle}>
                {item?.event_category[0]?.category_name}
              </Text>
            </View>
          )}

          <Text style={styles.eventTitle}>{item?.event_title}</Text>
          {item?.event_class_time_data === null ? null : (
            <View style={styles.eventtime}>
              {item?.event_class_time_data[0]?.day === "all_days" ? (
                <Text
                  style={styles.startTimeText}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  All Days
                </Text>
              ) : (
                <FlatList
                  data={item.event_class_time_data}
                  renderItem={TimeRenderItem}
                  horizontal
                  overScrollMode={"never"}
                />
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Background>
      <Header
        onPress={() => {
          dispatch(GetEventListResponse(null));
          navigation.goBack();
        }}
        text={"Events"}
        menuOnPress={() => navigation.openDrawer()}
      />
      {skeleton ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 1 }}
          nestedScrollEnabled={true}
        >
          <View style={{marginTop:scale(20)}}>
          {[1,2,3,4,5].map((item)=>(<View key={item} style={styles.eventSkeletonContainer}>
          <SkeletonPlaceholder backgroundColor={COLORS.LIGHT_ORANGE}>
            <View style={{display:'flex',flexDirection:'row'}}>
            <View style={styles.eventView}/>
            <View>
            <View style={styles.categorySkeleton} />
            <View style={styles.categorySkeletonTitle} />
            </View>
            </View>
          </SkeletonPlaceholder>
          </View>))}
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item?.event_id}
          onEndReached={() => pagination()}
          contentContainerStyle={{
            paddingBottom: scale(20),
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Background>
  );
};
export default Events;
