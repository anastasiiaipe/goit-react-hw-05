import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const language = "language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTNiNTA2MThlNWM2ZWI5OTEyNDkwZGMwNDNiMDQyOSIsInN1YiI6IjY2MWQ1NGIxMDEwMmM5MDE4NjA3NDBhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdXBnZUhnu5-V1wVfLhnAwuNAQhbrlxjEipSIWYoNtU",
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${baseURL}trending/movie/day?${language}`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${baseURL}search/movie?query=${query}&include_adult=false&${language}&page=1`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};

export const movieDetails = async (movie_id) => {
  try {
    const response = await axios.get(`${baseURL}movie/${movie_id}`, options);
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};

export const movieCredits = async (movie_id) => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movie_id}/credits`,
      options
    );
    return response.data.cast;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};

export const movieReviews = async (movie_id) => {
  try {
    const response = await axios.get(
      `${baseURL}movie/${movie_id}/reviews`,
      options
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
};
