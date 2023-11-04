import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  PermissionsAndroid,
  View,
} from "react-native";
import styles from "./styles";
import { COLORS } from "../../Utils/Colors";
import { scale } from "../../Utils/Helper/Scalling";
import { FONTS } from "../../Utils/Fonts";
import { IMAGES } from "../../Utils/Images";
import { SCREENS } from "../../Utils/ScreenContant";
import ImagePicker from "react-native-image-crop-picker";
import Button from "../../Component/Button";
import Dropdown from "../../Component/DropDown";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import { GetDepartmentListRequest } from "../../Redux/Actions/GetDepartmentListAction";
import { AddEditComplaintRequest } from "../../Redux/Actions/AddEditComplaintAction";
import { GetComplaintResponse } from "../../Redux/Actions/GetComplaintAction";

const AddComplaint = ({ navigation }: { navigation: any }) => {
  const [viewComplaint, setViewComplaint] = useState<number>(0);
  const [complaint, setComplaint] = useState<string>("complaint");
  const [description, setDescription] = useState<string>("");
  const [choosePhoto, setChoosePhoto] = useState<boolean>(false);
  const [departments, setDepartments] = useState<any>([]);
  const [department, setDepartment] = useState<string>("");
  const [images, setImage] = useState<any>(null);
  const departmentListRes = useSelector((state: any) => state.DepartmentList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (departmentListRes.data !== null) {
      if (departmentListRes?.data?.length > 0) {
        const listNow: object[] = [];
        departmentListRes.data?.map((item) => {
          listNow.push({
            label: item?.department_name,
            value: item?.department_id,
          });
        });
        setDepartments(listNow);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        dispatch(GetDepartmentListRequest(payload));
      });
    }
  }, [departmentListRes.data]);

  const chooseFile = async () => {
    let granted;
    if (Platform.OS === "android") {
      try {
        const androidVersion = Platform.Version;
        if (androidVersion >= 30) {
          granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            {
              title: "External Storage Write Permission",
              message: "App needs write permission",
            }
          );
        } else {
          granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: "External Storage Write Permission",
              message: "App needs write permission",
            }
          );
        }
      } catch (err) {
        console.warn(err);
        alert("Write permission err", err);
      }
    }
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openPicker({
        multiple: true,
        cropping: true,
        includeBase64: true,
        width: 300,
        height: 400,
      })
        .then((images) => {
          const imagesList = images?.map((imageObj) => {
            const image = imageObj.path;
            return {
              // @ts-ignore
              name: image.replace(/^.*[\\\/]/, ""),
              type: "image/jpg",
              uri: image,
            };
          });
          setImage(imagesList);
          setChoosePhoto(false);
        })
        .catch((e) => {
          console.log("e ::", e);
          setChoosePhoto(false);
        });
    }
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      // cropping: true,
    })
      .then((image) => {
        setImage(image.path);
        setChoosePhoto(false);
      })
      .catch((e) => {
        setChoosePhoto(false);
      });
  };

  const handleSave = () => {
    const payload = new FormData();
    AsyncStorage.getItem(KEY.DATA).then((val: any) => {
      let temp = JSON.parse(val);
      payload.append("member_id", temp.member_id);
      payload.append("auth_token", temp.auth_token);
      payload.append("complaint_type", complaint);
      payload.append("department_id", department);
      payload.append("description", description);
      if (images !== null) {
        images?.map((image, index) => {
          payload.append("complaint_photo[]", images[index]);
        });
      }
      console.log("i am save............", payload);
      dispatch(AddEditComplaintRequest(payload));
      dispatch(GetComplaintResponse(null));
      navigation.navigate(SCREENS.COMPLAINT_SUCCESS, {
        comp: viewComplaint === 0 ? "Complaint" : "Feedback",
        id: "#1877",
      });
    });
  };
  return (
    <Background>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView>
            <Header
              onPress={() => navigation.goBack()}
              text={"New Complaint/Feedback"}
              menuOnPress={() => navigation.openDrawer()}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonSubContainer}
                onPress={() => {
                  setViewComplaint(0);
                  setComplaint("complaint");
                }}
              >
                <Text style={styles.buttonText}>Complaints</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonSubContainer}
                onPress={() => {
                  setViewComplaint(1);
                  setComplaint("feedback");
                }}
              >
                <Text style={styles.buttonText}>Feedback</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.barContainer}>
              <View
                style={[
                  styles.barStyle,
                  {
                    backgroundColor:
                      viewComplaint === 0 ? COLORS.WHITE : COLORS.BLACK,
                  },
                ]}
              />
              <View
                style={[
                  styles.barStyle,
                  {
                    backgroundColor:
                      viewComplaint === 1 ? COLORS.WHITE : COLORS.BLACK,
                  },
                ]}
              />
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.dropdownText}>Select Department</Text>
              {/* <View style={styles.depDropContainer}>
                <Text style={styles.selectDropdownText}>Select Department</Text>
                <Image source={IMAGES.DOWN_ARROW} style={styles.downArrow} />
              </View> */}
              <Dropdown
                placeHolder="Select Department"
                options={departments}
                selectedOption={department}
                setSelectedOption={setDepartment}
              />
              <Text style={[styles.dropdownText, { marginTop: scale(20) }]}>
                Description
              </Text>
              <TextInput
                value={description}
                onChangeText={(val: any) => setDescription(val)}
                style={styles.desInput}
                multiline
                placeholder="Enter Description"
                placeholderTextColor={COLORS.MEDIUM_GREY}
              />
              <TouchableOpacity
                style={{ marginTop: scale(20), marginLeft: scale(5) }}
                onPress={() => setChoosePhoto(true)}
              >
                <Text
                  style={{
                    fontSize: scale(13),
                    color: COLORS.WHITE,
                    fontFamily: FONTS.POPPINS_MEDIUM,
                  }}
                >
                  Attach Photo
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
              <Button onPress={() => handleSave()} text="Save" />
            </View>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={choosePhoto}
              onRequestClose={() => setChoosePhoto(false)}
            >
              <View style={styles.modalContainer}>
                <StatusBar
                  animated={true}
                  backgroundColor={COLORS.BACKGROUND_COLOR}
                  barStyle="light-content"
                />
                <View style={styles.subModalContainer}>
                  <View style={styles.subModalContainer2}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.titleModalText}>Choose Photo</Text>
                    </View>
                    <View style={styles.closeContainer}>
                      <TouchableOpacity onPress={() => setChoosePhoto(false)}>
                        <Image
                          source={IMAGES.CLOSE}
                          style={styles.closeImg}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.cameraMainContainer}>
                    <TouchableOpacity
                      style={styles.cameraSubContainer}
                      onPress={() => openCamera()}
                    >
                      <View style={styles.cameraContainer}>
                        <Image
                          source={IMAGES.CAMERA}
                          style={styles.cameraImg}
                        />
                      </View>
                      <Text style={styles.cameraText}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.cameraSubContainer}
                      onPress={chooseFile}
                    >
                      <View style={styles.cameraContainer}>
                        <Image
                          source={IMAGES.DIRECTORY}
                          style={styles.cameraImg}
                        />
                      </View>
                      <Text style={styles.cameraText}>Choose File</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Background>
  );
};
export default AddComplaint;
