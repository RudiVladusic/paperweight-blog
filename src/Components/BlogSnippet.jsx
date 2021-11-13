import { Link } from "react-router-dom";

const BlogSnippet = ({ singleBlog }) => {
  const { title, summary, id, body } = singleBlog;
  return (
    <article className="blog-snippet">
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
