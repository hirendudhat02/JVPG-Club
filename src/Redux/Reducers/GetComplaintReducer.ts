import {
  GET_COMPLAINT_REQUEST,
  GET_COMPLAINT_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetComplaintReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_COMPLAINT_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_COMPLAINT_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
