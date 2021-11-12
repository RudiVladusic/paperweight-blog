const isEditingReducer = (state = false, action) => {
  switch (action.type) {
    case "EDITING":
      return (state = true);
    case "NOT_EDITING":
      return (state = false);
    default:
      return state;
  }
};

export default isEditingReducer;
