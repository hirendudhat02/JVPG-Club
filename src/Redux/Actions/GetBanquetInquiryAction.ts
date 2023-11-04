import * as TYPES from "../Services/Types";
export function GetBanquetInquiryResponse(data: any) {
  return {
    type: TYPES.GET_BANQUET_INQUIRY_RESPONSE,
    payload: data,
  };
}

export function GetBanquetInquiryRequest(data: any) {
  return {
    type: TYPES.GET_BANQUET_INQUIRY_REQUEST,
    data: data,
  };
}
