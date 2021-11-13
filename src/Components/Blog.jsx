import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteBlog, editing } from "../Actions";
const Blog = ({ setCurrentBlog }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogItem = useSelector((state) =>
    state.blogList.find((item) => item.id === Number(id))
  );
  const isLogged = useSelector((state) => state.userInfo.isLoggedIn);
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const { title, body } = blogItem;
  return (
    <main className="app-main">
      <article className="app-main__blog">
        <header>
          <h2 className="app-heading">{title}</h2>
        </header>
        <div className="app-main__blog-content">
          <p>{body}</p>
        </div>
        <div className="blog-snippet__buttons">
          <button
            className="button-default"
            onClick={() => {
              if (isLogged) {
                dispatch(editing());
                setCurrentBlog({ ...blogItem });
                setShowModal(false);
              }
              setShowModal(true);
            }}
          >
            <abbr title={`Edit blog "${title}"`}>edit</abbr>
          </button>
          <button
            className="button-default delete"
            onClick={() => {
              dispatch(deleteBlog(Number(id)));
              navigate("/");
            }}
          >
            <abbr title={`Delete blog "${title}"`}>delete</abbr>
          </button>

          <Link className="button-default" to="/">
            Go back
          </Link>
        </div>

        {showModal ? (
          <div className="you-must-log-in-first">
            YOU MUST LOGIN FIRST! <Link to={"/login"}>Login</Link>
          </div>
        ) : (
          ""
        )}
      </article>
    </main>
  );
};

export default Blog;
