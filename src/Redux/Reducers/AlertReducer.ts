import { ALERT_REQUEST, ALERT_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const AlertReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case ALERT_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case ALERT_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
