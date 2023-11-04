import {
  ADD_EDIT_COMPLAINT_LIST_REQUEST,
  ADD_EDIT_COMPLAINT_LIST_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const AddEditComplaintReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case ADD_EDIT_COMPLAINT_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case ADD_EDIT_COMPLAINT_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
