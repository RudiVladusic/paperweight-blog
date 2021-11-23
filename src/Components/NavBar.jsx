import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Actions";

const NavBar = () => {
  const isUserLogged = useSelector((state) => state.userInfo.isLoggedIn);
  const username = useSelector((state) => state.userInfo.info.username);
  const dispatch = useDispatch();

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
          <Link to="/about">About</Link>
          <Link to="/create">Create new</Link>
          <Link
            to={isUserLogged ? "/" : "/login"}
            onClick={() => (isUserLogged ? dispatch(logOut()) : "")}
          >
            {isUserLogged ? `Log out (${username})` : `Log in`}
          </Link>
        </div>

        <div className="burger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="navigation-mobile">
          <Link to="/about">About</Link>
          <Link to="/create">Create new</Link>
          <Link
            to={isUserLogged ? "/" : "/login"}
            onClick={() => (isUserLogged ? dispatch(logOut) : "")}
          >
            {isUserLogged ? `Log out` : `Log in`}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
