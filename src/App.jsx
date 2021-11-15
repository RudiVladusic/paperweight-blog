import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/css/style.css";
import Loading from "./Components/Presentational/Loading";
import AddNewBlog from "./Components/AddNewBlog";
import BlogList from "./Components/BlogList";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import About from "./Components/Presentational/About";
import Footer from "./Components/Presentational/Footer";

const EditFormComponent = React.lazy(() => import("./Components/EditForm"));
const BlogDetailsComponent = React.lazy(() => import("./Components/Blog"));
function App() {
  const isEditing = useSelector((state) => state.isEditing);
  // const isLogged = useSelector((state) => state.userInfo.isLoggedIn);
  const [currentBlog, setCurrentBlog] = useState({});

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BlogList
              currentBlog={currentBlog}
              setCurrentBlog={setCurrentBlog}
            />
          }
        />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/create" element={<AddNewBlog />} />

        <Route
          exact
          path="/:id"
          element={
            <Suspense fallback={<Loading />}>
              {isEditing ? (
                <EditFormComponent
                  currentBlog={currentBlog}
                  setCurrentBlog={setCurrentBlog}
                />
              ) : (
                <BlogDetailsComponent
                  currentBlog={currentBlog}
                  setCurrentBlog={setCurrentBlog}
                />
              )}
            </Suspense>
          }
        />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
