import { Link } from "react-router-dom";

const BlogSnippet = ({ items }) => {
  const { title, summary, id } = items;
  return (
    <article className="blog-snippet">
      <h2 className="blog-snippet__title">{title}</h2>
      <pre className="blog-snippet__summary">{summary}</pre>

      <Link className="button-default details" to={`/${id}`}>
        Details
      </Link>
    </article>
  );
};

export default BlogSnippet;
