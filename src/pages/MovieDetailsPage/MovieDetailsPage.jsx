import { Routes, Route, NavLink } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  return (
    <div>
      <nav>
        <NavLink to="/movies/:movieId/cast">Movie Cast </NavLink>
        <NavLink to="/movies/:movieId/reviews">Movie Reviews</NavLink>
      </nav>

      <Routes>
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
