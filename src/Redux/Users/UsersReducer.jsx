import {
  ADD_ALL_USERS,
  ADD_SINGLE_USER,
} from "./UsersTypes";

const initialState = {
  users: [],
  usersLoading:true,
  currentUser:null,
  totalPage:0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SINGLE_USER: 
      return{
        ...state,
        currentUser:action.data,
        currentUserLoading:false
      }
    case ADD_ALL_USERS:
      return {
        ...state,
        users : action.data.data,
        totalPage:action.data.total_pages,
        usersLoading:false,
      };
    default:
      return state;
  }
};

export default reducer;
