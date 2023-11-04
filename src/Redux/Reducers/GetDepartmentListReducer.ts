import {
  GET_DEPARTMENT_REQUEST,
  GET_DEPARTMENT_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetDepartmentReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_DEPARTMENT_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_DEPARTMENT_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
