import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { LoaderReducer } from "./LoaderReducer";
import { AlertReducer } from "./AlertReducer";
import { DashboardReducer } from "./DashboardReducer";
import { GetCategoryReducer } from "./GetCategoryReducer";
import { GetComplaintReducer } from "./GetComplaintReducer";
import { GetFacilityReducer } from "./GetFacilityReducer";
import { GetDepartmentReducer } from "./GetDepartmentListReducer";
import { GetRestaurantListReducer } from "./GetRestaurantListReducer";
import { ClassListReducer } from "./ClassListReducer";
import { GetSettingListListReducer } from "./GetSettingListReducer";
import { GetOtteriteListReducer } from "./GetOtteriteListReducer";
import { GetEventListReducer } from "./GetEventListReducer";
import { GetOfferListReducer } from "./GetOfferListReducer";
import { GetMassageTimeSlotListReducer } from "./GetMassageTimeSlotReducer";
import { AddEditComplaintReducer } from "./AddEditComplaintReducer";
import { BanquetInquiryReducer } from "./GetBanquetInquiryReducer";
import { AddMassageReducer } from "./AddMassageReducer";
import { GetBookWishlistReducer } from "./GetBookWishlistReducer";

export default combineReducers({
  Login: LoginReducer,
  Loader: LoaderReducer,
  Alert: AlertReducer,
  Dashboard: DashboardReducer,
  CategoryList: GetCategoryReducer,
  ComplaintList: GetComplaintReducer,
  BookWishList: GetBookWishlistReducer,
  FacilityList: GetFacilityReducer,
  AddMassage:AddMassageReducer,
  DepartmentList: GetDepartmentReducer,
  RestaurantList: GetRestaurantListReducer,
  ClassList: ClassListReducer,
  getSettingList: GetSettingListListReducer,
  OtteriteList: GetOtteriteListReducer,
  EventList: GetEventListReducer,
  OfferList: GetOfferListReducer,
  GetMassageTimeSlot: GetMassageTimeSlotListReducer,
  AddEditComplaint: AddEditComplaintReducer,
  BanquetInquiry: BanquetInquiryReducer,
});
