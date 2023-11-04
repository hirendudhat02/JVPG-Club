import React from "react";
import Background from "../../Component/Background";
import { IMAGES } from "../../Utils/Images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Component/Header";
import { SCREENS } from "../../Utils/ScreenContant";
import styles from "./styles";

const RaiseIssueSuccess = ({ navigation }: { navigation: any }) => {
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Issue Raised"}
        menuOnPress={() => navigation.open()}
      />
      <View style={styles.successContainer}>
        <Image
          source={IMAGES.SUCCESS_WRITE}
          style={styles.writeImage}
          resizeMode="contain"
        />
        <Text style={styles.successText}>Successful</Text>
        <Text style={styles.feedText}>Ticket Id: C000123</Text>
        <Text style={styles.successDes}>
          your issue hase been filled. Thank you for pointing out the error in
          your billing
        </Text>
        <Text style={styles.successDes2}>
          Club admin will look into the same and revert back shortly
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.backFeedbackButton}
          onPress={() => navigation.navigate(SCREENS.BILLING)}
        >
          <Text style={styles.buttonText}>View Billing</Text>
        </TouchableOpacity>
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
export default RaiseIssueSuccess;
