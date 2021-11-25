import { saveToLocalStorage } from "../Functions/saveToLocalStorage";
import validate from "../Functions/validate";
const checkLocalStorageForUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
  isLoggedIn: false,
  isError: false,

  info: checkLocalStorageForUser || {
    username: undefined,
    password: undefined,
  },
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      const checkLoginInfo = validate(state.info, action.payload);
      const checkErrorStatus = checkLoginInfo ? false : true;
      return {
        ...state,
        isLoggedIn: checkLoginInfo,
        isError: checkErrorStatus,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
      };

    case "REGISTER_USER":
      saveToLocalStorage("user", action.payload);

      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
