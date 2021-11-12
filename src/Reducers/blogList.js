const defaultState = JSON.parse(localStorage.getItem("blog-list"));
const saveToLocalStorage = (items) => {
  localStorage.setItem("blog-list", JSON.stringify(items));
};
const blogReducer = (state = defaultState || [], action) => {
  switch (action.type) {
    case "ADD_NEW":
      saveToLocalStorage([...state, action.payload]);
      return [...state, action.payload];

    case "DELETE_BLOG":
      const rest = state.filter((ide) => ide.id !== action.payload);
      saveToLocalStorage(rest);
      return rest;

    case "UPDATE_BLOG":
      const update = state.map((items) => {
        return items.id === action.payload.id
          ? (items.body = action.payload.body)
          : items;
      });
      saveToLocalStorage(update);
      return update;
    default:
      return state;
  }
};

export default blogReducer;
