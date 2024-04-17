import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../service/movies-api";
import toast from "react-hot-toast";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      setLoading(true);
      try {
        const reviewData = await movieReviews(movieId);
        setReview(reviewData);
      } catch (error) {
        setError(true);
        toast.error("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);
};

export default MovieReviews;
