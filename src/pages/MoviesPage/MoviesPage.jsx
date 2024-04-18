import { useEffect, useState } from "react";
import { searchMovies } from "../../service/movies-api";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const searchQuery = searchParams.get("query") || "";
        const results = await searchMovies(searchQuery);
        setMovies(results);
      } catch (error) {
        setError(true);
        toast.error("Error fetching search movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <Toaster position="bottom-center" reverseOrder={false} />}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
