import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IMAGES } from "../../Utils/Images";
import styles from "./styles";
import { SCREENS } from "../../Utils/ScreenContant";

const ComplaintSuccess = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={
          route?.params?.comp === "Complaint"
            ? "Complaint Received"
            : "Feedback Received"
        }
        menuOnPress={() => navigation.open()}
      />
      <View style={styles.successContainer}>
        <Image
          source={IMAGES.SUCCESS_WRITE}
          style={styles.writeImage}
          resizeMode="contain"
        />
        <Text style={styles.successText}>Successful</Text>
        <Text style={styles.feedText}>
          {`${
            route?.params?.comp === "Complaint" ? "Complaint" : "Feedback"
          }: ${route?.params?.id}`}
        </Text>
        <Text style={styles.successDes}>
          Thank you for submitting your feedback.
        </Text>
        <Text style={styles.successDes2}>
          Club admin will revert to you shortly.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.backFeedbackButton}
          onPress={() => navigation.navigate(SCREENS.VIEW_COMPLAINT)}
        >
          <Text style={styles.buttonText}>
            Back to{" "}
            {route?.params?.comp === "Complaint" ? "Complaint" : "Feedback"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate(SCREENS.DASHBOARD)}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default ComplaintSuccess;
