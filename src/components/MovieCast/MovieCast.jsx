import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieCredits } from "../../service/movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      setLoading(true);
      try {
        const castData = await movieCredits(movieId);
        setCast(castData);
      } catch (error) {
        setError(true);
        toast.error("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const defaultActorImg = "https://i.imgur.com/YFPCI0O.jpeg";
  return (
    <>
      {loading && <Loader />}
      <Toaster position="bottom-center" reverseOrder={false} />
      <ul>
        {cast.map(({ id, original_name, profile_path, character }) => {
          const urlImage = `https://image.tmdb.org/t/p/w500${profile_path}`;

          return (
            <li key={id}>
              <img
                src={profile_path ? urlImage : defaultActorImg}
                width={250}
                height={350}
                alt={original_name}
              />
              <h3>{original_name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCast;
