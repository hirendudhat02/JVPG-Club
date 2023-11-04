import React from "react";
import { View, Text, Modal, TouchableOpacity, StatusBar } from "react-native";
import styles from "./style";
import { COLORS } from "../../Utils/Colors";

interface alertProps {
  openModal?: any;
  closeModal?: () => void;
  handleYes?:()=>void;
  message?: string;
}

const ConformAlert = (props: alertProps) => {
  const { openModal, closeModal,handleYes, message } = props;
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
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={handleYes}>
            <Text style={styles.okButton}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.okButton}>Cancel</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ConformAlert;
