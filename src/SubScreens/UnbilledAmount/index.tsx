import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import moment from "moment";
import { COLORS } from "../../Utils/Colors";
import styles from "./styles";

const data = [
  {
    Blt_VchrNo: "GYM01299",
    Date: "12-Jul-2023",
    Blt_VchrTm: "07:56",
    Is_Kot: "N",
    Pos_name: "",
    Amount: "80",
    AmountFor: "Gymnasium Member Charge                           ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_GYM01299_Detail.pdf",
    showbill: "N",
  },
  {
    Blt_VchrNo: "R2321412",
    Date: "12-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ELITE FOODS (PANTRY)",
    Amount: "265",
    AmountFor: "Elite Foods - Pantry                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_R2321412_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "R2321272",
    Date: "11-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ELITE FOODS (PANTRY)",
    Amount: "99",
    AmountFor: "Elite Foods - Pantry                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_R2321272_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "OF304811",
    Date: "11-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "38",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OF304811_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "OL305950",
    Date: "11-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "976",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OL305950_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "APP00025",
    Date: "10-Jul-2023",
    Blt_VchrTm: "12:05",
    Is_Kot: "N",
    Pos_name: "",
    Amount: "84.75",
    AmountFor: "Main Entrance Guest (W.D.)                        ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_APP00025_Detail.pdf",
    showbill: "N",
  },
  {
    Blt_VchrNo: "APP00026",
    Date: "10-Jul-2023",
    Blt_VchrTm: "12:07",
    Is_Kot: "N",
    Pos_name: "",
    Amount: "678",
    AmountFor: "Main Entrance Guest (W.D.)                        ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_APP00026_Detail.pdf",
    showbill: "N",
  },
  {
    Blt_VchrNo: "OL305900",
    Date: "10-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "195",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OL305900_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "GYM00723",
    Date: "07-Jul-2023",
    Blt_VchrTm: "07:33",
    Is_Kot: "N",
    Pos_name: "",
    Amount: "80",
    AmountFor: "Gymnasium Member Charge                           ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_GYM00723_Detail.pdf",
    showbill: "N",
  },
  {
    Blt_VchrNo: "OF304552",
    Date: "06-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "20",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OF304552_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "OL305639",
    Date: "06-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "585",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OL305639_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "REC00370",
    Date: "05-Jul-2023",
    Blt_VchrTm: "18:25",
    Is_Kot: "N",
    Pos_name: "",
    Amount: "423.75",
    AmountFor: "Main Entrance Guest (W.D.)                        ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_REC00370_Detail.pdf",
    showbill: "N",
  },
  {
    Blt_VchrNo: "OF304500",
    Date: "05-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "38",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OF304500_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "OL305579",
    Date: "05-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "488",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OL305579_Detail.pdf",
    showbill: "Y",
  },
  {
    Blt_VchrNo: "OL305588",
    Date: "05-Jul-2023",
    Blt_VchrTm: "00:00",
    Is_Kot: "Y",
    Pos_name: "ON THE ROCK",
    Amount: "244",
    AmountFor: "On The Rocks Charges                              ",
    pdf: "https://app.ottersclub.com/BillReport/Pos_Bills/K00384_OL305588_Detail.pdf",
    showbill: "Y",
  },
];
const UnbilledAmount = ({ navigation }: { navigation: any }) => {
  //UnBilled RenderItem
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    // console.log(item.pdf.replace("_Detail.pdf", ".pdf")),
    <View style={styles.renderItemContainer}>
      <View style={{ flexDirection: "column", flex: scale(5),paddingVertical: scale(15) }}>
        <Text style={styles.amountfor}>
          {item.Pos_name == "" ? item.AmountFor : item.Pos_name}
        </Text>
        <Text style={styles.timeText}>
          {moment(item.Date).format("DD MMM, YYYY ")}
          {item.Blt_VchrTm !== "00:00" ? "・ " + item.Blt_VchrTm : null}
        </Text>
        <Text style={styles.amountText}>Rs {item.Amount} /-</Text>
      </View>
      <View style={{ flexDirection: "column", flex: scale(2),alignItems:"center",paddingVertical: scale(15) }}>
        <TouchableOpacity style={styles.viewBillButton}>
          <Text style={styles.viewBillText}>View Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadBillButton}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.downloadBillText}
          >
            View KOTs
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Unbilled Amount"}
        menuOnPress={() => navigation.openDrawer()}
      />
       <View style={{ alignSelf: "center", marginTop: scale(25),marginBottom:scale(10) }}>
            <Text style={styles.headerText}>
              Total unbilled amount for the current month is
              <Text style={styles.headerBold}> Rs 17352.90</Text>
            </Text>
          </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: scale(15),marginTop:scale(10) }}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
       
      />
    </Background>
  );
};
export default UnbilledAmount;
