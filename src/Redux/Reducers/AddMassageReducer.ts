import { ADD_MASSAGE_REQUEST,ADD_MASSAGE_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const AddMassageReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case ADD_MASSAGE_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case ADD_MASSAGE_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
