import React, { useState, useEffect } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../../Utils/Images";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import {
  GetBookWishlistRequest,
  GetBookWishlistResponse,
} from "../../Redux/Actions/GetBookWishlist";
import ConformAlert from "../../Component/ConformAlert";
import ApiConstants from "../../Redux/Services/ApiConstants";
const MyWishlist = ({ navigation }: { navigation: any }) => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [page, SetPage] = useState(1);
  const bookWishListRes = useSelector((state: any) => state.BookWishList);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookWishListRes.data !== null) {
      if (bookWishListRes?.data?.length > 0) {
        setData(bookWishListRes?.data);
      }else{
        setData([]);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", "1");
        dispatch(GetBookWishlistRequest(payload));
      });
    }
  }, [bookWishListRes.data]);
  const removeWishItem = (id: any) => {
    setDeleteItemId(id);
    setOpenModal(true);
  };
  const handleYes = () => {
    if (deleteItemId !== null) {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("book_wishlist_id", deleteItemId);
        fetch(`${ApiConstants.BASE_URL}/deleteBookWishlist`, {
          method: "POST",
          body: payload,
        })
          .then((response) => response.json())
          .then(() => {
            dispatch(GetBookWishlistResponse(null));
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }

    setOpenModal(false);
  };
  const pagination = () => {
    if(data?.length>9){
    const payload = new FormData();
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", "1");
        dispatch(GetBookWishlistRequest(payload));
      SetPage(page + 1);
    });
  }
};
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.renderContainer}>
      <View style={{ flex: 6 }}>
        <Text style={styles.collectionText}>{item.book_collection}</Text>
        <Text style={styles.bookName}>{item.book_name}</Text>
        <Text style={styles.bookAuthor}>{item.book_author}</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={
            item.book_status === "Yes"
              ? IMAGES.BOOK_AVAILABLE
              : IMAGES.BOOK_BORROWED
          }
          style={{ height: scale(30), width: scale(30) }}
        />
        <Text
          style={[
            styles.allowedBookText,
            { color: item.book_status === "Yes" ? "#7cd254" : "#f4a43a" },
          ]}
        >
          {item.book_status === "Yes" ? "Book Available" : "Book Borrowed"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 2, alignItems: "center" }}
        onPress={() => removeWishItem(item?.book_wishlist_id)}
      >
        <Image
          source={IMAGES.WISHLIST}
          style={{ height: scale(30), width: scale(30) }}
        />
        <Text style={styles.wishlistText}>Remove Wishlist</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Background>
      <Header
        onPress={() => {
          dispatch(GetBookWishlistResponse(null));
          navigation.goBack();
        }}
        text={"Wishlist"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <ConformAlert
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        message="Do you want to delete this book wish ?"
        handleYes={() => handleYes()}
      />
      <View style={styles.searchContainer}>
        <Image source={IMAGES.SEARCH} style={styles.searchIcon} />
        <TextInput
          value={search}
          onChangeText={(val: any) => setSearch(val)}
          placeholder="Search by Book Name, Category"
          placeholderTextColor={COLORS.MEDIUM_GREY}
          style={styles.searchInputContainer}
        />
      </View>
      <View style={{ marginHorizontal: scale(15) }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item?.book_wishlist_id}
          onEndReached={() => pagination()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: scale(140),
            marginTop: scale(10),
          }}
        />
      </View>
    </Background>
  );
};
export default MyWishlist;
