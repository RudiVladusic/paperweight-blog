import Form from "./Components/Form";
import { useState } from "react";
import BlogList from "./Components/BlogList";
import EditForm from "./Components/EditForm";
import Blog from "./Components/Blog";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/css/style.css";
function App() {
  const isEditing = useSelector((state) => state.isEditing);
  const [currentBlog, setCurrentBlog] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Form />
              <BlogList
                currentBlog={currentBlog}
                setCurrentBlog={setCurrentBlog}
              />
            </>
          }
        />
        <Route
          exact
          path="/:id"
          element={
            isEditing ? (
              <EditForm
                currentBlog={currentBlog}
                setCurrentBlog={setCurrentBlog}
              />
            ) : (
              <Blog currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
