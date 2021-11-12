import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBlog } from "../Actions";
const Form = () => {
  const [blog, setBlog] = useState({
    title: "",
    summary: "",
    body: "",
    id: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBlog(blog));
    setBlog({ title: "", summary: "", body: "", id: "" });
  };

  return (
    <div className="form-wrapper">
      <form className="app-form" onSubmit={handleSubmit}>
        <label htmlFor="Title">Title:</label>
        <input
          onChange={(e) => {
            setBlog({ ...blog, title: e.target.value, id: Date.now() });
          }}
          type="text"
          name="title"
          id="title"
          required={true}
          value={blog.title}
        />
        <label htmlFor="Summary">Summary:</label>
        <input
          type="text"
          name="summary"
          id="summary"
          placeholder="enter here"
          onChange={(e) => {
            setBlog({ ...blog, summary: e.target.value });
          }}
        />
        <label htmlFor="Body">Content:</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder="Write here"
          required={true}
          onChange={(e) => {
            setBlog({ ...blog, body: e.target.value });
          }}
          value={blog.body}
        ></textarea>
        <button className="button-default submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
