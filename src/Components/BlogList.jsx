import BlogSnippet from "./BlogSnippet";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoBlogsModal from "./Presentational/NoBlogsModal";
import { notEditing } from "../Actions";

const BlogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notEditing());
    //eslint-disable-next-line
  }, []);

  const allBlogs = useSelector((state) => state.blogList);
  return (
    <main className="app-main">
      <section className="blog-list-home">
        {allBlogs && allBlogs.length > 0 ? (
          allBlogs.map((singleBlog) => (
            <BlogSnippet key={singleBlog.id} singleBlog={singleBlog} />
          ))
        ) : (
          <NoBlogsModal />
        )}
      </section>
    </main>
  );
};

export default BlogList;
