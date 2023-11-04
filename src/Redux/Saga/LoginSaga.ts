import { put, call } from "redux-saga/effects";
import { ApiCall } from "../Services/ApiCom";
import { Method } from "../Services/ApiMethod";
import ApiConstants from "../Services/ApiConstants";
import { LoginResponse } from "../Actions/LoginAction";
import { LoaderAction } from "../Actions/LoaderAction";
import { AlertResponse } from "../Actions/AlertAction";
import { SCREENS } from "../../Utils/ScreenContant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KEY } from "../../Utils/AsyncKey";

export function* loginSaga(action: any): any {
  const { data, navigation } = action;
  console.log("loginSaga action ::", action);
  let responseJson;
  try {
    const response = yield call(ApiCall, Method.POST, ApiConstants.LOGIN, data);

    responseJson = yield response.json();
    console.log("responseJson ::", responseJson);
    console.log("responseJson ::", responseJson.auth_token);

    if (responseJson.response_code === 200 && responseJson.data !== null) {
      yield put(LoginResponse(responseJson.data));
      yield put(LoaderAction(false));
      yield put(AlertResponse(null));
      navigation.navigate(SCREENS.STACK_NAVIGATOR);
      AsyncStorage.setItem(KEY.DATA, JSON.stringify(responseJson.data));
      AsyncStorage.setItem(KEY.TOKEN, responseJson.data.auth_token);
    } else if (responseJson.response_code === 401) {
      yield put(LoaderAction(false));
      const payload = {
        modal: true,
        des: responseJson.message,
      };
      yield put(AlertResponse(payload));
    } else if (responseJson.response_code === 400) {
      const payload = {
        modal: true,
        des: responseJson.message,
      };
      yield put(AlertResponse(payload));
    } else {
      yield put(LoaderAction(false));
      const payload = {
        modal: true,
        des: "Invalid member id and password.",
      };
      yield put(AlertResponse(payload));
    }
  } catch (err) {
    yield put(LoaderAction(false));
    const payload = {
      modal: true,
      des: "Something went wrong!",
    };
    yield put(AlertResponse(payload));
  }
}
