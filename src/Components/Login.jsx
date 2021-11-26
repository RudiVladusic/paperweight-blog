import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { logIn } from "../Actions";
import FormErrorModal from "./Presentational/FormErrorModal";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const isError = useSelector((state) => state.userInfo.isError);
  const isUserLogged = useSelector((state) => state.userInfo.isLoggedIn);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-main">
      {isUserLogged ? (
        <Navigate to={-1} />
      ) : (
        <div className="form-wrapper login">
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(logIn(loginData));
              setLoginData({ username: "", password: "" });
            }}
          >
            <div className="form-wrapper__group">
              <label htmlFor="login">Login</label>
              {isError ? (
                <FormErrorModal message={`Wrong username or password`} />
              ) : null}
            </div>
            <div className="form-wrapper__group">
              <label htmlFor="password">Username:</label>
              <input
                required={true}
                type="text"
                onChange={(e) => {
                  setLoginData({ ...loginData, username: e.target.value });
                }}
                value={loginData.username}
                name="username"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-wrapper__group">
              <label htmlFor="password">Password:</label>
              <input
                required={true}
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
                placeholder="Enter password"
              />
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="account-modal">
            <p>
              Don't have a account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
