import {
  getFeaturedMovies,
  getGenresMovieList,
  getMoviesCarrousel,
  NowPlaying,
  Top10Movies,
} from "../api";
import Carrousel from "../components/Carrousel";
import GenreSliderCarrousel from "../components/GenreSliderContainer";
import GenresTabMovie from "../components/GenresTabMovie";
import SliderCarrousel from "../components/SliderCarrousel";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import { getMoviesGenre } from "../api";
import { useContext } from "react";
import ProgramsIdsContext from "../context/MovieGenreIdContext";

export default function MoviesPage() {
  // const {movieId} = useGetMovieId()
  const { movieId } = useContext(ProgramsIdsContext);

  return (
    <>
      <Carrousel fetchData={getMoviesCarrousel} />
      <SliderCarrousel fetchData={getFeaturedMovies} title="Featured" />
      <SliderTopCarrusel fetchData={Top10Movies} title="Movies" />
      <GenresTabMovie fetchGenres={getGenresMovieList} />
      <GenreSliderCarrousel fetchProgramsById={getMoviesGenre} id={movieId} />
      <SliderCarrousel fetchData={NowPlaying} title="Now Playing" />
      
    </>
  );
}
