import * as TYPES from "../Services/Types";
export function GetCategoryResponse(data: any) {
  return {
    type: TYPES.GET_CATEGORY_RESPONSE,
    payload: data,
  };
}

export function GetCategoryRequest(data: any) {
  return {
    type: TYPES.GET_CATEGORY_REQUEST,
    data: data,
  };
}
