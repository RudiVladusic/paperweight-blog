import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Actions";
import { useState } from "react";

const NavBar = () => {
  const isUserLogged = useSelector((state) => state.userInfo.isLoggedIn);
  const username = useSelector((state) => state.userInfo.info.username);
  const dispatch = useDispatch();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation-wrapper">
        <div className="navigation-logo">
          <header className="navigation-home">
            <Link to="/">
              <h2>Paperweight</h2>
            </Link>
          </header>
        </div>
        <div className="navigation-desktop">
          <Link to="/about" className="navigation-desktop__link">
            About
          </Link>
          <Link to="/create" className="navigation-desktop__link">
            Create new blog
          </Link>
          <Link
            to={isUserLogged ? "/" : "/login"}
            className="navigation-desktop__link login"
            onClick={() => (isUserLogged ? dispatch(logOut()) : "")}
          >
            {isUserLogged ? `Log out (${username})` : `Log in`}
          </Link>
        </div>

        <div
          onClick={() => {
            setIsNavigationOpen(!isNavigationOpen);
          }}
          className={isNavigationOpen ? `burger open` : `burger`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={
            isNavigationOpen ? `navigation-mobile open` : `navigation-mobile`
          }
        >
          <Link
            onClick={() => {
              setIsNavigationOpen(!isNavigationOpen);
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsNavigationOpen(!isNavigationOpen);
            }}
            to="/create"
          >
            Create new
          </Link>
          <Link
            to={isUserLogged ? "/" : "/login"}
            onClick={() => {
              isUserLogged && dispatch(logOut);
              setIsNavigationOpen(!isNavigationOpen);
            }}
          >
            {isUserLogged ? `Log out (${username})` : `Log in`}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
