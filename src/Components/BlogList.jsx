import BlogSnippet from "./BlogSnippet";
import { useSelector } from "react-redux";

const BlogList = ({ setCurrentBlog }) => {
  const allBlogs = useSelector((state) => state.blogList);

  return (
    <main className="app-main">
      {allBlogs &&
        allBlogs.map((items) => (
          <BlogSnippet
            key={items.id}
            items={items}
            setCurrentBlog={setCurrentBlog}
          />
        ))}
    </main>
  );
};

export default BlogList;
