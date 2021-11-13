const defaultState = JSON.parse(localStorage.getItem("blog-list"));

const blogReducer = (state = defaultState || [], action) => {
  const saveToLocalStorage = (blogList) => {
    localStorage.setItem("blog-list", JSON.stringify(blogList));
  };

  switch (action.type) {
    case "ADD_NEW":
      const addSingleBlog = [...state, action.payload];
      saveToLocalStorage(addSingleBlog);
      return addSingleBlog;

    case "DELETE_BLOG":
      const deleteSingleBlog = state.filter((ide) => ide.id !== action.payload);
      saveToLocalStorage(deleteSingleBlog);
      return deleteSingleBlog;

    case "UPDATE_BLOG":
      const updateSingleBlog = state.map((item) => {
        return item.id === action.payload.id
          ? (item = action.payload.currentBlog)
          : item;
      });
      saveToLocalStorage(updateSingleBlog);
      return updateSingleBlog;
    default:
      return state;
  }
};

export default blogReducer;
