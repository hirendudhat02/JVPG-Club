import { put, call } from "redux-saga/effects";
import { ApiCall } from "../Services/ApiCom";
import { Method } from "../Services/ApiMethod";
import ApiConstants from "../Services/ApiConstants";
import { LoaderAction } from "../Actions/LoaderAction";
import { AlertResponse } from "../Actions/AlertAction";
import { GetCategoryResponse } from "../Actions/GetCategoryAction";

export function* GetCategorySaga(action: any): any {
  const { data } = action;
  console.log("GetCategorySaga action ::", action);

  try {
    const response = yield call(
      ApiCall,
      Method.POST,
      ApiConstants.GET_CATEGORY_LIST,
      data
    );

    let responseJson = yield response.json();
    console.log("responseJson ::", responseJson);

    if (responseJson.response_code === 200) {
      yield put(GetCategoryResponse(responseJson.data));
      yield put(LoaderAction(false));
      yield put(AlertResponse(null));
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
        des: responseJson.message,
      };
      yield put(AlertResponse(payload));
    }
  } catch (err) {
    yield put(LoaderAction(false));
    const payload = {
      modal: true,
      des: err,
    };
    yield put(AlertResponse(payload));
  }
}
