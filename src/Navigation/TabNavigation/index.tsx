import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale } from "../../Utils/Helper/Scalling";
import { Image, Platform, StyleSheet, View, Text } from "react-native";
import { IMAGES } from "../../Utils/Images";
import { COLORS } from "../../Utils/Colors";
import { SCREENS } from "../../Utils/ScreenContant";
import Updates from "../../Screens/Updates";
import QrCode from "../../Screens/QRCode";
import Book from "../../Screens/Book";
import Billing from "../../Screens/Billing";
import Dashboard from "../../Screens/Dashboard";
import { FONTS } from "../../Utils/Fonts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../Screens/ProfileScreen";
import RegisterGuest from "../../SubScreens/RegisterGuest";
import ViewQr from "../../SubScreens/ViewGuestQr";
import NewsScreen from "../../Screens/News";
import NewsDetail from "../../SubScreens/NewsDetailScreen";
import OfferScreen from "../../Screens/OfferScreen";
import OfferDetails from "../../SubScreens/OfferDetailScreen";
import PastBills from "../../SubScreens/PastBills";
import PaymentHistory from "../../SubScreens/PaymentHistory";
import UnbilledAmount from "../../SubScreens/UnbilledAmount";
import ViewLedger from "../../SubScreens/ViewLedger";
import MakePayment from "../../SubScreens/MakePayment";
import RaiseIssue from "../../SubScreens/RaiseIssue";
import RaiseIssueSuccess from "../../SubScreens/RaiseIssueSuccess";
import ViewComplaint from "../../SubScreens/ViewComplaint";
import AddComplaint from "../../SubScreens/NewComplaint";
import ComplaintSuccess from "../../SubScreens/ComplaintSuccess";
import PaymentSuccess from "../../SubScreens/PaymentSuccess";
import FavouriteScreen from "../../SubScreens/Favourites";
import Classes from "../../SubScreens/Classes";
import Banquet from "../../SubScreens/Banquet";
import BanquetBooking from "../../SubScreens/BanquetBooking";
import BanquetSuccess from "../../SubScreens/BanquetSuccess";
import MassageScreen from "../../SubScreens/Massage";
import Events from "../../SubScreens/Events";
import EventDetail from "../../SubScreens/EventDetail";
import BookingDetail from "../../SubScreens/BookingDetail";
import Squash from "../../SubScreens/Squash";
import Library from "../../Screens/Library";
import ExploreCategories from "../../SubScreens/ExploreCategories";
import BookBorrowed from "../../SubScreens/BookBorrowed";
import MyWishlist from "../../SubScreens/MyWishlist";
import LibraryBookList from "../../SubScreens/LibraryBookList";
import UpdateProfile from "../../Screens/UpdateProfile";
import MassageDetail from "../../SubScreens/MassageDetail";

const Tab = createBottomTabNavigator();
const homeStack = createNativeStackNavigator();
const qrStack = createNativeStackNavigator();
const billStack = createNativeStackNavigator();
const bookStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <homeStack.Navigator
      initialRouteName={SCREENS.DASHBOARD}
      screenOptions={{
        headerShown: false,
      }}
    >
      <homeStack.Screen name={SCREENS.DASHBOARD} component={Dashboard} />
      <homeStack.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
      <homeStack.Screen name={SCREENS.NEWS_SUB_SCREEN} component={NewsScreen} />
      <homeStack.Screen
        name={SCREENS.NEWS_DETAIL_SCREEN}
        component={NewsDetail}
      />
      <homeStack.Screen
        name={SCREENS.OFFER_SUB_SCREEN}
        component={OfferScreen}
      />
      <homeStack.Screen
        name={SCREENS.OFFER_DETAIL_SCREEN}
        component={OfferDetails}
      />
      <homeStack.Screen name={SCREENS.FAVOURITE} component={FavouriteScreen} />
      <homeStack.Screen name={SCREENS.CLASSES} component={Classes} />
      <homeStack.Screen name={SCREENS.EVENTS} component={Events} />
      <homeStack.Screen name={SCREENS.EVENT_DETAIL} component={EventDetail} />
      <homeStack.Screen
        name={SCREENS.BOOKING_DETAIL}
        component={BookingDetail}
      />
      <homeStack.Screen name={SCREENS.LIBRARY} component={Library} />
      <homeStack.Screen
        name={SCREENS.EXPLORE_CATEGORIES}
        component={ExploreCategories}
      />
      <homeStack.Screen name={SCREENS.BOOK_BORROWED} component={BookBorrowed} />
      <homeStack.Screen name={SCREENS.MY_WISHLIST} component={MyWishlist} />
      <homeStack.Screen name={SCREENS.LIBRARY_BOOK_LIST} component={LibraryBookList} />
      <homeStack.Screen name={SCREENS.UPDATE_PROFILE} component={UpdateProfile} />
      <qrStack.Screen name={SCREENS.VIEW_COMPLAINT} component={ViewComplaint} />
      <qrStack.Screen name={SCREENS.ADD_COMPLAINT} component={AddComplaint} />
      <qrStack.Screen
        name={SCREENS.COMPLAINT_SUCCESS}
        component={ComplaintSuccess}
      />
    </homeStack.Navigator>
  );
};
export const QRNavigator = () => {
  return (
    <qrStack.Navigator
      initialRouteName={SCREENS.MENU}
      screenOptions={{
        headerShown: false,
      }}
    >
      <qrStack.Screen name={SCREENS.MENU} component={QrCode} />
      <qrStack.Screen name={SCREENS.REGISTER_GUEST} component={RegisterGuest} />
      <qrStack.Screen name={SCREENS.VIEW_GUEST_QR} component={ViewQr} />
      <qrStack.Screen name={SCREENS.NEWS_SUB_SCREEN} component={NewsScreen} />
      <qrStack.Screen
        name={SCREENS.NEWS_DETAIL_SCREEN}
        component={NewsDetail}
      />
      <qrStack.Screen name={SCREENS.OFFER_SUB_SCREEN} component={OfferScreen} />
      <qrStack.Screen
        name={SCREENS.OFFER_DETAIL_SCREEN}
        component={OfferDetails}
      />
      <qrStack.Screen name={SCREENS.VIEW_COMPLAINT} component={ViewComplaint} />
      <qrStack.Screen name={SCREENS.ADD_COMPLAINT} component={AddComplaint} />
      <qrStack.Screen
        name={SCREENS.COMPLAINT_SUCCESS}
        component={ComplaintSuccess}
      />
      <qrStack.Screen name={SCREENS.FAVOURITE} component={FavouriteScreen} />
      <qrStack.Screen name={SCREENS.LIBRARY} component={Library} />
      <qrStack.Screen
        name={SCREENS.EXPLORE_CATEGORIES}
        component={ExploreCategories}
      />
      <qrStack.Screen name={SCREENS.BOOK_BORROWED} component={BookBorrowed} />
      <qrStack.Screen name={SCREENS.MY_WISHLIST} component={MyWishlist} />
      <qrStack.Screen name={SCREENS.LIBRARY_BOOK_LIST} component={LibraryBookList} />
      <qrStack.Screen name={SCREENS.UPDATE_PROFILE} component={UpdateProfile} />

    </qrStack.Navigator>
  );
};
const biilingNavigator = () => {
  return (
    <billStack.Navigator
      initialRouteName={SCREENS.BILLING}
      screenOptions={{
        headerShown: false,
      }}
    >
      <billStack.Screen name={SCREENS.BILLING} component={Billing} />
      <billStack.Screen name={SCREENS.PAST_BILLS} component={PastBills} />
      <billStack.Screen
        name={SCREENS.PAYMENT_HISTORY}
        component={PaymentHistory}
      />
      <billStack.Screen
        name={SCREENS.UNBILLED_AMOUNT}
        component={UnbilledAmount}
      />
      <billStack.Screen name={SCREENS.VIEW_LEDGER} component={ViewLedger} />
      <billStack.Screen name={SCREENS.MAKE_PAYMENT} component={MakePayment} />
      <billStack.Screen name={SCREENS.RAISE_ISSUE} component={RaiseIssue} />
      <billStack.Screen
        name={SCREENS.RAIS_ISSUE_SUCCESS}
        component={RaiseIssueSuccess}
      />

      <billStack.Screen name={SCREENS.NEWS_SUB_SCREEN} component={NewsScreen} />
      <billStack.Screen
        name={SCREENS.NEWS_DETAIL_SCREEN}
        component={NewsDetail}
      />
      <billStack.Screen
        name={SCREENS.OFFER_SUB_SCREEN}
        component={OfferScreen}
      />
      <billStack.Screen
        name={SCREENS.PAYMENT_SUCCESS}
        component={PaymentSuccess}
      />
      <billStack.Screen name={SCREENS.FAVOURITE} component={FavouriteScreen} />
      <billStack.Screen name={SCREENS.LIBRARY} component={Library} />
      <billStack.Screen
        name={SCREENS.EXPLORE_CATEGORIES}
        component={ExploreCategories}
      />
      <billStack.Screen name={SCREENS.BOOK_BORROWED} component={BookBorrowed} />
      <billStack.Screen name={SCREENS.MY_WISHLIST} component={MyWishlist} />
      <billStack.Screen name={SCREENS.LIBRARY_BOOK_LIST} component={LibraryBookList} />
      <billStack.Screen name={SCREENS.UPDATE_PROFILE} component={UpdateProfile} />

    </billStack.Navigator>
  );
};
const bookNavigator = () => {
  return (
    <bookStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <bookStack.Screen name={SCREENS.BOOK} component={Book} />
      <bookStack.Screen name={SCREENS.CLASSES} component={Classes} />
      <bookStack.Screen name={SCREENS.BANQUET} component={Banquet} />
      <bookStack.Screen
        name={SCREENS.BANQUET_BOOKING}
        component={BanquetBooking}
      />
      <bookStack.Screen
        name={SCREENS.BANQUET_SUCEESS}
        component={BanquetSuccess}
      />
      <bookStack.Screen
        name={SCREENS.MASSAGE_SCREEN}
        component={MassageScreen}
      />
      <bookStack.Screen
        name={SCREENS.MASSAGE_DETAIL}
        component={MassageDetail}
      />
      <bookStack.Screen name={SCREENS.EVENTS} component={Events} />
      <bookStack.Screen name={SCREENS.EVENT_DETAIL} component={EventDetail} />
      <bookStack.Screen name={SCREENS.SQUASH} component={Squash} />
      <bookStack.Screen
        name={SCREENS.BOOKING_DETAIL}
        component={BookingDetail}
      />
      <bookStack.Screen name={SCREENS.LIBRARY} component={Library} />
      <bookStack.Screen
        name={SCREENS.EXPLORE_CATEGORIES}
        component={ExploreCategories}
      />
      <bookStack.Screen name={SCREENS.BOOK_BORROWED} component={BookBorrowed} />
      <bookStack.Screen name={SCREENS.MY_WISHLIST} component={MyWishlist} />
      <bookStack.Screen name={SCREENS.UPDATE_PROFILE} component={UpdateProfile} />

    </bookStack.Navigator>
  );
};
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "android" ? scale(65) : scale(65),
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.WHITE,
        },
        tabBarItemStyle: {
          height: scale(55),
          flexDirection: "column",
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={SCREENS.HOME}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeNavigator}
        options={{
          headerShown: false,
          unmountOnBlur: true,

          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.textContainer,
                  { color: focused ? COLORS.BLACK : "#707070" },
                ]}
              >
                HOME
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? IMAGES.HOME_FILL : IMAGES.HOME;
            return (
              <>
                <View
                  style={[
                    styles.dotContainer,
                    { backgroundColor: focused ? COLORS.RED : "transparent" },
                  ]}
                />
                <Image
                  source={image}
                  style={[
                    styles.imageContainer,
                    // { tintColor: focused ? COLORS.RED : "#707070" },
                  ]}
                  resizeMode="contain"
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.BILLING_TAB}
        component={biilingNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.textContainer,
                  { color: focused ? COLORS.BLACK : "#707070" },
                ]}
              >
                BILLING
              </Text>
            );
          },

          tabBarIcon: ({ focused }) => {
            const image = focused ? IMAGES.BILLING_FILL : IMAGES.BILLING;
            return (
              <>
                <View
                  style={[
                    styles.dotContainer,
                    { backgroundColor: focused ? COLORS.RED : "transparent" },
                  ]}
                />
                <Image
                  source={image}
                  style={[
                    styles.imageContainer,
                    // { tintColor: focused ? COLORS.RED : "#707070" },
                  ]}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOK_TAB}
        component={bookNavigator}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            global.tabdata = false;
            e.preventDefault();
            navigation.navigate(SCREENS.BOOK_TAB);
          },
        })}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.textContainer,
                  { color: focused ? COLORS.BLACK : "#707070" },
                ]}
              >
                BOOK
              </Text>
            );
          },
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            const image = focused ? IMAGES.BOOKFILL : IMAGES.BOOK;
            return (
              <>
                <View
                  style={[
                    styles.dotContainer,
                    { backgroundColor: focused ? COLORS.RED : "transparent" },
                  ]}
                />
                <Image
                  source={image}
                  style={[
                    styles.imageContainer,
                    // { tintColor: focused ? COLORS.RED : "#707070" },
                  ]}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.UPDATES}
        component={Updates}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.textContainer,
                  { color: focused ? COLORS.BLACK : "#707070" },
                ]}
              >
                UPDATES
              </Text>
            );
          },
          unmountOnBlur: true,

          tabBarIcon: ({ focused }) => {
            const image = focused ? IMAGES.ALERT_FILL : IMAGES.ALERT;
            return (
              <>
                <View
                  style={[
                    styles.dotContainer,
                    { backgroundColor: focused ? COLORS.RED : "transparent" },
                  ]}
                />
                <Image
                  source={image}
                  style={[
                    styles.imageContainer,
                    // { tintColor: focused ? COLORS.RED : "#707070" },
                  ]}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.MENU}
        component={QRNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.textContainer,
                  { color: focused ? COLORS.BLACK : "#707070" },
                ]}
              >
                QR SCAN
              </Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            const image = focused ? IMAGES.QRCODE_FILL : IMAGES.QRCODE;
            return (
              <>
                <View
                  style={[
                    styles.dotContainer,
                    { backgroundColor: focused ? COLORS.RED : "transparent" },
                  ]}
                />
                <Image
                  source={image}
                  style={[
                    styles.imageContainer,
                    // { tintColor: focused ? COLORS.RED : "#707070" },
                  ]}
                />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  dotContainer: {
    width: scale(10),
    height: scale(10),
    marginTop: scale(1),
    borderRadius: scale(10),
  },
  imageContainer: {
    height: scale(28),
    width: scale(28),
    marginTop: scale(3),
  },
  textContainer: {
    fontSize: scale(10.5),
    fontFamily: FONTS.POPPINS_MEDIUM,
    marginTop: scale(7),
  },
});
