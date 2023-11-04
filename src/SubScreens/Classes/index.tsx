import React, { useState, useEffect } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { FONTS } from "../../Utils/Fonts";
import FastImage from "react-native-fast-image";
import { SCREENS } from "../../Utils/ScreenContant";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import {
  ClassListRequest,
  ClassListResponse,
} from "../../Redux/Actions/ClassListAction";

const Classes = ({ navigation, route }: { navigation: any }) => {
  const [data, setData] = useState<any>([]);
  const classListRes = useSelector((state: any) => state.ClassList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (classListRes.data !== null) {
      if (classListRes?.data?.length > 0) {
        setData(classListRes.data[0]?.data);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("category_id","2");
        payload.append("start", "1");
        dispatch(ClassListRequest(payload));
      });
    }
  }, [classListRes.data]);
  const TimeRenderItem = ({ item, index }: { item: any; index: any }) => (
    <Text style={styles.startTimeText} numberOfLines={1} adjustsFontSizeToFit>
      {(index ? ", " : "") + item?.day?.slice(0, 3)}
    </Text>
  );
  const TimeIndexRenderItem = ({ item, index }: { item: any; index: any }) => (
    <Text style={styles.startTimeIndexText}>
      {(index ? ", " : "") + item?.day?.slice(0, 3)}
    </Text>
  );
  const renderItem = ({ item, index }: { item: any; index: any }) =>
    index === 0 ? (
      <TouchableOpacity
        style={{ marginHorizontal: scale(15), marginBottom: scale(20) }}
        onPress={() => {
          navigation.navigate(SCREENS.EVENT_DETAIL, {
            data: item,
            item: "class",
          });
        }}
      >
        <ImageBackground
          style={{
            width: Dimensions.get("screen").width / 1.1,
            height: Dimensions.get("screen").height / 3.2,
          }}
          borderRadius={scale(10)}
          source={{
            uri:
              item?.event_media_data?.length !== 0
                ? item?.event_media_data[0]?.media_file
                : "",
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 1.3 }}
            end={{ x: 0, y: 0 }}
            colors={[COLORS.BLACK, "transparent"]}
            style={styles.linearView}
          >
            {item?.event_class_time_data === null ? null : (
              <View style={styles.eventIndextime}>
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
                    data={item?.event_class_time_data}
                    renderItem={TimeIndexRenderItem}
                    horizontal
                    overScrollMode={"never"}
                  />
                )}
              </View>
            )}
            <Text
              style={{
                fontSize: scale(22),
                color: COLORS.WHITE,
                fontFamily: FONTS.POPPINS_MEDIUM,
                marginBottom: scale(15),
              }}
            >
              {item?.event_title}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={{ marginHorizontal: scale(15) }}
        onPress={() => {
          navigation.navigate(SCREENS.EVENT_DETAIL, {
            data: item,
            item: "class",
          });
        }}
      >
        <View
          style={[
            styles.bottomWhitwContainer,
            {
              marginBottom: scale(20),
            },
          ]}
        >
          <View style={{ flex: 4 }}>
            <FastImage
              style={styles.eventView}
              source={{
                uri:
                  item?.event_media_data.length !== 0
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

            <Text numberOfLines={1} style={styles.eventTitle}>
              {item?.event_title}
            </Text>
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
                    data={item?.event_class_time_data}
                    renderItem={TimeRenderItem}
                    horizontal
                    overScrollMode={"never"}
                  />
                )}
              </View>
            )}
          </View>
        </View>
        {/* )} */}
      </TouchableOpacity>
    );
  return (
    <Background>
      <Header
        onPress={() => {
          dispatch(ClassListResponse(null));
          navigation.goBack();
        }}
        text={"Classes"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: scale(25),
          marginTop: scale(25),
        }}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
};
export default Classes;
