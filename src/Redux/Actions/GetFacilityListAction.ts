import * as TYPES from "../Services/Types";

export function GetFacilityListResponse(data: any) {
  return {
    type: TYPES.GET_FACILITY_RESPONSE,
    payload: data,
  };
}

export function GetFacilityListRequest(data: any) {
  return {
    type: TYPES.GET_FACILITY_REQUEST,
    data: data,
  };
}
