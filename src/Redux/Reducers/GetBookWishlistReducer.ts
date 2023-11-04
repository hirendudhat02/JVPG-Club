import {
  GET_BOOK_WISHLIST_REQUEST,
  GET_BOOK_WISHLIST_RESPONSE,
} from "../Services/Types";

const initialState = {
  data: null,
};

export const GetBookWishlistReducer = (state = initialState, action: any) => {
  const prevState = { ...state };
  const { type } = action;

  switch (type) {
    case GET_BOOK_WISHLIST_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_BOOK_WISHLIST_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
