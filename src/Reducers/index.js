import { combineReducers } from "redux";
import blogReducer from "./blogList";
import isEditingReducer from "./isEditing";
import userInfoReducer from "./userInfo";

const rootReducer = combineReducers({
  isEditing: isEditingReducer,
  blogList: blogReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
