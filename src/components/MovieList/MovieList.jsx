import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const defaultImg = "https://i.imgur.com/YFPCI0O.jpeg";
  return (
    <div className={style.movieBox}>
      {movies.map(({ id, title, poster_path }) => {
        const urlImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
        return (
          <div key={id} className={style.movieList}>
            <Link state={location} to={`/movies/${id}`}>
              <img
                src={poster_path ? urlImage : defaultImg}
                width={250}
                height={350}
                alt={title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
