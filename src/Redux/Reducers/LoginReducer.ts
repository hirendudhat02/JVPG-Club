import { LOGIN_REQUEST, LOGIN_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const LoginReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case LOGIN_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
