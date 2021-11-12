import { useDispatch } from "react-redux";
import { notEditing, updateBlog } from "../Actions";

const EditForm = ({ currentBlog, setCurrentBlog }) => {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(notEditing());
        dispatch(updateBlog(currentBlog.id, currentBlog));
      }}
    >
      <label htmlFor="Edit">Editing {currentBlog.title}</label>
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
  );
};

export default EditForm;
