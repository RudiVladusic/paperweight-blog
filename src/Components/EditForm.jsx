import { useDispatch } from "react-redux";
import { notEditing, updateBlog } from "../Actions";
import { useNavigate } from "react-router";
const EditForm = ({ currentBlog, setCurrentBlog }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(currentBlog.id);
  return (
    <main className="app-main">
      <div className="form-wrapper">
        <label htmlFor="Edit">Editing {currentBlog.title}</label>
        <form
          className="app-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(notEditing());
            dispatch(updateBlog(currentBlog.id, currentBlog));
            setCurrentBlog({ title: "", summary: "", body: "", id: "" });
            navigate("/");
          }}
        >
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

          <button className="button-default">Submit</button>
          <button className="button-default">cancel</button>
        </form>
      </div>
    </main>
  );
};

export default EditForm;
