import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/css/style.css";
import AddNewBlog from "./Components/AddNewBlog";
import BlogList from "./Components/BlogList";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import About from "./Components/Presentational/About";
import Footer from "./Components/Presentational/Footer";
import SignUp from "./Components/SignUp";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BlogList />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/create" element={<AddNewBlog />} />
        <Route exact path="/:id" element={<Blog />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
