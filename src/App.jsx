import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
