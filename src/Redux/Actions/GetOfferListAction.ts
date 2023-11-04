import * as TYPES from "../Services/Types";

export function GetOfferListResponse(data: any) {
  return {
    type: TYPES.GET_OFFER_LIST_RESPONSE,
    payload: data,
  };
}

export function GetOfferListRequest(data: any) {
  return {
    type: TYPES.GET_OFFER_LIST_REQUEST,
    data: data,
  };
}
