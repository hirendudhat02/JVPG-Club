import * as TYPES from "../Services/Types";

export function GetSettingListResponse(data: any) {
  return {
    type: TYPES.GET_SETTING_LIST_RESPONSE,
    payload: data,
  };
}

export function GetSettingListRequest(data: any) {
  return {
    type: TYPES.GET_SETTING_LIST_REQUEST,
    data: data,
  };
}
