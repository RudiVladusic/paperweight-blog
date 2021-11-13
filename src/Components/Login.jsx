import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../Actions";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const isError = useSelector((state) => state.userInfo.isError);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(logIn(loginData));
        setLoginData({ username: "", password: "" });
      }}
    >
      <label htmlFor="password">Username:</label>
      <input
        type="text"
        onChange={(e) => {
          setLoginData({ ...loginData, username: e.target.value });
        }}
        value={loginData.username}
        name="username"
        id="username"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={loginData.password}
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
      />
      <button type="submit">Submit</button>
      {isError ? <h2 style={{ color: "white" }}>WRONG!!!</h2> : ""}
    </form>
  );
};

export default Login;