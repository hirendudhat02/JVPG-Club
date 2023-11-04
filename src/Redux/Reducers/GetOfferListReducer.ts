import {
  GET_OFFER_LIST_REQUEST,
  GET_OFFER_LIST_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetOfferListReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_OFFER_LIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_OFFER_LIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
