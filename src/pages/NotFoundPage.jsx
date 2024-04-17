import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">
        <HomePage />
      </Link>
    </div>
  );
};

export default NotFoundPage;
