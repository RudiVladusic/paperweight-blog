import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBlog } from "../Actions";
import { useNavigate } from "react-router";
import LoginPrompt from "./Presentational/LoginPrompt";
const Form = () => {
  const [blog, setBlog] = useState({
    title: "",
    summary: "",
    body: "",
    id: "",
    date: "",
  });
  const navigate = useNavigate();
  const isUserLogged = useSelector((state) => state.userInfo.isLoggedIn);
  const dispatch = useDispatch();
  const date = new Date().toLocaleString();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUserLogged) {
      dispatch(addNewBlog(blog));
      setBlog({ title: "", summary: "", body: "", id: "", date: "" });
      navigate("/");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-main">
      <section className="add-new-blog">
        {isUserLogged ? (
          <div className="form-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-wrapper__group">
                <label className="form-header" htmlFor="Create new">
                  create new blog
                </label>
              </div>
              <div className="form-wrapper__group">
                <label htmlFor="Title">Title:</label>
                <input
                  onChange={(e) => {
                    setBlog({
                      ...blog,
                      title: e.target.value,
                      id: Date.now(),
                      date: date,
                    });
                  }}
                  type="text"
                  name="title"
                  id="title"
                  required={true}
                  value={blog.title}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-wrapper__group">
                <label htmlFor="Summary">Summary:</label>
                <input
                  type="text"
                  name="summary"
                  id="summary"
                  placeholder="Enter summary"
                  onChange={(e) => {
                    setBlog({ ...blog, summary: e.target.value });
                  }}
                />
              </div>
              <div className="form-wrapper__group">
                <label htmlFor="Body">Content:</label>
                <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder="Enter content"
                  required={true}
                  onChange={(e) => {
                    setBlog({ ...blog, body: e.target.value });
                  }}
                  value={blog.body}
                ></textarea>
              </div>

              <button className="button-default submit">Submit</button>
            </form>
          </div>
        ) : (
          <LoginPrompt />
        )}
      </section>
    </main>
  );
};

export default Form;
