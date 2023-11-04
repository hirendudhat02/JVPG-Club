import React, { useState, useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { SCREENS } from "../../Utils/ScreenContant";
import { scale } from "../../Utils/Helper/Scalling";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import styles from "./styles";
import { GetOfferListRequest, GetOfferListResponse } from "../../Redux/Actions/GetOfferListAction";

const OfferScreen = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<any>([]);
  const [page, SetPage] = useState(1);
  const offerListRes = useSelector((state: any) => state.OfferList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (offerListRes.data !== null) {
      if (offerListRes?.data?.length > 0) {
        setData([...data, ...offerListRes.data]);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", "1");
        dispatch(GetOfferListRequest(payload));
      });
    }
  }, [offerListRes.data]);
  const pagination = () => {
  if(data?.length>9){
    const payload = new FormData();
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      payload.append("member_id", temp.member_id);
      payload.append("auth_token", temp.auth_token);
      payload.append("start", page + 1);
      dispatch(GetOfferListRequest(payload));
      SetPage(page + 1);
    });
  }
  };
  //Offer RenderItem
  const offerRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.offerMainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.OFFER_DETAIL_SCREEN, {
            data: item,
          });
        }}
      >
        <ImageBackground
          style={styles.gallaryIcon}
          source={{ uri: item.offer_media_data[0].media_file }}
          resizeMode="cover"
          borderRadius={scale(10)}
        >
          <View style={styles.whiteContainer}>
            <Text style={styles.titleText}>{item.offer_title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
  return (
    <Background>
      <Header
        onPress={() =>{
          dispatch(GetOfferListResponse(null));
          navigation.goBack();
        }}
        text={"Offers"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        contentContainerStyle={{
          paddingBottom: scale(55),
          marginTop: scale(35),
        }}
        data={data}
        renderItem={offerRenderItem}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        keyExtractor={(item) => item?.offer_id}
        onEndReached={() => pagination()}
        ListEmptyComponent={
          //  ================ Offer Empty Component ================
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Offers Available</Text>
          </View>
        }
      />
    </Background>
  );
};
export default OfferScreen;
