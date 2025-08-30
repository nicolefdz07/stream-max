import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { ProgramsIdsProvider } from "./context/MovieGenreIdContext";
import { SearchProgramsProvider } from "./context/SearchProgramsContext";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProgramsDetailsPage from "./pages/ProgramsDetailsPage";
import SearchProgramsPage from "./pages/SearchProgramsPage";
import SeriesPage from "./pages/SeriesPage";

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
              <Route path="search" element={<SearchProgramsPage />} />
              <Route
                path="program/:type/:id"
                element={<ProgramsDetailsPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProgramsIdsProvider>
    </SearchProgramsProvider>
  );
}

export default App;
