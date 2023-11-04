import * as TYPES from "../Services/Types";
export function LoginResponse(data: any) {
  return {
    type: TYPES.LOGIN_RESPONSE,
    payload: data,
  };
}

export function LoginRequest(data: any, navigation: any) {
  return {
    type: TYPES.LOGIN_REQUEST,
    data: data,
    navigation: navigation,
  };
}
