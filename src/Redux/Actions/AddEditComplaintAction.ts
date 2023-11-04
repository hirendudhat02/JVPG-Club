import * as TYPES from "../Services/Types";
export function AddEditComplaintResponse(data: any) {
  return {
    type: TYPES.ADD_EDIT_COMPLAINT_LIST_RESPONSE,
    payload: data,
  };
}

export function AddEditComplaintRequest(data: any) {
  return {
    type: TYPES.ADD_EDIT_COMPLAINT_LIST_REQUEST,
    data: data,
  };
}
