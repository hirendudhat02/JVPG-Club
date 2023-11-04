import * as TYPES from "../Services/Types";

export function AddMassageResponse(data: any) {
  return {
    type: TYPES.ADD_MASSAGE_RESPONSE,
    payload: data,
  };
}

export function AddMassageRequest(data: any) {
  return {
    type: TYPES.ADD_MASSAGE_REQUEST,
    data: data,
  };
}
