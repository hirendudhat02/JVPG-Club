import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  useWindowDimensions,
  Modal,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import Share from "react-native-share";
import ViewShot from "react-native-view-shot";
import RNFS from "react-native-fs";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import ImageZoom from "react-native-image-pan-zoom";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import { scale } from "../../Utils/Helper/Scalling";
import { IMAGES } from "../../Utils/Images";
import { FONTS } from "../../Utils/Fonts";
import { COLORS } from "../../Utils/Colors";

const NewsDetail = ({ navigation, route }: { navigation: any; route: any }) => {
  const [data, setData] = useState<any[]>([]);
  const [zoomModal, setZoomModal] = useState<boolean>(false);
  const [zoomImage, setZoomImage] = useState<string>("");

  useEffect(() => {
    setData(route.params.data);
  }, [route?.params?.data]);
  //ViewShot Ref
  const viewShot = React.useRef<any>();
  const { width } = useWindowDimensions();
  const source = {
    html: data?.long_description,
  };
  //Take A Screen Shot
  const captureAndShareScreenshot = () => {
    viewShot.current.capture().then((uri: any) => {
      RNFS.readFile(uri, "base64").then((res) => {
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
  const systemFonts = [FONTS.POPPINS_REGULAR, ...defaultSystemFonts];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      style={{ flexGrow: 1, backgroundColor: "#f35856" }}
    >
      <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
        <Background>
          <Header
            onPress={() => navigation.goBack()}
            text={"News"}
            menuOnPress={() => navigation.openDrawer()}
          />
          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.mediaTitle}>{data?.news_title}</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: scale(20),
              }}
            ></View>
            <View
              style={[
                styles.footerMainContainer,
                {
                  marginTop:
                    data.length === 0 || data === null || data === undefined
                      ? scale(-10)
                      : scale(0),
                },
              ]}
            >
              <View style={{ marginHorizontal: scale(25) }}>
                <RenderHtml
                  contentWidth={width}
                  source={source}
                  systemFonts={systemFonts}
                />
              </View>
            </View>
          </View>

          <>
            <View style={styles.footerContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.cancelButton}
              >
                <Text style={styles.shareText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={captureAndShareScreenshot}
                style={styles.shareButton}
              >
                <Text style={styles.shareText}>Share</Text>
              </TouchableOpacity>
            </View>
            <Modal
              transparent
              visible={zoomModal}
              onRequestClose={() => setZoomModal(false)}
            >
              <View style={styles.modalContainer}>
                <StatusBar
                  animated={true}
                  backgroundColor={COLORS.BACKGROUND_COLOR}
                  barStyle="light-content"
                />
                {/* <Loader value={loading} /> */}
                <TouchableOpacity
                  onPress={() =>
                    data?.long_description == null ||
                    data?.long_description == ""
                      ? navigation.goBack()
                      : setZoomModal(false)
                  }
                  style={styles.modalCloseTouchable}
                >
                  <Image source={IMAGES.BACK_ICON} style={styles.modalClose} />
                </TouchableOpacity>
                <ViewShot ref={viewShot}>
                  <ImageZoom
                    panToMove={true}
                    pinchToZoom={true}
                    minScale={1}
                    maxScale={4}
                    cropHeight={Dimensions.get("screen").height / 1}
                    cropWidth={Dimensions.get("screen").width / 1}
                    imageHeight={Dimensions.get("screen").height / 1}
                    imageWidth={Dimensions.get("screen").width / 1}
                    style={styles.pinchImage}
                  >
                    <FastImage
                      source={{
                        uri: zoomImage,
                        priority: FastImage.priority.high,
                      }}
                      style={styles.zoomImage}
                      resizeMode="contain"
                      //   onLoadEnd={() => setLoading(false)}
                    />
                  </ImageZoom>
                </ViewShot>
                <TouchableOpacity
                  onPress={captureAndShareScreenshot}
                  style={styles.modalShareButton}
                >
                  <Text style={styles.modalShareText}>Share</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </>
          {/* )} */}
        </Background>
      </ViewShot>
    </ScrollView>
  );
};
export default NewsDetail;
