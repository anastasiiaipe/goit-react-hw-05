import { NavLink, useParams, Link, Outlet } from "react-router-dom";
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
    <div>
      <Link className="link" to={backLinkRef.current}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <Toaster position="bottom-center" reverseOrder={false} />}
      {movies && (
        <div>
          <img src={imageUrl} alt={movies.title} width="300" />
          <h2>{movies.title}</h2>
          <p>Release date: {movies.release_date}</p>
          <p>Overview: {movies.overview}</p>
          <p>Genres: {movies.genres.map((genre) => genre.name).join(", ")}</p>
          <p>
            Production countries:{" "}
            {movies.production_countries
              .map((country) => country.name)
              .join(", ")}
          </p>
        </div>
      )}

      <nav>
        <NavLink to="cast">Movie Cast </NavLink>
        <NavLink to="reviews">Movie Reviews</NavLink>
      </nav>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
