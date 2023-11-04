import React from "react";
import { IMAGES } from "../../Utils/Images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Component/Header";
import { SCREENS } from "../../Utils/ScreenContant";
import Background from "../../Component/Background";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";

const PaymentSuccess = ({ navigation }: { navigation: any }) => {
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Complaint Received"}
        menuOnPress={() => navigation.open()}
      />
      <View style={styles.successContainer}>
        <Image
          source={IMAGES.SUCCESS_WRITE}
          style={styles.writeImage}
          resizeMode="contain"
        />
        <Text style={styles.successText}>Payment Successful</Text>
        <Text style={styles.feedText}>yay! your payment has been received</Text>
        <Text style={styles.successDes}>
          Transaction Id: pay_Ltn60NEKEQEZvy
        </Text>
        <Text style={styles.successDes2}>
          will be reflected in Club Account in 1 hr.
        </Text>
        <View style={[styles.amountContainer, { marginTop: scale(30) }]}>
          <View style={{ flex: 7 }}>
            <Text style={styles.amountTitle}>Total Amount Paid</Text>
          </View>
          <Text style={styles.amountValue}>Rs 0.00</Text>
        </View>
        <View style={styles.amountContainer}>
          <View style={{ flex: 7 }}>
            <Text style={styles.amountTitle}>Paid By</Text>
          </View>
          <Text style={styles.amountValue}>Online</Text>
        </View>
        <View style={[styles.amountContainer,{paddingBottom:scale(30) }]}>
          <View style={{ flex: 7 }}>
            <Text style={styles.amountTitle}>Transaction Date</Text>
          </View>
          <Text style={styles.amountValue}>21-June-2023</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate(SCREENS.HOME)}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default PaymentSuccess;
