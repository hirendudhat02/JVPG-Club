import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { IMAGES } from "../../Utils/Images";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "react-native";
import { FONTS } from "../../Utils/Fonts";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";

const data = [
  {
    id: 1,
    img: IMAGES.BANQUET1,
    title: "Banquet A",
    vnCode: "01",
    desc: "The perfect Banquet room for holding small conference, business meets and children parties.The Banquet room can accommodate up to 40 pax.",
    charges: [
      {
        Available_On: "30 to 40 Pax",
        img: require("../../../Assets/Banquet/Capacity.png"),
      },
      {
        Available_On: "Mon to Sun",
        img: require("../../../Assets/Banquet/Availibility.png"),
      },
      {
        Available_On: "8,850/-",
        img: require("../../../Assets/Banquet/Cost.png"),
      },
    ],
  },
  {
    id: 2,
    img: IMAGES.BANQUET2,
    title: "Banquet B",
    desc: "The pavillion can accommodate between 150 to 175 pax. Members can book this Banquet room for their personal get-together and parties.It has one of the best views of the Arabian Ocean.",
    vnCode: "02",
    charges: [
      {
        Available_On: "70 to 80 Pax",
        img: require("../../../Assets/Banquet/Capacity.png"),
      },
      {
        Available_On: "Mon to Sun",
        img: require("../../../Assets/Banquet/Availibility.png"),
      },
      {
        Available_On: "35,400/-",
        img: require("../../../Assets/Banquet/Cost.png"),
      },
    ],
  },
  {
    id: 3,
    img: IMAGES.BANQUET3,
    title: "Banquet C",
    desc: "Bar 72 - a space with timeless character, made comfortable with contemporary design overlooking the coconut palms swaying into the Arabian Sea.",
    vnCode: "05",
    charges: [
      {
        Available_On: "20 to 25 Pax",
        img: require("../../../Assets/Banquet/Capacity.png"),
      },
      {
        Available_On: "Mon to Thu",
        day: "Fri to Sun",

        img: require("../../../Assets/Banquet/Availibility.png"),
      },
      {
        Available_On: "11800/- including tax",
        img: require("../../../Assets/Banquet/Cost.png"),
      },
    ],
  },
  {
    id: 4,
    img: IMAGES.BANQUET4,
    title: "Banquet D",
    desc: "An excellent place for business meetings, parties and small gatherings with family and friends.",
    vnCode: "06",
    charges: [
      {
        Available_On: "40 to 50 Pax",
        img: require("../../../Assets/Banquet/Capacity.png"),
      },
      {
        Available_On: "Mon to Fri",
        img: require("../../../Assets/Banquet/Availibility.png"),
      },
      {
        Available_On: "17,700/-",
        img: require("../../../Assets/Banquet/Cost.png"),
      },
    ],
  },
];

const Banquet = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.BANQUET_BOOKING,{data:item})}
      style={styles.renderButtonContainer}
    >
      <ImageBackground
        source={item.img}
        style={styles.image}
        borderRadius={scale(10)}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 2 }}
          end={{ x: 0, y: 0 }}
          colors={[COLORS.BLACK, "transparent"]}
          style={styles.linearContainer}
        >
          <Text style={styles.titleText}>{item.title}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Banquet"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ marginHorizontal: scale(10),marginTop:scale(35) }}
      />
    </Background>
  );
};
export default Banquet;
