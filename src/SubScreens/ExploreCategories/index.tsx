import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { FONTS } from "../../Utils/Fonts";
import { IMAGES } from "../../Utils/Images";
import { SCREENS } from "../../Utils/ScreenContant";

const data = [
  {
    category: "641",
    noofbooks: "1",
  },
  {
    category: "920",
    noofbooks: "1",
  },
  {
    category: "Administration",
    noofbooks: "2",
  },
  {
    category: "Anthropology",
    noofbooks: "1",
  },
  {
    category: "Applied Science",
    noofbooks: "2",
  },
  {
    category: "Architecture",
    noofbooks: "15",
  },
  {
    category: "Art",
    noofbooks: "16",
  },
  {
    category: "Asian History",
    noofbooks: "1",
  },
  {
    category: "Astrology",
    noofbooks: "6",
  },
  {
    category: "Autobiography",
    noofbooks: "18",
  },
  {
    category: "Biography",
    noofbooks: "334",
  },
  {
    category: "Biology",
    noofbooks: "1",
  },
  {
    category: "Botany",
    noofbooks: "2",
  },
  {
    category: "Bridge",
    noofbooks: "9",
  },
  {
    category: "Cars",
    noofbooks: "1",
  },
  {
    category: "Cartoons",
    noofbooks: "2",
  },
  {
    category: "Chemistry",
    noofbooks: "1",
  },
  {
    category: "Child Care",
    noofbooks: "1",
  },
  {
    category: "Child Rearing",
    noofbooks: "1",
  },
  {
    category: "Cinema",
    noofbooks: "2",
  },
  {
    category: "Clothing",
    noofbooks: "1",
  },
  {
    category: "Co-Operatives",
    noofbooks: "1",
  },
  {
    category: "Collection",
    noofbooks: "60",
  },
  {
    category: "Comman",
    noofbooks: "1",
  },
  {
    category: "Cookery",
    noofbooks: "126",
  },
  {
    category: "Costume",
    noofbooks: "1",
  },
  {
    category: "Culture",
    noofbooks: "4",
  },
  {
    category: "Customs",
    noofbooks: "4",
  },
  {
    category: "Decoration",
    noofbooks: "1",
  },
  {
    category: "Decorative Arts",
    noofbooks: "1",
  },
  {
    category: "Dictionary",
    noofbooks: "1",
  },
  {
    category: "Drawing",
    noofbooks: "5",
  },
  {
    category: "Earth Science",
    noofbooks: "7",
  },
  {
    category: "Ecology",
    noofbooks: "1",
  },
  {
    category: "Economics",
    noofbooks: "24",
  },
  {
    category: "Education",
    noofbooks: "2",
  },
  {
    category: "Encyclopedia",
    noofbooks: "9",
  },
  {
    category: "English Literature",
    noofbooks: "32",
  },
  {
    category: "Fiction",
    noofbooks: "1786",
  },
  {
    category: "General Knowledge",
    noofbooks: "6",
  },
  {
    category: "Glass",
    noofbooks: "1",
  },
  {
    category: "Health",
    noofbooks: "28",
  },
  {
    category: "History",
    noofbooks: "207",
  },
  {
    category: "Home Economic",
    noofbooks: "2",
  },
  {
    category: "Human Physiology",
    noofbooks: "1",
  },
  {
    category: "Information Technology",
    noofbooks: "4",
  },
  {
    category: "IT",
    noofbooks: "2",
  },
  {
    category: "Journalism",
    noofbooks: "1",
  },
  {
    category: "Law",
    noofbooks: "10",
  },
  {
    category: "LIFE",
    noofbooks: "1",
  },
  {
    category: "Life Science",
    noofbooks: "4",
  },
  {
    category: "Lifestyle",
    noofbooks: "2",
  },
  {
    category: "Literature",
    noofbooks: "11",
  },
  {
    category: "MAGAZINE",
    noofbooks: "4",
  },
  {
    category: "MAGZ",
    noofbooks: "2",
  },
  {
    category: "MAGZINE",
    noofbooks: "39",
  },
  {
    category: "Management",
    noofbooks: "63",
  },
  {
    category: "Mathematics",
    noofbooks: "1",
  },
  {
    category: "Medicine",
    noofbooks: "52",
  },
  {
    category: "Museums",
    noofbooks: "3",
  },
  {
    category: "Music",
    noofbooks: "3",
  },
  {
    category: "News Paper",
    noofbooks: "5",
  },
  {
    category: "NEWSPAPER",
    noofbooks: "1",
  },
  {
    category: "NIL",
    noofbooks: "2",
  },
  {
    category: "Occultism",
    noofbooks: "1",
  },
  {
    category: "Painting",
    noofbooks: "17",
  },
  {
    category: "Parenting",
    noofbooks: "2",
  },
  {
    category: "Personal Living",
    noofbooks: "1",
  },
  {
    category: "Philosophy",
    noofbooks: "14",
  },
  {
    category: "Photo Biography",
    noofbooks: "10",
  },
  {
    category: "Photography",
    noofbooks: "4",
  },
  {
    category: "Physics",
    noofbooks: "1",
  },
  {
    category: "Physiology",
    noofbooks: "1",
  },
  {
    category: "Politcs",
    noofbooks: "1",
  },
  {
    category: "Political Science",
    noofbooks: "4",
  },
  {
    category: "Politics",
    noofbooks: "2",
  },
  {
    category: "Psychology",
    noofbooks: "106",
  },
  {
    category: "Public Administration",
    noofbooks: "1",
  },
  {
    category: "Religion",
    noofbooks: "16",
  },
  {
    category: "Science",
    noofbooks: "8",
  },
  {
    category: "Short Stories",
    noofbooks: "2",
  },
  {
    category: "Social Science",
    noofbooks: "20",
  },
  {
    category: "Social Service",
    noofbooks: "1",
  },
  {
    category: "Sport",
    noofbooks: "5",
  },
  {
    category: "Technology",
    noofbooks: "4",
  },
  {
    category: "Trade",
    noofbooks: "1",
  },
  {
    category: "Travel",
    noofbooks: "87",
  },
  {
    category: "Zoology",
    noofbooks: "8",
  },
];
const ExploreCategories = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      style={styles.renderContainer}
      onPress={() => navigation.navigate(SCREENS.LIBRARY_BOOK_LIST)}
    >
      <View style={{ flex: 5 }}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.bookText}>
          {"(" + item.noofbooks + " " + "Books" + ")"}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={IMAGES.VIEW_ARROW}
          style={styles.viewArrow}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Categories"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: scale(10) }}
      />
    </Background>
  );
};
export default ExploreCategories;
