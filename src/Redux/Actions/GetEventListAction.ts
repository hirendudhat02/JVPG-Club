import * as TYPES from "../Services/Types";

export function GetEventListResponse(data: any) {
  return {
    type: TYPES.GET_EVENT_LIST_RESPONSE,
    payload: data,
  };
}

export function GetEventListRequest(data: any) {
  return {
    type: TYPES.GET_EVENT_LIST_REQUEST,
    data: data,
  };
}
