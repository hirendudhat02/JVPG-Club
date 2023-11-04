import React, { useEffect, useState } from "react";
import Background from "../../Component/Background";
import Header from "../../Component/Header";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { scale } from "../../Utils/Helper/Scalling";
import { COLORS } from "../../Utils/Colors";
import { FONTS } from "../../Utils/Fonts";
import styles from "./styles";
import moment from "moment";
import { SCREENS } from "../../Utils/ScreenContant";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";
import {
  GetComplaintRequest,
  GetComplaintResponse,
} from "../../Redux/Actions/GetComplaintAction";

const ViewComplaint = ({ navigation }: { navigation: any }) => {
  const [data, setData] = useState<any>([]);
  const [viewComplaint, setViewComplaint] = useState<number>(0);
  const [complaint, setComplaint] = useState<any[]>([]);
  const complaintListRes = useSelector((state: any) => state.ComplaintList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (complaintListRes.data !== null) {
      if (complaintListRes?.data?.length > 0) {
        let newData: any[] = [];
        complaintListRes.data?.map((item: any, index: any) => {
          if (viewComplaint === 1) {
            if (item.complaint_type === "feedback") {
              newData.push(item);
            }
          } else {
            if (item.complaint_type === "complaint") {
              newData.push(item);
            }
          }
        });
        setComplaint([...newData]);
        setData(complaintListRes.data);
      }
    } else {
      const payload = new FormData();
      AsyncStorage.getItem(KEY.DATA).then((val: any) => {
        let temp = JSON.parse(val);
        payload.append("member_id", temp.member_id);
        payload.append("auth_token", temp.auth_token);
        payload.append("start", "1");
        dispatch(GetComplaintRequest(payload));
      });
    }
  }, [complaintListRes.data]);

  const viewFeedbackOnPress = () => {
    let temp: any[] = data;
    let newData: any[] = [];
    temp.map((item: any, index: any) => {
      if (item.complaint_type === "feedback") {
        newData.push(item);
      }
    });
    setComplaint([...newData]);
  };
  const viewComplaintOnPress = () => {
    let temp: any[] = data;
    let newData: any[] = [];
    temp.map((item: any, index: any) => {
      if (item.complaint_type === "complaint") {
        newData.push(item);
      }
    });
    setComplaint([...newData]);
  };
  const complaintListRenderItem = ({
    item,
    index,
  }: {
    item: any;
    index: any;
  }) => (
    <View style={styles.renderMainContainer}>
      <Text style={styles.complaintIdKey}>
        {item.complaint_type === "complaint" ? "Comp. Id : " : "Feed. Id : "}
        <Text style={styles.complaintIdValue}>{item.complaint_id}</Text>
      </Text>
      <Text style={styles.complaintTitle}>
        {item.complaint_type === "complaint" ? "Complaint" : "Feedback"}{" "}
        {item.complaint_title}
      </Text>
      <Text style={styles.billNoText}>Bill No. {item.complaint_number}</Text>
      <View style={styles.dashContainer}>
        <Text style={styles.dateText}>
          Date of Comp.:
          <Text style={{ fontFamily: FONTS.POPPINS_MEDIUM }}>
            {" "}
            {moment(item.created_at).format("DD MMM-YY")}{" "}
          </Text>{" "}
          {"   |"}
        </Text>
        <Text style={styles.departmentText}>
          {" "}
          Department:
          <Text style={{ fontFamily: FONTS.POPPINS_MEDIUM }}>
            {" "}
            {item.department_name}
          </Text>
        </Text>
      </View>
      <Text style={styles.complaintDesc}>{item.description}</Text>
    </View>
  );
  return (
    <Background>
      <Header
        onPress={() => {
          dispatch(GetComplaintResponse(null));
          navigation.goBack();
        }}
        text={"Complaint/Feedback"}
        menuOnPress={() => navigation.openDrawer()}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSubContainer}
          onPress={() => {
            setViewComplaint(0);
            setComplaint([]);
            viewComplaintOnPress();
          }}
        >
          <Text style={styles.buttonText}>View Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonSubContainer}
          onPress={() => {
            setViewComplaint(1);
            setComplaint([]);
            viewFeedbackOnPress();
          }}
        >
          <Text>View Feedback</Text>
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
      <FlatList
        data={complaint}
        renderItem={complaintListRenderItem}
        contentContainerStyle={{ paddingBottom: scale(10) }}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.addComplaintButton}
          onPress={() => navigation.navigate(SCREENS.ADD_COMPLAINT)}
        >
          <Text style={styles.addComplaintText}>
            Make Complaint/Give Feedback
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default ViewComplaint;
