import React, { useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Alert,
  Image,
  Modal,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGES } from "../../Utils/Images";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { SCREENS } from "../../Utils/ScreenContant";
import { FONTS } from "../../Utils/Fonts";

const data = [
  {
    Bok_Name: "BAD ANGEL BROTHERS",
    Bok_Author: "Theoux, Paul",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "BEST THINGS FIRST",
    Bok_Author: "Lomborg, Bjorn",
    Bok_Category: "Economics",
    Bok_available: "Y",
  },
  {
    Bok_Name: "BLACK RIVER",
    Bok_Author: "Roy, Nilanjana",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "Boparai, Shaminder",
    Bok_Author: "BILLY ARJAN SINGH TIGER OF DUDHWA",
    Bok_Category: "Biography",
    Bok_available: "N",
  },
  {
    Bok_Name: "COMPANY WE KEEP",
    Bok_Author: "Khanna, Divya",
    Bok_Category: "Management",
    Bok_available: "Y",
  },
  {
    Bok_Name: "CONVENANT OF WATER",
    Bok_Author: "Verghese, Abraham",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "CROOKED TIMBER OF NEW INDIA",
    Bok_Author: "Prabhakar, Parakala",
    Bok_Category: "Politics",
    Bok_available: "Y",
  },
  {
    Bok_Name: "DAUGHTERS OF MADURAI",
    Bok_Author: "Variyar, Rajasree",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "FIRRE KEEPERS DAUGHTER",
    Bok_Author: "Boulley, Angeline",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "FOUR WINDS",
    Bok_Author: "Hannah, Kristin",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
  {
    Bok_Name: "GOOD POWER",
    Bok_Author: "Rometty, Ginni",
    Bok_Category: "Biography",
    Bok_available: "Y",
  },
  {
    Bok_Name: "HAPPY PLACE",
    Bok_Author: "Henry, Emily",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "HEALING WITH HOMEOPATHY",
    Bok_Author: "Batra, Mukesh",
    Bok_Category: "Health",
    Bok_available: "Y",
  },
  {
    Bok_Name: "HISTORY OF BURNING",
    Bok_Author: "Oza, Janika",
    Bok_Category: "History",
    Bok_available: "N",
  },
  {
    Bok_Name: "IN PERSUIT OF PEACE",
    Bok_Author: "Lambah, Satinder",
    Bok_Category: "History",
    Bok_available: "Y",
  },
  {
    Bok_Name: "LADDER TO THE SKY",
    Bok_Author: "Boyne, John",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "LADY GUIDE TO FORTUNE HUNTING",
    Bok_Author: "Irwin, Sophie",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "Mehrotra, Shobha",
    Bok_Author: "ROSE IS NO LONGER RED",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "NAME OF THE ROSE",
    Bok_Author: "Eco, Umberto",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "OLDEST LOVE STORY",
    Bok_Author: "Bhattacharya, Rinki",
    Bok_Category: "Collection",
    Bok_available: "Y",
  },
  {
    Bok_Name: "RAINWATER",
    Bok_Author: "Brown, Sandra",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "ROCK PAPER SCISSORS",
    Bok_Author: "Feeney, Alice",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
  {
    Bok_Name: "SOMEONE ELSES SHOES",
    Bok_Author: "Moyes, Jojo",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "SUSPECTS",
    Bok_Author: "Steel, Danielle",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "THEN SHE VANISHES",
    Bok_Author: "Douglas, Claire",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
  {
    Bok_Name: "TIES OF BLOOD",
    Bok_Author: "Kewalramani, Niti",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
  {
    Bok_Name: "TWILIGHT OF DEMOCRACY",
    Bok_Author: "Applebaum, Anne",
    Bok_Category: "Politcs",
    Bok_available: "Y",
  },
  {
    Bok_Name: "UPPERCRUST",
    Bok_Author: "UPPERCRUST",
    Bok_Category: "",
    Bok_available: "Y",
  },
  {
    Bok_Name: "VICTORY CITY",
    Bok_Author: "Rushdie, Salman",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
  {
    Bok_Name: "VLADIMIR",
    Bok_Author: "Jonas, Julia",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "WOMAN WHO CLIMBED TREES",
    Bok_Author: "Ravindra, Smriti",
    Bok_Category: "Fiction",
    Bok_available: "Y",
  },
  {
    Bok_Name: "YELLOWFACE",
    Bok_Author: "Kuang, Rebecca",
    Bok_Category: "Fiction",
    Bok_available: "N",
  },
];

const footerData = [
  {
    id: 1,
    name: "Explore Categories",
    img: IMAGES.VIEW_ARROW,
  },
  {
    id: 2,
    name: "Suggest a Book",
    img: IMAGES.VIEW_ARROW,
  },
  {
    id: 3,
    name: "Book Borrowed",
    img: IMAGES.VIEW_ARROW,
  },
  {
    id: 4,
    name: "My Wishlist",
    img: IMAGES.VIEW_ARROW,
  },
];
const Library = ({ navigation }: { navigation: any }) => {
  const [search, setSearch] = useState<string>("");
  const [suggestBook, setSuggestBook] = useState<boolean>(false);
  const [bookName, setBookName] = useState<string>("");
  const [autherName, setAutherName] = useState<string>("");

  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.arrivalContainer}>
      {/* <View style={styles.arrivalImageContainer} /> */}
      <Image source={require("../../../Assets/Icons/book.png")} style={styles.arrivalImageContainer}/>
      <View style={{ flexDirection: "column", width: scale(110) }}>
        <Text style={styles.arrivalBookname}>{item.Bok_Name}</Text>
        <Text style={styles.arrivalBookAuthor}>by {item.Bok_Author}</Text>
        <View style={styles.arrivalBookCategory}>
          <Text style={styles.arrivalBookCategoryText}>
            {item.Bok_Category}
          </Text>
        </View>
      </View>
    </View>
  );
  const BottomListClick = (id: number) => {
    switch (id) {
      case 1:
        navigation.navigate(SCREENS.EXPLORE_CATEGORIES);

        break;
      case 2:
        setSuggestBook(true);
        break;
      case 3:
        navigation.navigate(SCREENS.BOOK_BORROWED);
        break;
      case 4:
        navigation.navigate(SCREENS.MY_WISHLIST);
        break;
      default:
        break;
    }
  };
  const footerRenderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      style={styles.footerContainer}
      activeOpacity={1}
      onPress={() => BottomListClick(item.id)}
    >
      <Text style={styles.footerText}>{item.name}</Text>
      <Image source={item.img} style={styles.footerImg} resizeMode="contain" />
    </TouchableOpacity>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Library"}
        menuOnPress={() => navigation.openDrawer()}
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>New Arrivals</Text>
        <TouchableOpacity>
          <Image
            source={IMAGES.VIEW_ARROW}
            style={styles.viewArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={{
          alignSelf: "baseline",
          paddingRight: scale(15),
          // marginLeft:scale(5)
        }}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={footerData}
        renderItem={footerRenderItem}
        contentContainerStyle={{ marginBottom: scale(50) }}
      />
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={suggestBook}
        onRequestClose={() => setSuggestBook(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            <View style={styles.subModalContainer2}>
              <View style={styles.closeContainer} />

              <View style={styles.titleContainer}>
                <Text style={styles.titleModalText}>Suggest a Book</Text>
              </View>
              <View style={styles.closeContainer}>
                <TouchableOpacity onPress={() => setSuggestBook(false)}>
                  <Image
                    source={IMAGES.CLOSE}
                    style={styles.closeImg}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bookContainer}>
              <Text style={styles.bookNameText}>Book Name</Text>
              <TextInput
                value={bookName}
                onChangeText={(val: any) => setBookName(val)}
                style={styles.nameInput}
                placeholder="Name of Book"
                placeholderTextColor={COLORS.BLACK}
              />
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.bookNameText}>Author Name</Text>
              <TextInput
                value={autherName}
                onChangeText={(val: any) => setAutherName(val)}
                style={styles.nameInput}
                placeholder="Name of Auther"
                placeholderTextColor={COLORS.BLACK}

              />
            </View>
            <TouchableOpacity
              onPress={() => setSuggestBook(false)}
              style={[styles.submitButton, { marginTop: scale(50) }]}
            >
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
};
export default Library;
