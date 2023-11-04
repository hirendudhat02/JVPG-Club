import {GET_BANQUET_INQUIRY_REQUEST, GET_BANQUET_INQUIRY_RESPONSE, } from "../Services/Types";

const initialState = {
  data: null,
};

export const BanquetInquiryReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_BANQUET_INQUIRY_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_BANQUET_INQUIRY_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
