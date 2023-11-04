import * as TYPES from "../Services/Types";

export function GetBookWishlistResponse(data: any) {
  return {
    type: TYPES.GET_BOOK_WISHLIST_RESPONSE,
    payload: data,
  };
}

export function GetBookWishlistRequest(data: any) {
  return {
    type: TYPES.GET_BOOK_WISHLIST_REQUEST,
    data: data,
  };
}
