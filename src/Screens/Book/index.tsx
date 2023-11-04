import React, { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import { COLORS } from "../../Utils/Colors";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { IMAGES } from "../../Utils/Images";
import { scale } from "../../Utils/Helper/Scalling";
import FastImage from "react-native-fast-image";
import { SCREENS } from "../../Utils/ScreenContant";
import { useFocusEffect } from "@react-navigation/native";

const Book = ({ navigation, route }: { navigation: any; route: any }) => {
  const [makeBooking, setMakeBooking] = useState<number>(1);
  const BookingData = [
    { id: 1, name: "Squash", image: IMAGES.SQUASH },
    { id: 2, name: "Massage", image: IMAGES.MASSAGE },
    {
      id: 3,
      name: "Badminton",
      image: IMAGES.BADMINTON,
    },
    { id: 4, name: "Lawn Tennis", image: IMAGES.LAWN_TENNIS },
    { id: 5, name: "Event Booking", image: IMAGES.EVENT_IMG },
    { id: 6, name: "Banquet Booking", image: IMAGES.BANQUET },
  ];
  console.log("route.params.book ::", route?.params?.book);
  useFocusEffect(
    useCallback(() => {
      if (global.tabdata === true) {
        setMakeBooking(0);
      } else {
        setMakeBooking(1);
      }
    }, [])
  );

  const listOnPress = (item: any, index: any) => {
    if (index == 0) {
      navigation.navigate(SCREENS.SQUASH);
    } else if (index == 1) {
      navigation.navigate(SCREENS.MASSAGE_SCREEN);
    } else if (index == 2) {
      Alert.alert(item.name);
    } else if (index == 3) {
      Alert.alert(item.name);
    } else if (index == 4) {
      navigation.navigate(SCREENS.EVENTS);
    } else if (index == 5) {
      navigation.navigate(SCREENS.BANQUET);
    } else {
      null;
    }
  };
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View>
      <TouchableOpacity onPress={() => listOnPress(item, index)}>
        <View style={[styles.flatListMaincontainer, { marginHorizontal: scale(7) }]}>
          <FastImage
            style={styles.eventView}
            source={item.image}
            resizeMode="cover"
          />

          <Text style={styles.eventTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <Background>
      {makeBooking === 1 ? (
        <Header
          onPress={() => navigation.goBack()}
          text={"Booking"}
          menuOnPress={() => navigation.openDrawer()}
        />
      ) : (
        <Header
          onPress={() => navigation.goBack()}
          text={"Booking"}
          menuOnPress={() => navigation.openDrawer()}
        />
        // <View style={styles.viewBookingContainer}>
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Image
        //       source={IMAGES.BACK_ICON}
        //       style={styles.nextBackIcon}
        //       resizeMode="contain"
        //     />
        //   </TouchableOpacity>

        //   <Text style={styles.viewBookingTextheading}>Booking</Text>
        //   <TouchableOpacity style={{ marginLeft: scale(20) }}>
        //     <Image
        //       source={IMAGES.PAST_BOOKING}
        //       style={styles.nextBackIcon}
        //       resizeMode="contain"
        //     />
        //   </TouchableOpacity>
        //   <TouchableOpacity>
        //     <Image
        //       source={IMAGES.REFRESH}
        //       style={styles.nextBackIcon}
        //       resizeMode="contain"
        //     />
        //   </TouchableOpacity>
        // </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSubContainer}
          onPress={() => {
            setMakeBooking(0);
          }}
        >
          <Text style={styles.buttonText}>View Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSubContainer}
          onPress={() => {
            setMakeBooking(1);
          }}
        >
          <Text style={styles.buttonText}>Make Booking</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.barStyle,
            {
              backgroundColor: makeBooking === 0 ? COLORS.WHITE : COLORS.BLACK,
              marginRight: makeBooking === 0 ? scale(10) : scale(0),
            },
          ]}
        />
        <View
          style={[
            styles.barStyle,
            {
              backgroundColor: makeBooking === 1 ? COLORS.WHITE : COLORS.BLACK,
              marginLeft: makeBooking === 1 ? scale(10) : scale(0),
            },
          ]}
        />
      </View>
      {makeBooking === 1 ? (
        <FlatList
          data={BookingData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={styles.contentContainer}
          keyExtractor={(item: any, index: any) => index.toString()}
          overScrollMode={"never"}
          contentContainerStyle={{ paddingBottom: scale(17),}}
        />
      ) : null}
    </Background>
  );
};
export default Book;
