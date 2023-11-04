import Background from "../../Component/Background";
import Header from "../../Component/Header";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Image,
  Alert,
} from "react-native";
import { Favourite } from "../../Utils/Array";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import { SCREENS } from "../../Utils/ScreenContant";
import { IMAGES } from "../../Utils/Images";

const FavouriteScreen = ({ navigation }: { navigation: any }) => {
  //States
  const [fav, setFav] = useState<any[]>(Favourite);
  const [error, setError] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  //Favourite Item Check
  useEffect(() => {
    let Data: any[] = fav;

    AsyncStorage.getItem(KEY.FAVOURITE).then((val: any) => {
      let temp: any[] = JSON.parse(val);

      if (temp !== null) {
        temp.map((item: any) => {
          Favourite.map((Dataitem, index) => {
            if (item.activity === Dataitem.activity) {
              Favourite[index].isSelected = true;
            }
          });
        });
      }
      setFav([...Data]);
    });
  }, []);
  //Check Multiple Favourite Item
  const CheckedBox = (item: any, index: any) => {
    var temp: any[] = fav;

    var count: number = 0;

    Favourite.map((item, index) => {
      if (item.isSelected) {
        count = count + 1;
      }
    });

    if (count < 6) {
      if (temp[index].isSelected) {
        temp[index].isSelected = false;
      } else {
        temp[index].isSelected = true;
      }
    } else {
      temp[index].isSelected = false;
    }

    setFav([...temp]);
  };
  //Favourite RenderItem
  const renderItem = ({ item, index }: { item: any; index: any }) =>
    userId.length > 6 ? (
      item.activity == "Unbilled Amount" ? null : item.activity ==
        "Payment History" ? null : item.activity ==
        "Past Bills" ? null : item.activity == "Bill Payment" ? null : (
        <View style={styles.FlatContainer}>
          <View style={styles.itemNameView}>
            <Text style={styles.nameText}>{item.activity}</Text>
          </View>
          <TouchableOpacity onPress={() => CheckedBox(item, index)}>
            <Image
              source={item.isSelected ? IMAGES.WRITE : IMAGES.PLUS}
              style={styles.plusButton}
            />
          </TouchableOpacity>
        </View>
      )
    ) : (
      <View style={styles.FlatContainer}>
        <View style={styles.itemNameView}>
          <Text style={styles.nameText}>{item.activity}</Text>
        </View>
        <TouchableOpacity onPress={() => CheckedBox(item, index)}>
          <Image
            source={item.isSelected ? IMAGES.WRITE : IMAGES.PLUS}
            style={styles.plusButton}
          />
        </TouchableOpacity>
      </View>
    );

  //Favourite Handle Submit
  const handleSubmit = () => {
    var saveData: any[] = [];
    var temp: any[] = fav;

    temp.map((item: any) => {
      if (item.isSelected) {
        saveData.push(item);
      }
    });
    if (saveData.length == 0) {
      Alert.alert("Please Select Item");
    } else {
      navigation.navigate(SCREENS.HOME);
      AsyncStorage.setItem(KEY.FAVOURITE, JSON.stringify(saveData));
    }
  };
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Favorites"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={fav}
        renderItem={renderItem}
        scrollEnabled={true}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        ListHeaderComponent={
          <Text style={styles.headText}>
            Tick Mark the box below to add section to your favourite in home
            page.You can add max 6 sections shortcurt
          </Text>
        }
      />
      <View style={styles.subContainer}>
        <View style={styles.submitContainer}>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.submitButton}
          >
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};
export default FavouriteScreen;
