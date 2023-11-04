import * as TYPES from "../Services/Types";
export function DashboardResponse(data: any) {
  return {
    type: TYPES.DASHBOARD_RESPONSE,
    payload: data,
  };
}

export function DashboardRequest(data: any) {
  return {
    type: TYPES.DASHBOARD_REQUEST,
    data: data,
  };
}
