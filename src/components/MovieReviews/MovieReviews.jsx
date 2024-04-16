import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);
  // return <div></div>;
};

export default MovieReviews;
