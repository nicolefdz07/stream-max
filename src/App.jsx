import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { ProgramsIdsProvider } from "./context/MovieGenreIdContext";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <ProgramsIdsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="movies" element={<MoviesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgramsIdsProvider>
  );
}

export default App;
