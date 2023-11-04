import * as TYPES from "../Services/Types";

export function GetDepartmentListResponse(data: any) {
  return {
    type: TYPES.GET_DEPARTMENT_RESPONSE,
    payload: data,
  };
}

export function GetDepartmentListRequest(data: any) {
  return {
    type: TYPES.GET_DEPARTMENT_REQUEST,
    data: data,
  };
}
