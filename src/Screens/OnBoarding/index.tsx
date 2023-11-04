import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { IMAGES } from "../../Utils/Images";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";
import { SCREENS } from "../../Utils/ScreenContant";
import Loader from "../../Component/Loader";

const Data = [
  {
    id: 1,
    img: IMAGES.ONBOARDING1,
    title: "Seamless Billing Experience",
    subTitle:
      "View your daily KOTs, pay your bills, and link other membership accounts you want to pay for, plus many more features.",
  },
  {
    id: 2,
    img: IMAGES.ONBOARDING2,
    title: "Quick And Easy Booking",
    subTitle: "Book activities, events and games from anywhere",
  },
  {
    id: 3,
    img: IMAGES.ONBOARDING3,
    title: "No Entry Card? No Worries!",
    subTitle:
      "Use your unique QR code to enter the club, sign in for guests, and pay for orders",
  },
];
const OnBoarding = ({ navigation }: { navigation: any }) => {
  // ----- States -----
  const [data, setData] = useState<any[]>(Data);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // ----- Variables -----
  const ref = React.useRef<any>();
  const { height, width } = Dimensions.get("screen");

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // ----- Next Slides -----
  const _goNextSlide = (index: any) => {
    if (index !== Data.length - 1) {
      const nextSlideIndex = index + 1;
      const offset = nextSlideIndex * width;
      setCurrentSlideIndex(nextSlideIndex);
      ref?.current?.scrollToOffset({ offset, animated: true });
    } else if (currentSlideIndex - 1 === Data.length) {
      const nextSlideIndex = currentSlideIndex - 1;
      const offset = nextSlideIndex * width;
      setCurrentSlideIndex(nextSlideIndex);
      ref?.current?.scrollToOffset({ offset, animated: true });
    } else if (
      index === Data.length - 1 ||
      currentSlideIndex === Data.length - 1
    ) {
      AsyncStorage.setItem(KEY.INTRO, JSON.stringify({ hasOnboarded: true }));
      navigation.replace(SCREENS.LOGIN);
    }
  };

  // ----- Update Active Slide -----
  const _updateActiveSlide = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  // ----- Loader -----

  const onloading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  // ----- Render Item -----
  const OnBoardingRenderItem = ({ item, index }: { item: any; index: any }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 9 }}>
          <ImageBackground
            source={item.img}
            style={styles.imageContainer}
            onLoadEnd={() => onloading()}
            // resizeMode="contain"
          >
            <View style={{ marginBottom: scale(60) }}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            // paddingVertical:scale(15),
            flex: 1,
            paddingBottom: scale(25),
          }}
        >
          <View style={styles.dotMainContainer}>
            <View style={styles.dotContainer}>
              {Data.map((_, mapIndex) => (
                <View
                  key={mapIndex}
                  style={[
                    styles.dotStyle,
                    {
                      width: currentSlideIndex === mapIndex ? 25 : 6,
                      marginHorizontal: currentSlideIndex === mapIndex ? 3 : 3,
                      backgroundColor:
                        currentSlideIndex === mapIndex
                          ? COLORS.WHITE
                          : COLORS.BLACK,
                    },
                  ]}
                />
              ))}
            </View>
            <TouchableOpacity
              onPress={() => _goNextSlide(index)}
              style={styles.backContainer}
            >
              <Image
                source={IMAGES.NEXT_ARROW}
                style={styles.nextArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Loader value={loading} />
      <FlatList
        ref={ref}
        data={data}
        overScrollMode={"never"}
        renderItem={({ item, index }: { item: any; index: any }) => {
          return <OnBoardingRenderItem item={item} index={index} key={index} />;
        }}
        horizontal
        removeClippedSubviews={false}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={_updateActiveSlide}
        nestedScrollEnabled
      />
    </SafeAreaView>
  );
};
export default OnBoarding;
