import { GET_CATEGORY_REQUEST, GET_CATEGORY_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const GetCategoryReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_CATEGORY_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
