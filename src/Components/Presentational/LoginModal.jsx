import { Link } from "react-router-dom";

const LoginModal = () => {
  return (
    <div>
      <p>
        You need to <Link to={"/login"}>login</Link> first!
      </p>
    </div>
  );
};

export default LoginModal;
