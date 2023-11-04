import React from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { Text, View } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import styles from "./styles";

const BanquetSuccess = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  console.log("route.params.data ::", route.params.data);
  return (
    <Background>
      <Header
        onPress={() => navigation.goBack()}
        text={"Banquet Booked"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <Text style={styles.titleText}>Request Received!</Text>
      <View style={{backgroundColor:COLORS.WHITE,}}>

      </View>
    </Background>
  );
};
export default BanquetSuccess;
