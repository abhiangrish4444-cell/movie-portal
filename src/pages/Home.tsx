// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
// import type { Movie } from "../types/Movie";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadMovies = async () => {
    console.log("📡 Fetching popular movies...");

    try {
      const res = await getPopularMovies();
console.log("KEY =", import.meta.env.VITE_TMDB_API_KEY);
console.log("BASE =", import.meta.env.VITE_TMDB_BASE_URL);

      console.log("✅ API Response:", res.data);        // Full response
      console.log("🎬 Movies received:", res.data.results); // Only movies list

      setMovies(res.data.results);
    } catch (error) {
      console.error("❌ Failed to fetch movies:", error);
    } finally {
      setLoading(false);
      console.log("⏳ Loading finished");
    }
  };

  loadMovies();
}, []);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>

      {loading && <p>Loading movies...</p>}

      {!loading && movies.length === 0 && (
        <p className="text-gray-500">No movies found.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
