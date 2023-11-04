import * as TYPES from "../Services/Types";

export function GetMassageTimeslotListResponse(data: any) {
  return {
    type: TYPES.GET_MASSAGE_TIMESLOT_LIST_RESPONSE,
    payload: data,
  };
}

export function GetMassageTimeslotListRequest(data: any) {
  return {
    type: TYPES.GET_MASSAGE_TIMESLOT_LIST_REQUEST,
    data: data,
  };
}
