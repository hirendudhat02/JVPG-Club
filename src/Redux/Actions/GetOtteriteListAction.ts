import * as TYPES from "../Services/Types";

export function GetOtteriteListResponse(data: any) {
  return {
    type: TYPES.GET_OTTERITE_RESPONSE,
    payload: data,
  };
}

export function GetOtteriteListRequest(data: any) {
  return {
    type: TYPES.GET_OTTERITE_REQUEST,
    data: data,
  };
}
