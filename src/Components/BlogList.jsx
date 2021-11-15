import BlogSnippet from "./BlogSnippet";
import { useSelector } from "react-redux";

const BlogList = ({ setCurrentBlog }) => {
  const allBlogs = useSelector((state) => state.blogList);

  return (
    <main className="app-main">
      <section className="blog-list-home">
        {allBlogs && allBlogs.length > 0 ? (
          allBlogs.map((singleBlog) => (
            <BlogSnippet
              key={singleBlog.id}
              singleBlog={singleBlog}
              setCurrentBlog={setCurrentBlog}
            />
          ))
        ) : (
          <h2>No blogs, write one!</h2>
        )}
      </section>
    </main>
  );
};

export default BlogList;
