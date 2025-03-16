import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=";

const options = {
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_TOKEN,
  },
};

const getTrendingVideos = () => {
  return axios.get(movieBaseUrl + "/trending/all/day?language=en-US", options);
};

const getMovieByGenreId = (id) => {
  return axios.get(movieByGenreBaseURL + id, options);
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
