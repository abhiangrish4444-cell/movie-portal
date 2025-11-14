import { type Movie } from "../types/Movie";
import { Link } from "react-router-dom";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-gray-800 p-3 rounded shadow hover:scale-105 transition">
        <img
          src={IMG + movie.poster_path}
          alt={movie.title}
          className="rounded"
        />
        <h3 className="mt-2 font-bold text-white">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </Link>
  );
}
