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
            <Link
              onClick={() => {
                isNavigationOpen && setIsNavigationOpen(false);
              }}
              to="/"
            >
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
          className={isNavigationOpen ? `burger burger-open` : `burger`}
        >
          <div className="bar"></div>
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
            className="navigation-mobile__link"
            onClick={() => {
              setIsNavigationOpen(!isNavigationOpen);
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            className="navigation-mobile__link"
            onClick={() => {
              setIsNavigationOpen(!isNavigationOpen);
            }}
            to="/create"
          >
            Create new
          </Link>
          <Link
            className="navigation-mobile__link login"
            to={isUserLogged ? "/" : "/login"}
            onClick={() => {
              isUserLogged && dispatch(logOut());
              setIsNavigationOpen(!isNavigationOpen);
            }}
          >
            {isUserLogged ? `Log out (${username})` : `Log in`}
          </Link>

          <svg
            className="blob-1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.7,-30.4C36.4,-31,53.2,-31.5,58.4,-25.2C63.5,-18.9,57,-5.8,52.3,5.6C47.6,16.9,44.8,26.6,38.7,33.5C32.7,40.4,23.5,44.4,15.2,42.6C7,40.8,-0.3,33.2,-4.4,26.6C-8.5,20.1,-9.6,14.6,-24.3,12.7C-39.1,10.7,-67.7,12.3,-70.3,8.8C-72.9,5.2,-49.5,-3.4,-41.9,-18.7C-34.3,-34.1,-42.3,-56.3,-38,-59C-33.6,-61.7,-16.8,-45,-5.1,-37C6.5,-29,13.1,-29.7,24.7,-30.4Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="blob-2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34,-54.8C46.3,-51.7,60.2,-47.2,67.2,-37.9C74.2,-28.5,74.2,-14.3,75.6,0.8C77.1,15.9,79.9,31.9,71.1,38.1C62.3,44.2,41.9,40.7,28.1,40.7C14.3,40.7,7.1,44.3,-3.4,50.1C-13.9,55.9,-27.7,63.9,-35.9,60.7C-44.1,57.5,-46.7,43,-55.2,31C-63.7,19,-78.2,9.5,-78,0.1C-77.9,-9.3,-63.1,-18.6,-55.4,-32C-47.8,-45.4,-47.1,-62.9,-39,-68.5C-30.9,-74.2,-15.5,-68,-2.3,-64C10.8,-59.9,21.6,-58,34,-54.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
