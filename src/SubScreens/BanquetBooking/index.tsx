import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";
import LinearGradient from "react-native-linear-gradient";
import { FONTS } from "../../Utils/Fonts";
import { IMAGES } from "../../Utils/Images";
import { Calendar } from "../../Component/react-native-calendars";
import moment from "moment";
import { SCREENS } from "../../Utils/ScreenContant";
import Button from "../../Component/Button";

const BanquetBooking = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [data, setData] = useState<any>([]);
  const [bookModal, setBookModal] = useState<boolean>(false);
  const [timeOpen, setTimeOpen] = useState<boolean>(false);
  const time = [
    {
      id: 1,
      date: "Artizans",
      time: "8:00 am to 1:00 pm",
      selected: false,
    },
    {
      id: 2,
      date: "Artizans",
      time: "5:00 am to 9:00 pm",
      selected: false,
    },
    {
      id: 3,
      date: "Artizans",
      time: "8:00 am to 1:00 pm",
      selected: false,
    },
    {
      id: 4,
      date: "Artizans",
      time: "5:00 am to 9:00 pm",
      selected: false,
    },
  ];
  const [timeData, setTimeData] = useState(time);

  useEffect(() => {
    console.log("route.params.data ::", route.params.data);
    setData(route.params.data);
  }, []);

  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View
      style={[
        styles.renderContainer,
        { marginLeft: index === 0 ? scale(9) : scale(12) },
      ]}
    >
      <View style={{ flex: 2 }}>
        <Image source={item.img} style={styles.renderImage} />
      </View>
      <View
        style={{
          flex: scale(8),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.renderAvailableOn,
            { marginTop: index === 2 ? scale(10) : scale(5) },
          ]}
        >
          {item.Available_On}
        </Text>
      </View>
    </View>
  );
  const green = {
    key: "walking",
    color: COLORS.LIGHT_GREEN,
    Background: COLORS.GREEN,
  };
  const red = { key: "walking", color: COLORS.WHITE, Background: COLORS.RED };

  const markedDay = {
    "2023-08-01": {
      marked: true,
      dots: [green],
      Background: [green],
      selected: true,
      selectedColor: COLORS.WHITE_GRREN,
    },
    "2023-07-22": {
      marked: true,
      dots: [green],
      Background: [green],
      selected: true,
      selectedColor: COLORS.WHITE_GRREN,
    },
    "2023-07-25": {
      marked: true,
      dots: [green],
      Background: [green],
      selected: true,
      selectedColor: COLORS.WHITE_GRREN,
    },
    "2023-08-25": {
      marked: true,
      dots: [red],
      Background: [green],
      selected: true,
      selectedColor: COLORS.DARK_RED,
    },
    "2023-07-20": {
      marked: true,
      dots: [red],
      Background: [green],
      selected: true,
      selectedColor: COLORS.DARK_RED,
    },
    "2023-07-21": {
      marked: true,
      dots: [red],
      Background: [green],
      selected: true,
      selectedColor: COLORS.DARK_RED,
    },
  };

  //Book Banquet Api Call
  const onStartChange = (day: any) => {
    console.log("Day ::", day);
    setTimeOpen(true);
  };

  const buttonOnPress = (item: any, index: any) => {
    let temp: any[] = timeData;

    if (temp[index].selected) {
      temp[index].selected = false;
    } else {
      temp[index].selected = true;
    }

    setTimeData([...temp]);
  };

  const timeRenderItem = ({ item, index }: { item: any; index: any }) => (
    console.log("item ::", item),
    (
      <View style={styles.timeRenderContainer}>
        <View>
          <Text style={styles.timeRenderTitle}>{item.date}</Text>
          <Text style={styles.timeRenderTime}>{item.time}</Text>
        </View>
        <TouchableOpacity onPress={() => buttonOnPress(item, index)}>
          <Image
            source={item.selected ? IMAGES.WRITE : IMAGES.BLANK_BOX}
            style={styles.writeIcon}
          />
        </TouchableOpacity>
      </View>
    )
  );
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Banquet"}
          menuOnPress={() => navigation.openDrawer()}
        />
        {/* <View style={styles.middleContainer}> */}
        <ImageBackground
          style={styles.imageContainer}
          borderRadius={scale(20)}
          source={data.img}
        >
          <LinearGradient
            start={{ x: 0, y: 1.3 }}
            end={{ x: 0, y: 0 }}
            colors={[COLORS.BLACK, "transparent"]}
            style={styles.linearView}
          >
            <Text style={styles.eventTitle}>{data?.title}</Text>
          </LinearGradient>
        </ImageBackground>

        <FlatList
          data={data.charges}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{
            marginTop: scale(30),
            marginHorizontal: scale(10),
          }}
        />
        <Text style={styles.aboutText}>About Banquet</Text>
        <Text style={styles.descText}>{data.desc}</Text>
        {/* </View> */}
      </ScrollView>

      <View style={styles.footerContainer}>
        <Button text="Book Banquet" onPress={() => setBookModal(true)} />
      </View>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={bookModal}
        onRequestClose={() => setBookModal(false)}
      >
        <View style={styles.modalContainer}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.BACKGROUND_COLOR}
            barStyle="light-content"
          />
          <View style={styles.subModalContainer}>
            {timeOpen ? (
              <>
                <View style={styles.subModalContainer2}>
                  <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setTimeOpen(false)}>
                      <Image
                        source={IMAGES.BACK_ICON}
                        style={styles.backImg}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleModalText}>Select Time</Text>
                  </View>
                  <View style={styles.closeContainer}/>
                </View>
                <Text style={styles.modalDesText}>
                  Below time slots are available for day. Select your preferred
                  time slots. you can select, one or multiple time slots for
                  whole day booking.
                </Text>
                <FlatList
                  data={timeData}
                  renderItem={timeRenderItem}
                  contentContainerStyle={{ marginTop: scale(10) }}
                />
                <TouchableOpacity
                  style={[
                    styles.makePaymentModalButton,
                    { marginTop: scale(90) },
                  ]}
                  onPress={() => {
                    setBookModal(false);
                    setTimeOpen(false);
                    navigation.navigate(SCREENS.BOOKING_DETAIL, {
                      data: "banquet",
                    });
                  }}
                >
                  <Text style={styles.bookButton}>Submit</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.subModalContainer2}>
                <View style={styles.closeContainer}/>
                  <View style={styles.titleContainer}>
                    <Text style={styles.slectDatetitleModalText}>
                      Book Banquet
                    </Text>
                  </View>
                  <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setBookModal(false)}>
                      <Image
                        source={IMAGES.CLOSE}
                        style={styles.closeImg}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.prefferDate}>
                  Select Your Preferred Date
                </Text>
                <View style={styles.colorContainer}>
                  <View style={styles.borderContainer}>
                    <View style={styles.colorModalContainer} />
                  </View>
                  <Text style={styles.desText}>
                    Time slot available for booking
                  </Text>
                </View>
                <View style={styles.colorContainer}>
                  <View style={styles.borderContainer}>
                    <View style={styles.colorRedModalContainer} />
                  </View>
                  <Text style={styles.desText}>All time slots are booked</Text>
                </View>
                {/* ================= Calender ==================== */}
                <Calendar
                    firstDay={1}
                    date={new Date()}
                    markingType="multi-dot"
                    markedDates={markedDay}
                    minDate={moment().toDate()}
                    disableMonthChange={false}
                    disableAllTouchEventsForDisabledDays={true}
                    onDayChange={(day:any) => {}}
                    onDayPress={(day) => onStartChange(day)}
                   
                    onMonthChange={(month) => {}}
                    numberOfDays={31}
                    style={{
                      borderRadius: 5,
                      margin: 10,
                      marginLeft:scale(20)
                    }}
                    theme={{
                      backgroundColor: "#ffffff",
                      calendarBackground: "#ffffff",
                      textDayFontWeight: "400",
                      textMonthFontWeight: "bold",
                      textDayHeaderFontWeight: "500",
                      arrowColor: "#2E4D85",
                      monthTextColor: "#2E4D85",
                      dayTextColor: "#222222",
                      
                    }}
                    
                    enableSwipeMonths={true}
                  />
               
              </>
            )}
          </View>
        </View>
      </Modal>
    </Background>
  );
};
export default BanquetBooking;
