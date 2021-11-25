import { useDispatch } from "react-redux";
import { notEditing, updateBlog } from "../Actions";
import { useNavigate } from "react-router";
const EditForm = ({ currentBlog, setCurrentBlog }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <main className="app-main">
      <div className="form-wrapper">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(notEditing());
            dispatch(updateBlog(currentBlog.id, currentBlog));
            setCurrentBlog({ title: "", summary: "", body: "", id: "" });
            navigate("/");
          }}
        >
          <div className="form-wrapper__group">
            <label htmlFor="Edit">Editing {currentBlog.title}</label>
          </div>
          <div className="form-wrapper__group">
            <label htmlFor="Title">Title:</label>
            <input
              onChange={(e) => {
                setCurrentBlog({
                  ...currentBlog,
                  title: e.target.value,
                });
              }}
              type="text"
              name="title"
              id="title"
              required={true}
              value={currentBlog.title}
            />
          </div>
          <div className="form-wrapper__group">
            <label htmlFor="Summary">Summary:</label>
            <input
              type="text"
              name="summary"
              id="summary"
              placeholder="enter here"
              value={currentBlog.summary}
              onChange={(e) => {
                setCurrentBlog({ ...currentBlog, summary: e.target.value });
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
              placeholder="write here"
              value={currentBlog.body}
              onChange={(e) => {
                setCurrentBlog({ ...currentBlog, body: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="form-wrapper__group buttons">
            <button className="button-default cancel">cancel</button>
            <button className="button-default">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditForm;
