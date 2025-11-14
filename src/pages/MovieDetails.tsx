import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Define a type for the movie data
interface Movie {
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
        );
        const data: Movie = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Fetching details soon...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <p>Release Date: {movie.release_date || "N/A"}</p>
      <p>Rating: {movie.vote_average ?? "N/A"}</p>
    </div>
  );
}

export default MovieDetails;
