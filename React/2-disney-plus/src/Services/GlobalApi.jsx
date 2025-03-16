import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_API_TOKEN,
  },
};

const getTrendingVideos = () => {
  return axios.get(movieBaseUrl + "/trending/all/day?language=en-US", options);
};

export default {
  getTrendingVideos,
};
