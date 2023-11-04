import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
  Text,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import FastImage from "react-native-fast-image";
import RenderHTML from "react-native-render-html";
import { scale } from "../../Utils/Helper/Scalling";
import styles from "./styles";
import RNFS from "react-native-fs";
import ViewShot from "react-native-view-shot";
import Share from "react-native-share";
import { COLORS } from "../../Utils/Colors";
const OfferDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [data, setData] = useState([]);
  const source = {
    html: data?.description,
  };

  useEffect(() => {
    setData(route.params.data);
  }, []);

  const { width } = useWindowDimensions();
  const viewShot = React.useRef<any>();

  const iconRenderItem = ({ item, index }: { item: any; index: any }) => (
    <View style={styles.iconContainer}>
      <Image
        source={{ uri: item.key_feature_image }}
        style={styles.iconImage}
      />
      <Text style={styles.keyFeatureTitle}>{item.key_feature_title}</Text>
    </View>
  );
  //For Screen Shot And Share
  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri: any) => {
      RNFS.readFile(uri, "base64").then((res: any) => {
        let urlString = "data:image/jpeg;base64," + res;

        let options = {
          title: "Share Title",
          url: urlString,
          type: "image/jpeg",
        };

        Share.open(options)
          .then((res) => {})
          .catch((err) => {});
      });
    }),
      (error: any) => console.error("Oops, snapshot failed", error);
  };
  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        style={{ flexGrow: 1 }}
      >
        {/* ============== View shot For Capture ==============  */}

        <Background>
          <Header
            onPress={() => navigation.goBack()}
            text={"Offers"}
            menuOnPress={() => navigation.openDrawer()}
          />
          <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
            <View
              style={{
                width: Dimensions.get("screen").width / 1.12,
                alignSelf: "center",
                marginTop: scale(25),
                borderRadius: scale(20),
              }}
            >
              {data?.offer_media_data?.map((item: any, index: any) => (
                <FastImage
                  source={{
                    uri: item.media_file,
                    priority: FastImage.priority.high,
                  }}
                  style={styles.headerImage}
                  resizeMode="stretch"
                />
              ))}
              <View>
                <Text style={styles.mediaTitle}>{data?.offer_title}</Text>
              </View>
              {/* <FlatList
                data={data?.key_feature_data}
                renderItem={iconRenderItem}
                overScrollMode={"never"}
                contentContainerStyle={{
                  marginTop: scale(20),
                }}
              /> */}

              <Text style={styles.eventDescTitle}>About this Offer</Text>
              <RenderHTML
                contentWidth={width}
                source={source}
                baseStyle={styles.desStyle}
              />
            </View>
          </ViewShot>
        </Background>
        </ScrollView>

        <View style={styles.lastButtonContainer}>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={captureAndShareScreenshot}
              style={styles.shareButton}
            >
              <Text style={styles.shareText}>Share Offer</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Background>
  );
};
export default OfferDetails;
