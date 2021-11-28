import { Link } from "react-router-dom";

const LoginModal = ({ showModal }) => {
  return (
    <div className={showModal ? `login-modal show-modal` : `login-modal`}>
      <p>
        You need to <Link to={"/login"}>login</Link> first!
      </p>
    </div>
  );
};

export default LoginModal;
