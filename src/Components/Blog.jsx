import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { deleteBlog, editing } from "../Actions";
import LoginModal from "./Presentational/LoginModal";
import NotFound from "./Presentational/NotFound";
import EditForm from "./EditForm";
const Blog = () => {
  const { id } = useParams();
  const [currentBlog, setCurrentBlog] = useState({});
  const isEditing = useSelector((state) => state.isEditing);
  const isLogged = useSelector((state) => state.userInfo.isLoggedIn);
  const blogItem = useSelector((state) =>
    state.blogList.find((item) => item.id === Number(id))
  );
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isEditing && isLogged) {
    return (
      <main className="app-main single">
        <EditForm currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} />
      </main>
    );
  }

  return (
    <main className="app-main single">
      {blogItem ? (
        <article className="app-main__blog">
          <header>
            <h2 className="app-heading">{blogItem.title}</h2>
          </header>
          <div className="app-main__blog-content">
            <pre>{blogItem.body.trim()}</pre>
          </div>

          <div className="app-main__blog--controls">
            <div className="app-main__blog--controls control-container">
              <Link className="button-default back" to="/">
                Go back
              </Link>
              <button
                onClick={() => {
                  setShowOptions(!showOptions);
                }}
                className="button-default options"
              >
                Options {showOptions ? `↑` : `↓`}
              </button>
            </div>

            <div
              className={
                showOptions
                  ? `app-main__blog--controls actions-container show-actions`
                  : `app-main__blog--controls actions-container`
              }
            >
              <button
                className="button-default edit"
                onClick={() => {
                  if (isLogged) {
                    dispatch(editing());
                    setCurrentBlog({ ...blogItem });
                    setShowModal(false);
                  }
                  setShowModal(true);
                }}
              >
                <abbr title={`Edit blog "${blogItem.title}"`}>edit</abbr>
              </button>
              <button
                className="button-default delete"
                onClick={() => {
                  if (isLogged) {
                    dispatch(deleteBlog(Number(id)));
                    navigate("/");
                    setShowModal(false);
                  }
                  setShowModal(true);
                }}
              >
                <abbr title={`Delete blog "${blogItem.title}"`}>delete</abbr>
              </button>
            </div>
          </div>

          {showModal && <LoginModal />}
        </article>
      ) : (
        <NotFound />
      )}
    </main>
  );
};

export default Blog;
