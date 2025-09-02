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
import { WatchListProvider } from "./context/WatchListContext";
import WatchlistPage from "./pages/WatchListPage";

function App() {
  return (
    <SearchProgramsProvider>
      <WatchListProvider>
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
                <Route path='Watchlist' element={<WatchlistPage />} />
              </Route>
              
            </Routes>
          </BrowserRouter>
        </ProgramsIdsProvider>
      </WatchListProvider>
    </SearchProgramsProvider>
  );
}

export default App;
