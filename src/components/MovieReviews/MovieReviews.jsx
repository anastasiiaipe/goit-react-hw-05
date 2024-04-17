import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../service/movies-api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchReview = async () => {
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

    fetchReview();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Toaster position="bottom-center" reverseOrder={false} />}
      <ul>
        {review.map(({ id, author, content }) => {
          return (
            <li key={id} className={style.reviewItem}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieReviews;
