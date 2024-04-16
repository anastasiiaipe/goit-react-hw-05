import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(true);
        toast.error("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Loader loading={loading} />
      {/* <Toaster position="bottom-center" reverseOrder={false} />; */}
    </>
  );
};

export default HomePage;
