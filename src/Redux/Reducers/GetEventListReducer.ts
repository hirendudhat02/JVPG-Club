import {
  GET_EVENT_LIST_REQUEST,
  GET_EVENT_LIST_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetEventListReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_EVENT_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_EVENT_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
