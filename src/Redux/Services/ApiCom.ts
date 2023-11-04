import NetInfo from "@react-native-community/netinfo";
import ApiConstants from "./ApiConstants";

export async function ApiCall(method: any, api: any, bodyData: any) {
  try {
    const isConnected = await NetInfo.fetch();

    if (isConnected.isConnected) {
      if (method === "POST") {
        return fetch(ApiConstants.BASE_URL + api, {
          method: method,
          body: bodyData,
        });
      } else {
        return fetch(ApiConstants.BASE_URL + api, {
          method: method,
        });
      }
    } else {
    }
  } catch (error) {}
}
