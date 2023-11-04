import { GET_FACILITY_REQUEST, GET_FACILITY_RESPONSE } from "../Services/Types";

const initialState = {
  data: null,
};

export const GetFacilityReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_FACILITY_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_FACILITY_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
