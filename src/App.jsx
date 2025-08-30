import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { ProgramsIdsProvider } from "./context/MovieGenreIdContext";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import SearchPage from "./pages/SearchPage";
import { SearchProgramsProvider } from "./context/SearchProgramsContext";

function App() {
  return (
    <SearchProgramsProvider>
      <ProgramsIdsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="series" element={<SeriesPage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgramsIdsProvider>
    </SearchProgramsProvider>
  );
}

export default App;
