import { Link } from "react-router-dom";

const NoBlogsModal = () => {
  return (
    <div className="no-blogs-modal">
      <header>
        <h2>There are no blogs here!</h2>
        <p>
          Maybe you should <Link to="/create">write one!</Link>
        </p>
      </header>
    </div>
  );
};

export default NoBlogsModal;
