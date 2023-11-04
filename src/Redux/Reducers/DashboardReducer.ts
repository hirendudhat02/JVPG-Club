import { DASHBOARD_REQUEST, DASHBOARD_RESPONSE, } from "../Services/Types";

const initialState = {
  data: null,
};

export const DashboardReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case DASHBOARD_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case DASHBOARD_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
