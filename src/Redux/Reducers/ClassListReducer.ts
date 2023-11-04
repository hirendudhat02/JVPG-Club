import { CLASS_LIST_REQUEST, CLASS_LIST_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const ClassListReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case CLASS_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case CLASS_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
