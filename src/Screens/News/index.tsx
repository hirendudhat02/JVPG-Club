import React, { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Background from "../../Component/Background";
import { useFocusEffect } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
import { scale } from "../../Utils/Helper/Scalling";
import Header from "../../Component/Header";
import styles from "./styles";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../../Utils/ScreenContant";
const newsRes = [
  {
    news_id: "85",
    news_title: "Balloting Committee Meetings",
    short_description: "",
    long_description:
      "<div>Dear Members,</div><div><br></div><div>Please note the calendar of the scheduled  upcoming Balloting Committee Meetings for admission of Members Children and Corporates.</div><div><br></div><div>1. Sunday 16th April, 2023 @ 11.30 am</div><div>2. Sunday 16th July, 2023  @ 11.30 am</div><div>3. Sunday   3rd Sept, 2023  @ 11.30 am</div><div><br></div><div>Members are requested to note the dates and contact the Club Office in order to register their children to get Balloted. </div><div><br></div><div>Ashok Motwani</div><div>CEO / Secretary</div><div><br></div>",
    news_date: "2023-03-21",
    sort_order: "0",
    is_active: "1",
    created_at: "2023-03-27 17:08:25",
    created_by: "1",
    updated_at: "2023-05-17 14:09:30",
    updated_by: "4",
    category_data: [
      {
        news_category_id: "285",
        news_id: "85",
        category_name: "Notice",
        category_id: "31",
      },
    ],
    news_media_data: [],
    share_data: {
      share_title: "Balloting Committee Meetings",
      share_description: "",
      share_image: "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/1685540974.jpeg",
      share_url: "",
    },
  },
  {
    news_id: "85",
    news_title: "Balloting Committee Meetings",
    short_description: "",
    long_description:
      "<div>Dear Members,</div><div><br></div><div>Please note the calendar of the scheduled  upcoming Balloting Committee Meetings for admission of Members Children and Corporates.</div><div><br></div><div>1. Sunday 16th April, 2023 @ 11.30 am</div><div>2. Sunday 16th July, 2023  @ 11.30 am</div><div>3. Sunday   3rd Sept, 2023  @ 11.30 am</div><div><br></div><div>Members are requested to note the dates and contact the Club Office in order to register their children to get Balloted. </div><div><br></div><div>Ashok Motwani</div><div>CEO / Secretary</div><div><br></div>",
    news_date: "2023-03-21",
    sort_order: "0",
    is_active: "1",
    created_at: "2023-03-27 17:08:25",
    created_by: "1",
    updated_at: "2023-05-17 14:09:30",
    updated_by: "4",
    category_data: [
      {
        news_category_id: "285",
        news_id: "85",
        category_name: "Notice",
        category_id: "31",
      },
    ],
    news_media_data: [],
    share_data: {
      share_title: "Balloting Committee Meetings",
      share_description: "",
      share_image: "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/1685540974.jpeg",
      share_url: "",
    },
  },
  {
    news_id: "85",
    news_title: "Balloting Committee Meetings",
    short_description: "",
    long_description:
      "<div>Dear Members,</div><div><br></div><div>Please note the calendar of the scheduled  upcoming Balloting Committee Meetings for admission of Members Children and Corporates.</div><div><br></div><div>1. Sunday 16th April, 2023 @ 11.30 am</div><div>2. Sunday 16th July, 2023  @ 11.30 am</div><div>3. Sunday   3rd Sept, 2023  @ 11.30 am</div><div><br></div><div>Members are requested to note the dates and contact the Club Office in order to register their children to get Balloted. </div><div><br></div><div>Ashok Motwani</div><div>CEO / Secretary</div><div><br></div>",
    news_date: "2023-03-21",
    sort_order: "0",
    is_active: "1",
    created_at: "2023-03-27 17:08:25",
    created_by: "1",
    updated_at: "2023-05-17 14:09:30",
    updated_by: "4",
    category_data: [
      {
        news_category_id: "285",
        news_id: "85",
        category_name: "Notice",
        category_id: "31",
      },
    ],
    news_media_data: [],
    share_data: {
      share_title: "Balloting Committee Meetings",
      share_description: "",
      share_image: "https://ottersclub.s3.ap-south-1.amazonaws.com/stories/1685540974.jpeg",
      share_url: "",
    },
  },
];
const NewsScreen = ({ navigation }: { navigation: any }) => {
  // ============= States ===========
  const [connected, setConnected] = useState(true);

  //Internet Check
  useFocusEffect(
    useCallback(() => {
      const unsubNetState = NetInfo.addEventListener((state: any) => {
        setConnected(state.isConnected);
      });
      return () => {
        unsubNetState();
      };
    }, [])
  );

  //News List RenderItem
  const newsRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.NewsMainContainer}>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.NEWS_DETAIL_SCREEN, {
          data: item,
          id: item.news_id,
          header: item?.category_data[0]?.category_name,
        });
      }}
      >
        <View style={styles.newsContainer}>
          <View style={styles.newsTextContainer}>
            <View style={styles.newsSubContainer} key={index}>
              <Text style={styles.newsHeadText}>
                {item?.category_data[0]?.category_name}
              </Text>
            </View>
            <Text style={styles.shortDesc} numberOfLines={3}>
              {item.news_title}
            </Text>
            <Text style={styles.newsDate}>
              {moment(item.news_date).format("MMMM DD. YYYY")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"News & Notices"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        contentContainerStyle={{
          paddingBottom: scale(60),
          marginTop: scale(10),
        }}
        data={newsRes}
        renderItem={newsRenderItem}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        //   onEndReached={() => pagination()}
        overScrollMode={"never"}
        ListEmptyComponent={
          <View style={styles.emptyMainContainer}>
            <Text style={styles.emptyContainerText}>No News Available</Text>
          </View>
        }
      />
    </Background>
  );
};
export default NewsScreen;
