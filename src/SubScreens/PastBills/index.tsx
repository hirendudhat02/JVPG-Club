import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";
import moment from "moment";
import styles from "./styles";
import { IMAGES } from "../../Utils/Images";

const data = [
  {
    Billno: "01034/202306",
    BillDate: "06-Jul-2023",
    BillPeriod: "202306",
    lst_BillPeriod: "202306",
    DueDate: "31-Jul-2023",
    Amount: "24871.25",
    clsAmount: "24868.25",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/202306_K00384_BillDetail.pdf",
  },
  {
    Billno: "01166/202305",
    BillDate: "08-Jun-2023",
    BillPeriod: "202305",
    lst_BillPeriod: "202306",
    DueDate: "30-Jun-2023",
    Amount: "5796.75",
    clsAmount: "5526.75",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/202305_K00384_BillDetail.pdf",
  },
  {
    Billno: "01611/202304",
    BillDate: "08-May-2023",
    BillPeriod: "202304",
    lst_BillPeriod: "202306",
    DueDate: "31-May-2023",
    Amount: "8658",
    clsAmount: "8416",
    Pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/202304_K00384_BillDetail.pdf",
  },
];
const PastBills = ({ navigation }: { navigation: any }) => {
  //RenderItem
  const renderItem = ({ item, index }: { item: any; index: any }) => {
    return index == 0 ? null : (
      <View style={styles.renderItemContainer}>
        <View style={styles.headerContainer}>
        <Text style={styles.reciptNo}>Bill No. {item.Billno}</Text>

          <View style={styles.pastBillRenderItem}>
          </View>
          <View style={styles.paidContainer}>
            <Text
              style={{
                fontSize: scale(10),
                fontFamily: FONTS.POPPINS_REGULAR,
                color: COLORS.WHITE,
                textAlign:"center"
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              Paid
            </Text>
          </View>
        </View>

        <View style={styles.dateSubContainer}>
          <View style={styles.dateSubContainer2}>
            <View style={styles.dateView}>
              <View style={{ flex: 5 }}>
                <Text style={styles.date}>Bill Date</Text>
              </View>
              <View style={{ flex: 6 }}>
                <Text style={styles.dateValue}>
                  {moment(item.BillDate).format("DD MMM, YYYY")}
                </Text>
              </View>
            </View>

            <View style={styles.dateView}>
              <View style={{ flex: 5 }}>
                <Text style={styles.date}>Bill Month</Text>
              </View>
              <View style={{ flex: 6 }}>
                <Text style={styles.dateValue}>
                  {moment(item.BillPeriod).format("MMMM") +
                    ", " +
                    moment(item.BillDate).format("YYYY")}
                </Text>
              </View>
            </View>
            <View style={[styles.dateView, { paddingBottom: scale(15) }]}>
              <View style={{ flex: 5 }}>
                <Text
                  style={styles.date}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  Paid Amount
                </Text>
              </View>
              <View style={{ flex: 6 }}>
                <Text style={styles.dateValue}>
                  {"Rs." + " " + item.Amount}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={IMAGES.DOWNLOAD_BILL}
              style={{
                height: scale(55),
                width: scale(55),
                marginBottom:scale(10)
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Past Bills"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: scale(10),
          marginTop: scale(15),
        }}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
      />
    </Background>
  );
};
export default PastBills;
