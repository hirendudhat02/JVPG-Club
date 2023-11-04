import React, { useState } from "react";
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
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
const data = [
  {
    book_wishlist_id: "43",
    book_id: "undefined",
    book_name: "CHICKEN COOK BOOK",
    book_author: "Sing, Uday",
    book_collection: "641",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-02-20 15:54:11",
    created_by: "0",
    updated_at: "2023-02-20 15:54:11",
    updated_by: "0",
    book_status: "No",
  },
  {
    book_wishlist_id: "44",
    book_id: "undefined",
    book_name: "ASSEGAI",
    book_author: "Smith,  Wilbur",
    book_collection: "Fiction",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-02-27 16:23:08",
    created_by: "0",
    updated_at: "2023-04-19 12:45:21",
    updated_by: "0",
    book_status: "Yes",
  },
  {
    book_wishlist_id: "46",
    book_id: "undefined",
    book_name: "AFTERNESS HOME AND AWAY",
    book_author: "GANGULY, ASHOK",
    book_collection: "Biography",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-03-06 10:40:54",
    created_by: "0",
    updated_at: "2023-03-22 16:13:52",
    updated_by: "0",
    book_status: "No",
  },
  {
    book_wishlist_id: "47",
    book_id: "undefined",
    book_name: "BEFORE YOU KNEW MY NAME",
    book_author: "Bublitz, Jacqueline",
    book_collection: "Fiction",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-03-06 11:14:29",
    created_by: "0",
    updated_at: "2023-03-06 11:14:29",
    updated_by: "0",
    book_status: "No",
  },
  {
    book_wishlist_id: "49",
    book_id: "undefined",
    book_name: "MURDER IN MESOPOTAMIA",
    book_author: "Christie, Agatha",
    book_collection: "Fition",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-03-06 12:53:27",
    created_by: "0",
    updated_at: "2023-03-06 12:53:27",
    updated_by: "0",
    book_status: "Yes",
  },
  {
    book_wishlist_id: "51",
    book_id: "undefined",
    book_name: "GROWING  CLASSIC  BONSAI",
    book_author: "Owens, Gordon [Ref]",
    book_collection: "Botany",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-03-06 13:47:13",
    created_by: "0",
    updated_at: "2023-03-06 13:47:13",
    updated_by: "0",
    book_status: "Yes",
  },
  {
    book_wishlist_id: "64",
    book_id: "undefined",
    book_name: "DEFENDING  INDIA",
    book_author: "Singh, Jaswant",
    book_collection: "Administration",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-03-22 12:49:00",
    created_by: "0",
    updated_at: "2023-03-22 14:00:48",
    updated_by: "0",
    book_status: "Yes",
  },
  {
    book_wishlist_id: "113",
    book_id: "undefined",
    book_name: "ART  OF  SOUTHEAST  ASIA",
    book_author: "Girard, Geslan [Ref]",
    book_collection: "Architecture",
    member_id: "K0038400",
    book_image_url: "",
    is_wishlist: "1",
    created_at: "2023-05-03 15:51:23",
    created_by: "0",
    updated_at: "2023-05-03 15:51:23",
    updated_by: "0",
    book_status: "Yes",
  },
];
const LibraryBookList = ({ navigation }: { navigation: any }) => {
  const [search, setSearch] = useState<string>("");

  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.renderContainer}>
      <View style={{ flex: 5 }}>
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
      <TouchableOpacity style={{ flex: 2, alignItems: "center" }}>
        <Image
          source={IMAGES.WISHLIST}
          style={{ height: scale(30), width: scale(30) }}
        />
        <Text style={styles.wishlistText}>Add to Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Book List"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <View style={styles.searchContainer}>
        <Image source={IMAGES.SEARCH} style={styles.searchIcon} />
        <TextInput
          value={search}
          onChangeText={(val: any) => setSearch(val)}
          placeholder="Search by Book Name, Category"
          placeholderTextColor={COLORS.WHITE}
          style={styles.searchInputContainer}
        />
      </View>
      <View style={{ marginHorizontal: scale(25) }}>
        <FlatList
          data={data}
          renderItem={renderItem}
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
export default LibraryBookList;
