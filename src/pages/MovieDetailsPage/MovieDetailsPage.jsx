import {
  NavLink,
  useParams,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { movieDetails } from "../../service/movies-api";

import style from "./MovieDetailsPage.module.css";

import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const movieData = await movieDetails(movieId);
        setMovies(movieData);
        setImageUrl(`https://image.tmdb.org/t/p/w500${movieData.poster_path}`);
      } catch (error) {
        setError(true);
        toast.error("Error details movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div className={style.detailsBox}>
      <Link to={backLinkRef.current} className={style.btnBack}>
        Go back
      </Link>
      {loading && <Loader />}
      {movies && (
        <div className={style.detailsWrap}>
          <img src={imageUrl} alt={movies.title} width="300" />
          <div>
            {" "}
            <h2 className={style.detailsText}>{movies.title}</h2>
            <p className={style.detailsText}>
              <b>Release date</b> {movies.release_date}
            </p>
            <p className={style.detailsText}>
              {" "}
              <b>Overview:</b> {movies.overview}
            </p>
            <p className={style.detailsText}>
              <b>Genres:</b>{" "}
              {movies.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className={style.detailsText}>
              <b>Production countries:</b>{" "}
              {movies.production_countries
                .map((country) => country.name)
                .join(", ")}
            </p>
          </div>
        </div>
      )}

      <nav className={style.detailsNav}>
        <NavLink to="cast" className={style.btnDetails}>
          Movie Cast{" "}
        </NavLink>
        <NavLink to="reviews" className={style.btnDetails}>
          Movie Reviews
        </NavLink>
      </nav>

      {error && <Toaster position="bottom-center" reverseOrder={false} />}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
