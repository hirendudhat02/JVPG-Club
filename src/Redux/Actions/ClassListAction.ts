import * as TYPES from "../Services/Types";
export function ClassListResponse(data: any) {
  return {
    type: TYPES.CLASS_LIST_RESPONSE,
    payload: data,
  };
}

export function ClassListRequest(data: any) {
  return {
    type: TYPES.CLASS_LIST_REQUEST,
    data: data,
  };
}
