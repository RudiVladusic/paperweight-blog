import BlogSnippet from "./BlogSnippet";
import { useSelector } from "react-redux";

const BlogList = ({ setCurrentBlog }) => {
  const allBlogs = useSelector((state) => state.blogList);

  return (
    <main className="app-main">
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
    </main>
  );
};

export default BlogList;
