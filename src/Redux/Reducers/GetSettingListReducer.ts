import {
  GET_SETTING_LIST_REQUEST,
  GET_SETTING_LIST_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetSettingListListReducer = (
  state = initialState,
  action: any
) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_SETTING_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_SETTING_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
