import * as TYPES from "../Services/Types";

export function GetComplaintResponse(data: any) {
  return {
    type: TYPES.GET_COMPLAINT_RESPONSE,
    payload: data,
  };
}

export function GetComplaintRequest(data: any) {
  return {
    type: TYPES.GET_COMPLAINT_REQUEST,
    data: data,
  };
}
