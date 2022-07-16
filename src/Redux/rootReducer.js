import { combineReducers } from "redux";
import UsersReducer from './Users/UsersReducer'
const rootReducer = combineReducers({
    users:UsersReducer
});

export default rootReducer;
