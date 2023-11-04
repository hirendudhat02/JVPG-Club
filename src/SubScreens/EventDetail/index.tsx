import React, { useCallback, useEffect, useState } from "react";
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
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import RenderHTML from "react-native-render-html";
import { IMAGES } from "../../Utils/Images";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import FastImage from "react-native-fast-image";
import { useFocusEffect } from "@react-navigation/native";
import { SCREENS } from "../../Utils/ScreenContant";
import Button from "../../Component/Button";
import DropDown from "../../Component/DropDown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiConstants from "../../Redux/Services/ApiConstants";
import { KEY } from "../../Utils/AsyncKey";
import AlertModal from "../../Component/Alert";
import { GetEventListRequest } from "../../Redux/Actions/GetEventListAction";
import { useDispatch, useSelector } from "react-redux";

const EventDetail = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [data, setData] = useState<any[]>([]);
  const [timeSlots, setTimeSlots] = useState<any>([]);
  const [timeSlot, setTimeSlot] = useState(null);
  const [eventModal, setEventModal] = useState<boolean>(false);
  const [memberCount, setMemeberCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);
  const [guestCount, setGuestCount] = useState<number>(0);
  const [guestchild, setGuestChild] = useState<number>(0);
  const [menuItem, setMenuItem] = useState<string>("");
  const [mealType, setMealtype] = useState<any[]>([]);
  const [menuIndex, setMenuIndex] = useState<string>("");
  const [member, setMember] = useState<number>(0);
  const [adult_child, setAdult_Child] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const [guest, setGuest] = useState<number>(0);
  const [classModal, setClassModal] = useState<boolean>(false);
  const [radiodata, setRadioData] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const eventListRes = useSelector((state: any) => state.EventList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventListRes.data !== null && route?.params?.root !== "events") {
      if (eventListRes?.data) {
        setData(eventListRes?.data);
        const timeSlotValue = eventListRes?.data?.time_slots;
      if (timeSlotValue) {
        const list = [];
        timeSlotValue?.map((item) => {
          list.push({ label: item?.slot, value: item?.id });
        });
        setTimeSlots(list);
      }
      }
    }
  }, [eventListRes.data]);
  useFocusEffect(
    useCallback(() => {
      if (route?.params?.root === "events") {
        getDataFromList();
      } else {
        setData([]);
        const payload = new FormData();
        AsyncStorage.getItem(KEY.DATA).then((val: any) => {
          let temp = JSON.parse(val);
          payload.append("member_id", temp.member_id);
          payload.append("auth_token", temp.auth_token);
          payload.append("start", "1");
          payload.append("event_type", "event");
          payload.append("event_id", route?.params?.event_id);
          dispatch(GetEventListRequest(payload));
        });
      }
    }, [route?.params?.data, route?.params?.item])
  );

  const getDataFromList = () => {
    if (route.params.data !== undefined) {
      setData(route.params.data);
      const timeSlotValue = route?.params?.data?.time_slots;
      if (timeSlotValue) {
        const list = [];
        timeSlotValue?.map((item) => {
          list.push({ label: item?.slot, value: item?.id });
        });
        setTimeSlots(list);
      }

      if (route.params.data.meal_type === "both") {
        setMealtype([
          {
            id: 1,
            type: "Veg",
            selected: false,
          },
          {
            id: 2,
            type: "Non Veg",
            selected: false,
          },
        ]);
      } else if (route.params.data.meal_type === "Veg") {
        setMealtype([
          {
            id: 1,
            type: "Veg",
            selected: true,
          },
        ]);
        setMenuItem("Veg");
      } else if (
        route.params.data.meal_type === "Nonveg" ||
        route.params.data.meal_type === "Non-Veg"
      ) {
        setMealtype([
          {
            id: 1,
            type: "Non Veg",
            selected: true,
          },
        ]);
        setMenuItem("Non Veg");
      } else {
        setMenuItem([]);
      }
    }
  };
  const handleConform = () => {
    if(timeSlots.length>0 && timeSlot==null){
      setMessage("Please select Timeslot.");
      setOpenModal(true);
      return;
    }

    if(totalMembers===0){
      setMessage("Please select Member or Guest.");
      setOpenModal(true);
      return;
    }

    setLoading(true);

    console.log(
      "Testing11 handle Conform.............................",
      timeSlot,
      mealType[0]?.type,
      data?.event_id,
      childCount,
      memberCount,
      guestCount,
      guestchild
    );
    const payload = new FormData();
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      payload.append("member_id", temp.member_id);
      payload.append("auth_token", temp.auth_token);
      payload.append("time_slot", timeSlot);
      payload.append("meal_type", mealType[0]?.type);
      payload.append("event_id", data?.event_id);
      payload.append(
        "ticket",
        JSON.stringify({
          adult: memberCount,
          child: childCount,
          guest: guestCount,
          guest_child: guestchild,
        })
      );
      fetch(`${ApiConstants.BASE_URL}/addEditEventBooking`, {
        method: "POST",
        body: payload,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("Add Event Response is: ........................", res);

          if (res.status == false && res.data == null) {
            setMessage(res.message);
            setOpenModal(true);
            setLoading(false);
          } else {
            setEventModal(false);
            setLoading(false);
            navigation.navigate(SCREENS.BOOKING_DETAIL, { data: res?.data });
          }
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    });
  };
  const source = {
    html: data !== null ? data.description : "",
  };

  console.log("data ::", data);
  const { width } = useWindowDimensions();
  //Member Minus Submit
  const memberMinusSubmit = () => {
    if (memberCount == 0) {
      setMemeberCount(memberCount);
    } else {
      setMemeberCount(memberCount - 1);
    }
  };

  //Child Minus Submit
  const childMinusSubmit = () => {
    console.log("testing...........");
    if (childCount == 0) {
      setChildCount(childCount);
    } else {
      setChildCount(childCount - 1);
    }
  };

  //Guest Minus Submit
  const guestMinusSubmit = () => {
    if (guestCount == 0) {
      setGuestCount(guestCount);
    } else {
      setGuestCount(guestCount - 1);
    }
  };

  //Guest Child Minus Submit
  const guestChidMinusSubmit = () => {
    if (guestchild == 0) {
      setGuestChild(guestchild);
    } else {
      setGuestChild(guestchild - 1);
    }
  };

  //Member Plus Submit
  const memberPlusSubmit = () => {
    setMemeberCount(memberCount + 1);
  };

  //Child Plus Submit
  const childPlusSubmit = () => {
    setChildCount(childCount + 1);
  };

  //Guest Plus Submit
  const guestPlusSubmit = () => {
    setGuestCount(guestCount + 1);
  };

  //Guest Child Plus Submit
  const guestChildPlusSubmit = () => {
    setGuestChild(guestchild + 1);
  };
  const menuOnPress = (index: any, item: any) => {
    setMenuIndex(index);
    let temp = mealType;

    temp.map((mapItem, mapIndex) => {
      if (mapIndex == index) {
        if (temp[mapIndex].selected) {
          temp[mapIndex].selected = false;
        } else {
          temp[mapIndex].selected = true;
        }
      } else {
        temp[mapIndex].selected = false;
      }
    });

    setMenuItem(item.type);
    setMealtype([...temp]);
  };

  const radioRenderItem = ({ item, index }: { item: any; index: any }) =>
    item.type === null
      ? null
      : (console.log("item ::", item),
        (
          <View
            style={[
              styles.MenuchoicesView,
              { marginLeft: index === 0 ? scale(10) : scale(10) },
              {
                right:
                  index === 1
                    ? data?.meal_type === "both"
                      ? scale(30)
                      : scale(0)
                    : scale(0),
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.whereradioView,
                item.selected
                  ? {
                      borderColor: COLORS.BLACK,
                    }
                  : {
                      borderColor: COLORS.RED,
                    },
              ]}
              onPress={() => menuOnPress(index, item)}
            >
              <View
                style={[
                  styles.radioinnerView,
                  item.selected
                    ? {
                        backgroundColor: COLORS.RED,
                      }
                    : {
                        backgroundColor: COLORS.WHITE,
                      },
                ]}
              ></View>
            </TouchableOpacity>
            <View style={{ width: Dimensions.get("screen").width / 4 }}>
              <Text style={styles.radioLabel}>{item.type}</Text>
            </View>
          </View>
        ));

  const memberTotal = memberCount * member;
  const childTotal = childCount * child;
  const guestTotal = guestCount * guest;
  const guestChildTotal = guestchild * adult_child;

  //Total Amount Show
  const totalMembers=memberCount+childCount+guestCount+guestchild;
  const TotalAmount = memberTotal + childTotal + guestTotal + guestChildTotal;
  const insText = {
    html:
      data?.event_class_time_data === undefined
        ? null
        : data?.event_class_time_data[0]?.instructors_data?.description,
  };

  console.log(
    "data?.event_class_time_data[0]?.instructors_data ::",
    data?.event_class_time_data
  );

  //Class Radio data
  const radioData = [
    { key: "this month", val: "Current Month" },
    { key: "next month", val: "Next Month" },
  ];
  const onPress = (item: any, index: any) => {
    setRadioData(index);
  };
  const subscribeRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.TodaychoicesView}>
      <TouchableOpacity
        style={[
          styles.whereradioView,
          radiodata === index
            ? {
                borderColor: COLORS.MEDIUM_GREY,
              }
            : {
                borderColor: COLORS.MEDIUM_GREY,
              },
        ]}
        onPress={() => onPress(item, index)}
      >
        <View
          style={[
            styles.radioinnerView,
            radiodata === index
              ? {
                  backgroundColor: COLORS.RED,
                }
              : {
                  backgroundColor: COLORS.WHITE,
                },
          ]}
        ></View>
      </TouchableOpacity>
      <View style={{ width: Dimensions.get("screen").width / 3 }}>
        <Text style={styles.radioLabel}>{item.val}</Text>
      </View>
    </View>
  );

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          menuOnPress={() => navigation.openDrawer()}
          text={route.params.item === "event" ? "Event Details" : "Classes"}
        />
        <AlertModal
          message={message}
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
        {data.length !== 0 ? (
          <>
            <ImageBackground
              source={{ uri: data?.event_media_data[0]?.media_file }}
              style={styles.media_file}
              borderRadius={scale(10)}
            >
              <LinearGradient
                start={{ x: 0, y: 1.3 }}
                end={{ x: 0, y: 0 }}
                colors={[COLORS.BLACK, "transparent"]}
                style={styles.linearView}
              >
                <Text style={styles.eventTitle}>{data?.event_title}</Text>
              </LinearGradient>
            </ImageBackground>
            <Text style={styles.venueText}>{data.venue}</Text>
            <Text style={styles.guestAllowedText}>
              {data !== null
                ? data?.for_member_or_with_guest == "guest"
                  ? data?.for_member_or_with_guest + "  " + "allowed"
                  : data?.for_member_or_with_guest +
                    "  " +
                    "only" +
                    "  " +
                    data?.event_type
                : ""}
            </Text>
            {data?.key_feature_data.length === 0 ? null : (
              <View style={styles.keyContainer}>
                {data?.key_feature_data.map((item: any, index: any) => (
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        marginTop: index === 0 ? scale(0) : scale(10),
                        marginBottom: index !== 0 ? scale(5) : scale(0),
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.key_feature_image }}
                      style={styles.iconImage}
                    />
                    <Text style={styles.keyFeatureTitle}>
                      {item.key_feature_title}
                    </Text>
                  </View>
                ))}
              </View>
            )}
            <Text style={styles.aboutThisText}>
              About This {route.params.item === "event" ? "Event" : "Class"}
            </Text>
            <RenderHTML
              contentWidth={width}
              source={source}
              baseStyle={styles.desStyles}
            />
          </>
        ) : null}
        {route.params.item === "class" ? (
          data?.event_class_time_data === undefined ? null : (
            <View style={styles.aboutContainer}>
              <View style={styles.aboutImageContainer}>
                <View style={{ flex: 2 }}>
                  <FastImage
                    source={{
                      uri: data?.event_class_time_data[0]?.instructors_data
                        ?.image,
                      priority: FastImage.priority.high,
                    }}
                    style={styles.aboutImage}
                  />
                </View>
                <View style={styles.aboutDescContainer}>
                  <Text style={styles.aboutName}>
                    {
                      data?.event_class_time_data[0]?.instructors_data
                        ?.instructors_name
                    }
                  </Text>
                  <Text style={styles.aboutDetail}>
                    {
                      data?.event_class_time_data[0]?.instructors_data
                        ?.designation
                    }
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: scale(20),
                  marginVertical: scale(10),
                }}
              >
                <RenderHTML
                  contentWidth={width}
                  source={insText}
                  baseStyle={{
                    color: "#707070",
                    fontSize: scale(12),
                    fontFamily: FONTS.POPPINS_REGULAR,
                  }}
                />
              </View>
            </View>
          )
        ) : null}
      </ScrollView>
      {data?.open_for_all===0 &&(
        <View style={styles.footerContainer}>
        <Button
          onPress={() => {
            if (route?.params?.item === "class") {
              setClassModal(true);
            } else {
              setEventModal(true);
              if (data?.event_ticket == null) {
                setMember(0);
                setAdult_Child(0);
                setChild(0);
                setGuest(0);
              } else {
                setMember(data?.event_ticket.adult);
                setAdult_Child(data?.event_ticket.child_guest);
                setChild(data?.event_ticket.child);
                setGuest(data?.event_ticket.adult_guest);
              }
            }
          }}
          text={
            route?.params?.item === "event" ? "Book Now" : "Request to Enroll"
          }
          style={{ marginBottom: scale(10) }}
        />
      </View>
      )}
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={classModal}
        onRequestClose={() => setClassModal(false)}
      >
        <StatusBar
          animated={true}
          backgroundColor={COLORS.BACKGROUND_COLOR}
          barStyle="light-content"
        />
        <View style={styles.modalClassContainer}>
          <View style={styles.subModalContainer}>
            <View style={styles.subModalContainer2}>
              <View style={styles.closeContainer}>
                <TouchableOpacity onPress={() => setClassModal(false)}>
                  <Image
                    source={IMAGES.CLOSE}
                    style={styles.closeImg}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.titleClassModalText}>
              Please Select Enrollment Month
            </Text>
            <FlatList
              data={radioData}
              renderItem={subscribeRenderItem}
              overScrollMode={"never"}
              contentContainerStyle={{
                marginHorizontal: scale(25),
                marginTop: scale(10),
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setClassModal(false);
                navigation.navigate(SCREENS.BOOKING_DETAIL, {
                  squash: "class",
                });
              }}
              style={[
                styles.modalClasssubmitButton,
                { marginTop: scale(55), marginBottom: scale(5) },
              ]}
            >
              <Text style={styles.saveText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={eventModal}
        onRequestClose={() => setEventModal(false)}
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
                <Text style={styles.titleModalText}>Choose Person</Text>
              </View>
              <View style={styles.closeContainer}>
                <TouchableOpacity onPress={() => setEventModal(false)}>
                  <Image
                    source={IMAGES.CLOSE}
                    style={styles.closeImg}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* <TouchableOpacity
              style={[styles.descInput]}
              //   onPress={() => openDate()}
            >
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[styles.descStyle]}
              >
                Select Timeslot
              </Text>
              <Text style={[styles.descinputContainer]}>Select Timeslot</Text>
            </TouchableOpacity> */}
            <View style={styles.inputContainer}>
              <DropDown
                placeHolder="Select Timeslot"
                options={timeSlots}
                selectedOption={timeSlot}
                setSelectedOption={setTimeSlot}
              />
            </View>
            {mealType.length === 0 ? null : (
              <FlatList
                data={mealType}
                renderItem={radioRenderItem}
                contentContainerStyle={{
                  marginHorizontal: scale(25),
                  marginTop: scale(20),
                }}
                horizontal
                ListHeaderComponent={
                  <Text
                    style={{
                      fontSize: scale(13),
                      fontFamily: FONTS.PLAYFAIR_DISPLAY_MEDIUM,
                      color: COLORS.BLACK,
                    }}
                  >
                    Meal Type:{" "}
                  </Text>
                }
              />
            )}

            <View style={styles.personContainer}>
              <View style={styles.personSubContainer}>
                <Text style={styles.memberHeadText}>Member</Text>
                <Text style={styles.memberPerPersonText}>
                  Rs.{" "}
                  {data?.event_ticket?.adult == undefined ||
                  data?.event_ticket?.adult == null
                    ? member
                    : data?.event_ticket?.adult}{" "}
                  / Per Person
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={styles.minusContainer}
                    onPress={() => memberMinusSubmit()}
                  >
                    <Image
                      source={IMAGES.MINUS_BOOK}
                      style={styles.minusText}
                    />
                  </TouchableOpacity>
                  <Text style={styles.countText}>{memberCount}</Text>
                  <TouchableOpacity
                    style={styles.plusCntainer}
                    onPress={() => memberPlusSubmit()}
                  >
                    <Image source={IMAGES.PLUS_BOOK} style={styles.minusText} />
                  </TouchableOpacity>
                </View>
              </View>
              {data?.display_member_child === "NO" ? (
                data?.display_guest_member === "NO" ? (
                  data?.display_guest_child === "NO" ? null : (
                    <View style={styles.personSubContainer}>
                      <Text style={styles.memberHeadText}>Guest Child</Text>
                      <Text style={styles.memberPerPersonText}>
                        Rs.{" "}
                        {data?.event_ticket?.child_guest == undefined ||
                        data?.event_ticket?.child_guest == null
                          ? child
                          : data?.event_ticket?.child_guest}{" "}
                        / Per Person
                      </Text>
                      <View style={styles.counterContainer}>
                        <TouchableOpacity
                          style={styles.minusContainer}
                          onPress={() => guestChidMinusSubmit()}
                        >
                          <Image
                            source={IMAGES.MINUS_BOOK}
                            style={styles.minusText}
                          />
                        </TouchableOpacity>
                        <Text style={styles.countText}>{guestchild}</Text>
                        <TouchableOpacity
                          style={styles.plusCntainer}
                          onPress={() => guestChildPlusSubmit()}
                        >
                          <Image
                            source={IMAGES.PLUS_BOOK}
                            style={styles.minusText}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                ) : (
                  <View style={styles.personSubContainer}>
                    <Text style={styles.memberHeadText}>Guest Member</Text>
                    <Text style={styles.memberPerPersonText}>
                      Rs.{" "}
                      {data?.event_ticket?.adult_guest == undefined ||
                      data?.event_ticket?.adult_guest == null
                        ? guest
                        : data?.event_ticket?.adult_guest}{" "}
                      / Per Person
                    </Text>
                    <View style={styles.counterContainer}>
                      <TouchableOpacity
                        style={styles.minusContainer}
                        onPress={() => guestMinusSubmit()}
                      >
                        <Image
                          source={IMAGES.MINUS_BOOK}
                          style={styles.minusText}
                        />
                      </TouchableOpacity>
                      <Text style={styles.countText}>{guestCount}</Text>
                      <TouchableOpacity
                        style={styles.plusCntainer}
                        onPress={() => guestPlusSubmit()}
                      >
                        <Image
                          source={IMAGES.PLUS_BOOK}
                          style={styles.minusText}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              ) : (
                <View style={styles.personSubContainer}>
                  <Text style={styles.memberHeadText}>Child</Text>
                  <Text style={styles.memberPerPersonText}>
                    Rs.{" "}
                    {data?.event_ticket?.child == undefined ||
                    data?.event_ticket?.child == null
                      ? adult_child
                      : data?.event_ticket?.child}{" "}
                    / Per Person
                  </Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      style={styles.minusContainer}
                      onPress={() => childMinusSubmit()}
                    >
                      <Image
                        source={IMAGES.MINUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{childCount}</Text>
                    <TouchableOpacity
                      style={styles.plusCntainer}
                      onPress={() => childPlusSubmit()}
                    >
                      <Image
                        source={IMAGES.PLUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View style={styles.personContainer}>
              {data?.display_member_child === "NO" ||
              data?.display_guest_member === "NO" ? null : (
                <View style={styles.personSubContainer}>
                  <Text style={styles.memberHeadText}>Guest Member</Text>
                  <Text style={styles.memberPerPersonText}>
                    Rs.{" "}
                    {data?.event_ticket?.adult_guest == undefined ||
                    data?.event_ticket?.adult_guest == null
                      ? guest
                      : data?.event_ticket?.adult_guest}{" "}
                    / Per Person
                  </Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      style={styles.minusContainer}
                      onPress={() => guestMinusSubmit()}
                    >
                      <Image
                        source={IMAGES.MINUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{guestCount}</Text>
                    <TouchableOpacity
                      style={styles.plusCntainer}
                      onPress={() => guestPlusSubmit()}
                    >
                      <Image
                        source={IMAGES.PLUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {data?.display_guest_child === "NO" ? null : (
                <View style={styles.personSubContainer}>
                  <Text style={styles.memberHeadText}>Guest Child</Text>
                  <Text style={styles.memberPerPersonText}>
                    Rs.{" "}
                    {data?.event_ticket?.child_guest == undefined ||
                    data?.event_ticket?.child_guest == null
                      ? child
                      : data?.event_ticket?.child_guest}{" "}
                    / Per Person
                  </Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      style={styles.minusContainer}
                      onPress={() => guestChidMinusSubmit()}
                    >
                      <Image
                        source={IMAGES.MINUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{guestchild}</Text>
                    <TouchableOpacity
                      style={styles.plusCntainer}
                      onPress={() => guestChildPlusSubmit()}
                    >
                      <Image
                        source={IMAGES.PLUS_BOOK}
                        style={styles.minusText}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
            <View
              style={[
                styles.totalContainer,
                {
                  marginTop:
                    (data?.display_member_child === "NO" &&
                      data?.display_guest_member === "NO") ||
                    data?.display_guest_child === "NO"
                      ? scale(10)
                      : scale(45),
                },
              ]}
            >
              <Text style={styles.totalAmountText}>Total Amount</Text>
              <Text style={styles.totalAmountVal}>
                {"Rs." + " " + TotalAmount.toFixed(2) + "/-"}
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleConform}
              disabled={loading}
              style={[
                styles.modalsubmitButton,
                { marginTop: scale(15), marginBottom: scale(8) },
              ]}
            >
              {loading ? (
                  <ActivityIndicator size="large" color={COLORS.WHITE} />
                ) : (
                  <Text style={styles.saveText}>Confirm</Text>
                )}
              
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
};
export default EventDetail;
