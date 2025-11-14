import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
