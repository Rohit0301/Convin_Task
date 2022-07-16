
import { FETCH_ALL_USERS, FETCH_SINGLE_USERS } from "../../Api/PathConstants";
import { Request } from "../../Api/Request";
import {
ADD_SINGLE_USER,
ADD_ALL_USERS
} from "./UsersTypes";

export const AddUserDetails = (data) => {
  return {
    type: ADD_ALL_USERS,
    data:data
  };
};

export const AddsingleUserDetails = (data) => {
  return {
    type: ADD_SINGLE_USER,
    data:data
  };
};

export const FetchAllUsers = (pageNo) => {
  return async (dispatch) => {
      const res = await Request("GET", `${FETCH_ALL_USERS}?page=${pageNo}`);
      if (res && res.status === 200) {
        await dispatch(AddUserDetails(res.data));
      }
  };
};

export const FetchSingleUser = (user_id) => {
  return async (dispatch) => {
      const res = await Request("GET", `${FETCH_SINGLE_USERS}${user_id}`);
      if (res && res.status === 200) {
        await dispatch(AddsingleUserDetails(res.data.data));
      }
  };
};

