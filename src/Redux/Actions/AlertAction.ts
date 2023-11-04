import * as Type from "../Services/Types";

export const AlertResponse = (payload: any) => ({
  type: Type.ALERT_RESPONSE,
  payload: payload,
});
export const AlertRequest = () => ({
  type: Type.ALERT_REQUEST,
});
