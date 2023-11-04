import React, { useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { IMAGES } from "../../Utils/Images";
import { SCREENS } from "../../Utils/ScreenContant";
import { scale } from "../../Utils/Helper/Scalling";
// Club Array
const data = [
  {
    Id: 1,
    Name: "Club Information",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 2,
    Name: "Latest News",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 3,
    Name: "Facilities",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 4,
    Name: "Library",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 5,
    Name: "Restaurant & Bar",
    back: IMAGES.VIEW_ARROW,
  },
  // {
  //   Id: 6,
  //   Name: "Otterite",
  //   back: IMAGES.VIEW_ARROW,
  // },
  {
    Id: 7,
    Name: "Exciting Offers",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 8,
    Name: "Complaint / Feedback",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 9,
    Name: "Privacy Information",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 10,
    Name: "Gallery",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 11,
    Name: "Help",
    back: IMAGES.VIEW_ARROW,
  },
  {
    Id: 12,
    Name: "Favourite",
    back: IMAGES.VIEW_ARROW,
  },
];

const CustomDrawer = (props: any) => {
  //States
  const [drawerData, setDrawerData] = useState<any[]>(data);
  //Drawer OnPress
  const handleSubmit = (index: any) => {
    if (index == 0) {
      // props.navigation.navigate(SCREENS.CLUB_INFO);
    } else if (index == 1) {
      props.navigation.navigate(SCREENS.NEWS_SUB_SCREEN);

    } else if (index == 2) {
      // props.navigation.navigate(SCREENS.FACILITIES);
    } else if (index == 3) {
      props.navigation.navigate(SCREENS.LIBRARY);
    } else if (index == 4) {
      // props.navigation.navigate(SCREENS.RESTAURANT);
    }  else if (index == 5) {
      props.navigation.navigate(SCREENS.OFFER_SUB_SCREEN);
    } else if (index == 6) {
      props.navigation.navigate(SCREENS.VIEW_COMPLAINT);
    } else if (index == 8) {
      // props.navigation.navigate(SCREENS.PRIVACY_POLICY);
    } else if (index == 9) {
      // props.navigation.navigate(SCREENS.GALLERY);
      //   dispatch(GalleryListResponse(null))
    }  else if (index == 10) {
      props.navigation.navigate(SCREENS.FAVOURITE);
    } else {
      null;
    }
  };
  //DraweItems
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <DrawerItem
      style={styles.drawerItemStyle}
      label={() => (
        <>
          <View style={styles.DrawerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.menuDrawerText}>{item.Name}</Text>
            </View>
            <View
              style={styles.backContainer}
            >
              <Image
                source={item.back}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </View>
          </View>
        </>
      )}
      onPress={() => handleSubmit(index)}
      pressColor={"transparent"}
    />
  );
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.draweContainerScrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          data={drawerData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={styles.lineView} />}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Menu</Text>
              </View>
            </View>
          }
        />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;
