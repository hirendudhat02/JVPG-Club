import React from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar } from "react-native";
import styles from "./style";
import { COLORS } from "../../Utils/Colors";

interface alertProps {
  openModal?: any;
  closeModal?: () => void;
  message?: string;
}

const AlertModal = (props: alertProps) => {
  const { openModal, closeModal, message } = props;
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={openModal}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.BACKGROUND_COLOR}
          barStyle="light-content"
        />
        <View style={styles.modalSuccessSubContainer}>
          <Text style={styles.thankyouMessage}>{message}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.okButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default AlertModal;
