import { Link } from "react-router-dom";

const LoginModal = () => {
  return (
    <div className="login-modal">
      <header>
        <h2>
          You must login first! <Link to={"/login"}>Login</Link>
        </h2>
      </header>
    </div>
  );
};

export default LoginModal;
