import { take, takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  ADD_EDIT_COMPLAINT_LIST_REQUEST,
  CLASS_LIST_REQUEST,
  DASHBOARD_REQUEST,
  GET_BANQUET_INQUIRY_REQUEST,
  GET_BOOK_WISHLIST_REQUEST,
  GET_CATEGORY_REQUEST,
  GET_COMPLAINT_REQUEST,
  GET_DEPARTMENT_REQUEST,
  GET_EVENT_LIST_REQUEST,
  GET_FACILITY_REQUEST,
  GET_MASSAGE_TIMESLOT_LIST_REQUEST,
  GET_OFFER_LIST_REQUEST,
  GET_OTTERITE_REQUEST,
  GET_RESTAURANT_LIST_REQUEST,
  GET_SETTING_LIST_REQUEST,
  LOGIN_REQUEST,
} from "../Services/Types";
import { loginSaga } from "./LoginSaga";
import { DashboardSaga } from "./DashboardSaga";
import { GetCategorySaga } from "./GetCategorySaga";
import { GetComplaintSaga } from "./GetComplaintSaga";
import { GetFacilityListSaga } from "./GetFacilityListSaga";
import { GetDepartmentListSaga } from "./GetDepartmentListSaga";
import { GetRestaurantListSaga } from "./GetRestaurantListSaga";
import { ClassListSaga } from "./ClassListSaga";
import { GetSettingListSaga } from "./GetSettingListSaga";
import { GetOtteriteListSaga } from "./GetOtteriteListSaga";
import { GetEventListSaga } from "./GetEventListSaga";
import { GetOfferListSaga } from "./GetOfferListSaga";
import { GetMassageTimeSlotListSaga } from "./GetMassageTimeSlotSaga";
import { AddEditComplaintSaga } from "./AddEditComplaintSaga";
import { GetBanquetInquirySaga } from "./GetBanquetInquirySaga";
import { GetBookWishlistSaga } from "./GetBookWishlistSaga";

export default function* root_saga() {
  yield all([
    takeEvery(LOGIN_REQUEST, loginSaga),
    takeEvery(DASHBOARD_REQUEST, DashboardSaga),
    takeEvery(GET_CATEGORY_REQUEST, GetCategorySaga),
    takeEvery(GET_COMPLAINT_REQUEST, GetComplaintSaga),
    takeEvery(GET_BOOK_WISHLIST_REQUEST, GetBookWishlistSaga),
    takeEvery(GET_FACILITY_REQUEST, GetFacilityListSaga),
    takeEvery(GET_DEPARTMENT_REQUEST, GetDepartmentListSaga),
    takeEvery(GET_RESTAURANT_LIST_REQUEST, GetRestaurantListSaga),
    takeEvery(CLASS_LIST_REQUEST, ClassListSaga),
    takeEvery(GET_SETTING_LIST_REQUEST, GetSettingListSaga),
    takeEvery(GET_OTTERITE_REQUEST, GetOtteriteListSaga),
    takeEvery(GET_EVENT_LIST_REQUEST, GetEventListSaga),
    takeEvery(GET_OFFER_LIST_REQUEST, GetOfferListSaga),
    takeEvery(GET_MASSAGE_TIMESLOT_LIST_REQUEST, GetMassageTimeSlotListSaga),
    takeEvery(ADD_EDIT_COMPLAINT_LIST_REQUEST, AddEditComplaintSaga),
    takeEvery(GET_BANQUET_INQUIRY_REQUEST, GetBanquetInquirySaga),

  ]);
}
