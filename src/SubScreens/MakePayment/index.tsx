import React, { useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";
import Button from "../../Component/Button";

const MakePayment = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [rs, setRs] = useState<string>("");
  const [ValidError, setValidError] = useState<string>("");
  const [validView, setValidView] = useState<boolean>(false);

  const changeText = (val: any) => {
    let reg = /^[0-9]*$/;

    if (val.length === 0) {
      setValidError("rs must be enter");
      setValidView(true);
    } else if (reg.test(val) === false) {
      setValidError("enter valid rs");
      setValidView(true);
    } else if (reg.test(val) === true) {
      setValidError("");
      setValidView(false);
    }
  };
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={route?.params?.item === "pay" ? "Make Payment" : "Pay Bill"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
      >
        <Text
          style={{
            marginHorizontal: scale(17),
            fontFamily: FONTS.POPPINS_MEDIUM,
            color: COLORS.BLACK,
            fontSize: scale(13),
            marginTop: scale(25),
          }}
        >
          Amount
        </Text>
        <View style={styles.makePaymentContainer}>
          <Text style={styles.rsText}>Rs.</Text>
          <TextInput
            style={styles.rsInput}
            value={rs}
            onChangeText={(value: any) => {
              setRs(value);
              changeText(value);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.makePaymentButton}
          onPress={() => navigation.navigate(SCREENS.PAYMENT_SUCCESS)}
        >
          <Text
            style={{
              color: COLORS.WHITE,
              fontSize: scale(15),
              fontFamily: FONTS.POPPINS_REGULAR,
            }}
          >
            Pay Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Background>
  );
};
export default MakePayment;
