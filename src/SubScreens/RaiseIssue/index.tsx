import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import {
  Dimensions,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import Header from "../../Component/Header";
import { SCREENS } from "../../Utils/ScreenContant";
import { scale } from "../../Utils/Helper/Scalling";
import moment from "moment";
import styles from "./styles";
import Button from "../../Component/Button";

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
const RaiseIssue = ({ navigation }: { navigation: any }) => {
  const [raiseData, setRaiseData] = useState<any[]>(data);
  const [currentIndex, setCurrentIndex] = useState<string>("");
  const [des, setDes] = useState<string>("");

  const raiseOnPress = (index: any) => {
    setCurrentIndex(index);
  };
  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <View
      style={[
        styles.renderBorderContainer,
        { borderColor: index === currentIndex ? COLORS.RED : "transparent" },
      ]}
    >
      <TouchableOpacity
        style={styles.renderContainer}
        onPress={() => raiseOnPress(index)}
      >
        <View style={styles.renderDateContainer}>
          <Text style={styles.dateText}>
            {moment(item.BillDate).format("MMMM YYYY")}
          </Text>
        </View>

        <View style={styles.renderAmountContainer}>
          <Text style={[styles.billNo, { marginTop: scale(7) }]}>
            Bill No.{" "}
          </Text>
          <Text style={styles.billNo}>{item.Billno}</Text>
          <Text style={styles.amount}>
            Rs.{Number(item.Amount).toFixed(0)} /-
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <Background>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <>
              <Header
                onPress={() => navigation.goBack()}
                text={"Raise Issue"}
                menuOnPress={() => navigation.openDrawer()}
              />
              <Text style={styles.billHeader}>Select Bill</Text>
              <View style={{ height: scale(100) }}>
                <FlatList
                  data={raiseData}
                  renderItem={renderItem}
                  horizontal
                  contentContainerStyle={styles.contentContainerStyle}
                />
              </View>
              <View style={styles.queryTextTitle}>
                <Text style={styles.queryText}>Describe Query</Text>
                <Text style={styles.queryDes}>
                  Tell us a little bit more about your query and we will work on
                  resolving it
                </Text>
                <TextInput
                  value={des}
                  onChangeText={(val: any) => setDes(val)}
                  style={styles.desInput}
                  placeholder="Write about the bill details issue here"
                  placeholderTextColor={COLORS.BLACK}
                  multiline
                />
                <Button
                  onPress={() =>
                    navigation.navigate(SCREENS.RAIS_ISSUE_SUCCESS)
                  }
                  text="Submit"
                  style={{ marginTop: scale(30) }}
                />
              </View>
            </>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};
export default RaiseIssue;
