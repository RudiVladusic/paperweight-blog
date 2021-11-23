import { saveToLocalStorage } from "../Functions/saveToLocalStorage";
const blogKeyString = "blog-list";
const defaultState = JSON.parse(localStorage.getItem(blogKeyString));
const blogReducer = (state = defaultState || [], action) => {
  switch (action.type) {
    case "ADD_NEW":
      const addSingleBlog = [...state, action.payload];
      saveToLocalStorage(blogKeyString, addSingleBlog);
      return addSingleBlog;

    case "DELETE_BLOG":
      const deleteSingleBlog = state.filter((ide) => ide.id !== action.payload);
      saveToLocalStorage(blogKeyString, deleteSingleBlog);
      return deleteSingleBlog;

    case "UPDATE_BLOG":
      const updateSingleBlog = state.map((item) => {
        return item.id === action.payload.id
          ? (item = action.payload.currentBlog)
          : item;
      });
      saveToLocalStorage(blogKeyString, updateSingleBlog);
      return updateSingleBlog;
    default:
      return state;
  }
};

export default blogReducer;
