import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Popular Movies
export const getPopularMovies = () => tmdb.get("/movie/popular");

// Now Playing
export const getNowPlaying = () => tmdb.get("/movie/now_playing");

// Upcoming
export const getUpcoming = () => tmdb.get("/movie/upcoming");

// Top Rated
export const getTopRated = () => tmdb.get("/movie/top_rated");

// Search
export const searchMovies = (query: string) =>
  tmdb.get("/search/movie", {
    params: { query },
  });

// Movie Details
export const getMovieDetails = (id: number) =>
  tmdb.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });
