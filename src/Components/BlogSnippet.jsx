import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogSnippet = ({ singleBlog }) => {
  const { title, summary, id, body, date } = singleBlog;
  const author = useSelector((state) => state.userInfo.info.username);

  return (
    <article className="blog-snippet">
      <img
        src="https://source.unsplash.com/random/800x600"
        alt="random"
        className="blog-snippet__image"
        width="800"
        height="600"
      />
      <div className="blog-snippet__author">
        <span className="blog-snippet__author--name">{author}</span>
        <span>&bull;</span>
        <span className="blog-snippet__author--time">{date}</span>
      </div>
      <h2 className="blog-snippet__title">{title}</h2>
      <pre className="blog-snippet__summary">{summary}</pre>
      <div className="app-main__blog-content">{body.slice(0, 30)}...</div>
      <Link className="button-default details" to={`/${id}`}>
        Details
      </Link>
    </article>
  );
};

export default BlogSnippet;
