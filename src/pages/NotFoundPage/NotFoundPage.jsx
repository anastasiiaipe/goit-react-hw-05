import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <p>Not found page</p>
    </div>
  );
};

export default NotFoundPage;
