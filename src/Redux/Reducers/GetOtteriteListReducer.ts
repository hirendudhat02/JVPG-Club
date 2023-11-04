import { GET_OTTERITE_REQUEST, GET_OTTERITE_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const GetOtteriteListReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_OTTERITE_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_OTTERITE_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
