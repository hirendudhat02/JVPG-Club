import React, { useState } from "react";
import { Alert, Keyboard, Text, TouchableOpacity, View } from "react-native";

//Styles
import styles from "./styles";

//Constants
import { scale } from "../../Utils/Helper/Scalling";
import { SCREENS } from "../../Utils/ScreenContant";
import ScreenHeader from "../../Component/ScreenHeader";
import Loader from "../../Component/Loader";
import Header from "../../Component/Header";
import Background from "../../Component/Background";

const RegisterDoneScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  //States
  const [loading, setLoading] = useState(false);

  //Handle Submit
  const onHandleChange = () => {
    setLoading(true);
    console.log("global.changePassword ::", global.changePassword);

    if (global.changePassword === true) {
      navigation.navigate(SCREENS.PROFILE);
      global.changePassword === false;
    } else {
      setTimeout(() => {
        navigation.navigate(SCREENS.LOGIN);
      }, 1000);
    }
  };

  return (
    // <View style={styles.mainContainer}>
    //   {/* ================== Loader ===================  */}
    //   {/* <Loader value={loading} /> */}

    //   {/* ================== Header ===================  */}
    //   <ScreenHeader headText="That was quick" />
    //   {/* ================== Login Button ===================  */}
    //   <View
    //     style={{
    //       justifyContent: "center",
    //       alignItems: "center",
    //       marginVertical: scale(20),
    //     }}
    //   >
    //     <TouchableOpacity
    //       style={styles.buttonStyle}
    //       onPress={() => onHandleChange()}
    //     >
    //       <Text
    //         style={styles.submitText}
    //         numberOfLines={2}
    //         adjustsFontSizeToFit
    //       >
    //         Back to {global.changePassword === true ? "Profile" : "Login"}
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <Background>
      <View style={{ marginTop: scale(10) }}>
        <Header text={"Success"} onPress={()=>navigation.goBack()}/>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.titleText}>That was Quick</Text>
      
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onHandleChange()}
        >
          <Text style={styles.buttonText}>
            Back to {global.changePassword === true ? "Profile" : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default RegisterDoneScreen;
