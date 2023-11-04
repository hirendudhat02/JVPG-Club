import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import moment from "moment";
import { IMAGES } from "../../Utils/Images";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { SCREENS } from "../../Utils/ScreenContant";

const Billing = ({ navigation }: { navigation: any }) => {
  const [dueDate, setDueDate] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [accType, setAccType] = useState<string>("");
  const [clubbalance, setClubBalance] = useState<string>("");
  const [userid, setId] = useState<string>("K00384");
  const [billPeriod, setBillPeriod] = useState<string>("");

  useEffect(() => {
    const data = {
      Billno: "01034/202306",
      BillDate: "06-Jul-2023",
      BillPeriod: "202306",
      lst_BillPeriod: "202306",
      DueDate: "31-Jul-2023",
      Amount: "24871.25",
      clsAmount: "24868.25",
      Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/202306_K00384_BillDetail.pdf",
    };
    setBillPeriod(data.BillPeriod);
    setDueDate(data.DueDate);
    setAmount(data.clsAmount);
    setClubBalance("-24866");
    setAccType("Dr");
  }, []);

  const Booking = [
    {
      id: 1,
      name: "Past",
      img: IMAGES.PAST_BILLS,
      des: "Bills",
      disabled: userid.length === 8 ? true : false,
    },
    {
      id: 2,
      name: "Payment",
      img: IMAGES.PAYMENT_HISTORY,
      des: "History",
      disabled: false,
    },

    {
      id: 3,
      name: "Unbilled",
      img: IMAGES.UNBILLED,
      des: "Amount",
      disabled: userid.length === 8 ? true : false,
    },
    {
      id: 4,
      name: "View",
      img: IMAGES.VIEW_LEDGER,
      des: "Ledger",
      disabled: userid.length === 8 ? true : false,
    },
    {
      id: 5,
      name: "Make",
      img: IMAGES.MAKE_PAYMENT,
      disabled: false,
      des: "Payment",
    },
  ];

  //Billing Array
  const BillingData = [
    {
      name: "Due Date",
      date:
        accType !== "Cr"
          ? moment(dueDate).format("DD MMM, YYYY")
          : "No Payment Required",
    },
    {
      name: accType !== "Cr" ? "Bill Amount" : "Paid Amount",
      date: amount,
      rs: "Rs.",
    },
    {
      name: `You have credit of`,
      date: accType !== "Cr" ? 0 : Math.ceil(clubbalance),
      rs: "Rs.",
    },
  ];

  // Billing Card
  const billRenderItem = ({ item, index }: { item: any; index: any }) => {
    return (
      <View style={styles.billRenderItem}>
        <View style={{ flex: 6 }}>
          <Text style={styles.renderKey}>{item.name}</Text>
        </View>
        <View style={{ flex: 6 }}>
          <Text style={styles.renderView}>
            {index == 0 ? null : ":" + " " + item.rs + " "}
            {index == 0 ? ":" + " " + item.date : Math.round(item.date)}
          </Text>
        </View>
      </View>
    );
  };

  const BillingSubmit = (item: any) => {
    if (item.name === "Past") {
      navigation.navigate(SCREENS.PAST_BILLS);
    } else if (item.name === "Payment") {
      navigation.navigate(SCREENS.PAYMENT_HISTORY);
    } else if (item.name === "Unbilled") {
      navigation.navigate(SCREENS.UNBILLED_AMOUNT);
    } else if (item.name === "View") {
      navigation.navigate(SCREENS.VIEW_LEDGER);
    } else if (item.name === "Make") {
      navigation.navigate(SCREENS.MAKE_PAYMENT, { item: "pay" });
    }
  };
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity
      onPress={() => BillingSubmit(item)}
      disabled={item.disabled}
    >
      <View style={styles.listRenderContainer}>
        <Image
          source={item.img}
          key={index}
          style={{
            height: scale(25),
            width: scale(25),
            tintColor: item.disabled ? COLORS.LIGHT_ORANGE : COLORS.RED,
          }}
        />
        <Text
          numberOfLines={2}
          style={[
            styles.boxText,
            { color: item.disabled ? COLORS.LIGHT_ORANGE : COLORS.BLACK },
          ]}
          key={index}
        >
          {item.name}
        </Text>
        <Text
          numberOfLines={2}
          style={[
            styles.desText,
            {
              color: item.disabled ? COLORS.LIGHT_ORANGE : COLORS.BLACK,
            },
          ]}
        >
          {item.des}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          text={"Billing"}
          menuOnPress={() => navigation.openDrawer()}
        />
        <View style={styles.lastModalContainer}>
          <View style={styles.billBoxSubContainer}>
            {accType !== "Cr" ? (
              <Text style={styles.prndingTxt}>Pending</Text>
            ) : (
              <Text style={styles.prndingTxt}>Paid</Text>
            )}
          </View>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.billsText}>
            Bills made easy, fast & safe to pay
          </Text>
          <View style={styles.headingModalText}>
            <Text
              style={[
                styles.raiseText,
                { marginTop: accType === "Cr" ? scale(10) : scale(10) },
              ]}
            >
              {accType === "Cr"
                ? "You are all set. No Dues."
                : `Bill for the month of ${billPeriod} is due`}
            </Text>
          </View>
          <FlatList
            data={BillingData}
            renderItem={billRenderItem}
            overScrollMode={"never"}
            contentContainerStyle={{ marginTop: scale(20) }}
            ListFooterComponent={
              <>
                <View style={styles.billingButtonContainer}>
                  <TouchableOpacity
                    style={[styles.downloadBillstyle]}
                  // onPress={downloadPdf}
                  >
                    <Text style={styles.downloadBillText}>Download Bill</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(SCREENS.MAKE_PAYMENT)}
                    style={[
                      styles.MakePaymentButton,
                      {
                        backgroundColor:
                          accType === "Cr" ? COLORS.YELLOW : COLORS.RED,
                      },
                    ]}
                    disabled={accType === "Cr" ? true : false}
                  >
                    <Text
                      style={[
                        styles.payBillText,
                        {
                          color: accType === "Cr" ? COLORS.BLACK : COLORS.WHITE,
                        },
                      ]}
                    >
                      Pay Bill
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate(SCREENS.RAISE_ISSUE)}
                  style={styles.raiseButton}
                >
                  <Text style={styles.raiseIssueMainText}>
                    Raise an issue with this bill.
                  </Text>
                </TouchableOpacity>
              </>
            }
          />
        </View>
        {/* =============== Billing Types ================== */}
        <FlatList
          data={Booking}
          renderItem={renderItem}
          style={styles.flatContentContainer}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          overScrollMode={"never"}
          contentContainerStyle={{ alignItems: "center" }}
          scrollEnabled={false}
        />
      </ScrollView>
    </Background>
  );
};
export default Billing;
