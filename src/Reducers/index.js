import { combineReducers } from "redux";
import blogReducer from "./blogList";
import isEditingReducer from "./isEditing";

const rootReducer = combineReducers({
  isEditing: isEditingReducer,
  blogList: blogReducer,
});

export default rootReducer;
