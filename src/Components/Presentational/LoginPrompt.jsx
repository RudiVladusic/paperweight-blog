import { Link } from "react-router-dom";
const LoginPrompt = () => {
  // using modal, but will change to something with image etc..
  return (
    <div className="login-modal show-modal">
      <p>
        You need to <Link to={"/login"}>login</Link> first!
      </p>
    </div>
  );
};

export default LoginPrompt;
