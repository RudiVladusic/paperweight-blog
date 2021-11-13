const initialState = {
  isLoggedIn: false,
  isError: false,
  info: {
    username: "admin",
    password: "admin123",
  },
};

const userInfoReducer = (state = initialState, action) => {
  const validate = (account, loginInfo) => {
    const keys1 = Object.keys(account);
    const keys2 = Object.keys(loginInfo);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (account[key] !== loginInfo[key]) {
        return false;
      }
    }

    return true;
  };

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
      return (state = false);
    default:
      return state;
  }
};

export default userInfoReducer;
