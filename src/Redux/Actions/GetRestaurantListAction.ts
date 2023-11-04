import * as TYPES from "../Services/Types";

export function GetRestaurantListResponse(data: any) {
  return {
    type: TYPES.GET_RESTAURANT_LIST_RESPONSE,
    payload: data,
  };
}

export function GetRestaurantListRequest(data: any) {
  return {
    type: TYPES.GET_RESTAURANT_LIST_REQUEST,
    data: data,
  };
}
