import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Share,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import { IMAGES } from "../../Utils/Images";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { SCREENS } from "../../Utils/ScreenContant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";

const Data = {
  accounttype: "Dr",
  clubaccountbalance: "-24866",
  unbilledbalance: "3060.5",
  cashcradbalance: "0",
  Mbr_Code: "K0038400",
  Mbr_Title: "MR.",
  Mbr_FirstName: "AYAZ",
  Mbr_MidName: "B",
  Mbr_LastName: "KAZI",
  Mbr_Name: "KAZI AYAZ B",
  Mbr_Address:
    "1001,10th FLR,NENSEY SOCIETY,\r\n3rd ROAD,OPP.ALMEIDA PARK, BANDRA(W),MUMBAl",
  Mbr_Pin: "400050",
  Mbr_Mobile: "7575041519",
  Mbr_Email: "pragnesh.s@bcreative.in",
  Mbr_Password: "otters",
  Mbr_OTP: "528532",
  Mbr_Photo: "https://ottersclub.com/images/K0038400.jpg",
};
const ProfileData = [
  {
    id: 1,
    title: "My Notification",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.NOTIFICATION,
  },
  {
    id: 2,
    title: "My Bookings",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.MY_BOOKING,
  },
  {
    id: 3,
    title: "Invite Dependent Member",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.MEMBER,
  },

  {
    id: 4,
    title: "Update Contact Details",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.UPDATE,
  },
  {
    id: 5,
    title: "Change Password",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.CHANGE_PASSWORD,
  },

  {
    id: 6,
    title: "Logout",
    img: IMAGES.BACK_ICON,
    logo: IMAGES.LOGOUT,
  },
];

const memberListData = [
  {
    Asm_Code: "C0001200",
    Asm_Name: "BHAVIK SHAH",
    Asm_Mobile: "7575041519",
    Asm_Email: "pragnesh.s@bcreative.in",
    Asm_Photo: "https://ottersclub.com/images/K0038400.Jpg",
    Asm_Sex: "M",
    Asm_Relation: "Self",
    is_MainMember: "Yes",
  },
  {
    Asm_Code: "C0001201",
    Asm_Name: "PRAGNESH SOLANKI",
    Asm_Mobile: "9820349644",
    Asm_Email: "sabiha.kazi@me.com",
    Asm_Photo: "https://ottersclub.com/images/K0038401.Jpg",
    Asm_Sex: "M",
    Asm_Relation: "FRIEND",
    is_MainMember: "No",
  },
];
const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<any>(Data);
  const [memberListOpen, setMemberListOpen] = useState<boolean>(false);

  const listOnPress = (index: any) => {
    if (index === 0) {
      Alert.alert("My Notification");
    } else if (index === 1) {
      navigation.navigate(SCREENS.BOOK_TAB, { event: "existingBooking" });
      global.tabdata = true;
    } else if (index === 2) {
      setMemberListOpen(true);
    } else if (index === 3) {
      navigation.navigate(SCREENS.UPDATE_PROFILE);
    } else if (index === 4) {
      navigation.navigate(SCREENS.CHANGE_PASSWORD);
    } else if (index === 5) {
      AsyncStorage.setItem(KEY.DATA,"null");
      AsyncStorage.setItem(KEY.TOKEN,"null");
      navigation.reset({
        index: 0,
        routes: [
          {
            name: SCREENS.AUTH_NAVIGATOR,
          },
        ],
      });
    }
  };
  //RenderItem
  const renderItem = ({ item, index }: { item: any; index: any }) =>
    item.title == null ? null : (
      <TouchableOpacity onPress={() => listOnPress(index)}>
        <View style={[styles.listContainer]}>
          <Image source={item.logo} style={styles.logoImg} />
          {/* </ImageBackground> */}
          <View style={styles.listView}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
          <Image
            source={IMAGES.VIEW_ARROW}
            style={{
              height: scale(20),
              width: scale(20),
              tintColor: COLORS.RED,
            }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );

  const share = async (item: any) => {
    try {
      const result = await Share.share({
        message: `Dear ${
          item.Asm_Name
        } Your JVPG Club mobile app login details are Login ID - ${
          item.Asm_Code
        } & Password - ${"123455"}.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const memberListRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.renderContainer}>
      <View style={styles.rowContainer}>
        <View style={{ flex: 3 }}>
          <Text style={styles.renderKey}>Member Name</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Text style={styles.renderValue}>{item.Asm_Name}</Text>
        </View>
      </View>
      <View style={styles.renderValueContainer}>
        <View style={{ flex: 3 }}>
          <Text style={styles.renderKey}>Member Code</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Text style={styles.renderValue}>{item.Asm_Code}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => share(item)}
        style={[
          styles.submitButton,
          { marginTop: scale(20), marginBottom: scale(10) },
        ]}
      >
        <Text style={styles.saveText}>Share Details</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Profile"}
          menuOnPress={() => navigation.openDrawer()}
        />

        <View style={styles.imageBackground}>
          <Image
            resizeMode="cover"
            source={IMAGES.USER}
            style={styles.profileImageuri}
          />
        </View>
        <View style={styles.profileDataText}>
          <Text style={styles.nameText}>
            {"Mr."} {"Bhavik Shah"}
          </Text>
          <Text style={styles.idText}>c00012</Text>
        </View>
        <View style={styles.FlatimageContainer}>
          <FlatList
            data={ProfileData}
            renderItem={renderItem}
            overScrollMode={"never"}
            contentContainerStyle={{
              paddingBottom: scale(20),
              marginTop: scale(20),
            }}
            keyExtractor={(item: any, index: any) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={memberListOpen}
          onRequestClose={() => setMemberListOpen(false)}
        >
          <View style={styles.modalContainer}>
            <StatusBar
              animated={true}
              backgroundColor={COLORS.BACKGROUND_COLOR}
              barStyle="light-content"
            />
            <View style={styles.subModalContainer}>
              <TouchableOpacity onPress={() => setMemberListOpen(false)}>
                <Image source={IMAGES.CLOSE} style={styles.closeIcon} />
              </TouchableOpacity>
              <Text style={styles.inviteMembers}>Invite Dependent Members</Text>
              <Text style={styles.timeDesText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Text>
              <FlatList
                data={memberListData}
                renderItem={memberListRenderItem}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Background>
  );
};
export default ProfileScreen;
