export const editing = () => {
  return {
    type: "EDITING",
  };
};

export const notEditing = () => {
  return {
    type: "NOT_EDITING",
  };
};

export const addNewBlog = (value) => {
  return {
    type: "ADD_NEW",
    payload: value,
  };
};

export const deleteBlog = (id) => {
  return {
    type: "DELETE_BLOG",
    payload: id,
  };
};

export const updateBlog = (id, body) => {
  return {
    type: "UPDATE_BLOG",
    payload: { id: id, body: body },
  };
};
