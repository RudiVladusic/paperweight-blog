import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Actions";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FormErrorModal from "./Presentational/FormErrorModal";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userRegister, setUserRegister] = useState({ username: "" });

  const [registerModal, setRegisterModal] = useState({
    show: false,
    message: undefined,
  });
  const [passwords, setPasswords] = useState({
    passwordOne: "",
    passwordTwo: "",
  });

  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

  const handleUserRegister = (e) => {
    e.preventDefault();
    setUserRegister({
      username: "",
    });

    setPasswords({
      passwordOne: "",
      passwordTwo: "",
    });
    if (passwords.passwordOne !== passwords.passwordTwo) {
      setRegisterModal({
        show: true,
        message: "passwords do not match!",
      });
    } else if (
      !passwords.passwordOne.match(regexPassword) &&
      !passwords.passwordTwo.match(regexPassword)
    ) {
      setRegisterModal({
        show: true,
        message:
          "password must contain minimum five characters, at least one letter and one number",
      });
    } else {
      dispatch(
        registerUser({ ...userRegister, password: passwords.passwordOne })
      );
      navigate(-1);
    }
  };

  return (
    <main className="app-main">
      <div className="form-wrapper">
        <form className="login-form" onSubmit={handleUserRegister}>
          <div className="form-wrapper__group">
            <label htmlFor="register">Register</label>
            {registerModal.show ? (
              <FormErrorModal message={registerModal.message} />
            ) : null}
          </div>
          <div className="form-wrapper__group">
            <label htmlFor="username">Username:</label>
            <input
              required={true}
              type="text"
              name="username"
              id="username"
              value={userRegister.username}
              placeholder="Enter username"
              onChange={(e) => {
                setUserRegister({ ...userRegister, username: e.target.value });
              }}
            />
          </div>
          <div className="form-wrapper__group">
            <label htmlFor="password">Password:</label>
            <input
              required={true}
              type="password"
              name="password"
              id="password"
              value={passwords.passwordOne}
              placeholder="Enter password"
              onChange={(e) => {
                setPasswords({
                  ...passwords,
                  passwordOne: e.target.value,
                });
              }}
            />
          </div>
          <div className="form-wrapper__group">
            <label htmlFor="repeat_password">Repeat password:</label>
            <input
              required={true}
              type="password"
              name="repeat_password"
              id="repeat_password"
              value={passwords.passwordTwo}
              placeholder="Repeat password"
              onChange={(e) => {
                setPasswords({
                  ...passwords,
                  passwordTwo: e.target.value,
                });
              }}
            />
          </div>

          <button type="submit" className="button-default submit">
            Register
          </button>
        </form>
        <div className="account-modal">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
