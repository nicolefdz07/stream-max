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
  
  const { movieId } = useContext(ProgramsIdsContext);

  return (
    <>
      <Carrousel fetchData={getMoviesCarrousel} type='movie'/>
      <SliderCarrousel fetchData={getFeaturedMovies} title="Featured" type='movie' />
      <SliderTopCarrusel fetchData={Top10Movies} title="Movies" type='movie' />
      <GenresTabMovie fetchGenres={getGenresMovieList} />
      <GenreSliderCarrousel fetchProgramsById={getMoviesGenre} id={movieId} type='movie'/>
      <SliderCarrousel fetchData={NowPlaying} title="Now Playing" type='movie'/>
      
    </>
  );
}
