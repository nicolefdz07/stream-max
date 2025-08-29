import { getFeaturedMovies, getMoviesCarrousel } from "../api";
import Carrousel from "../components/Carrousel";
import SliderCarrousel from "../components/SliderCarrousel";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import { Top10Movies } from "../api";
import { NowPlaying } from "../api";
import GenresTab from "../components/GenresTab";
import { getGenresMovieList } from "../api";

export default function MoviesPage() {
  return (
    <>
      <Carrousel fetchData={getMoviesCarrousel} />
      <SliderCarrousel fetchData={getFeaturedMovies} title='Featured' />
      <SliderTopCarrusel fetchData={Top10Movies} title="Movies" />
      <SliderCarrousel fetchData={NowPlaying} title='Now Playing'/>
      <GenresTab fetchGenres={getGenresMovieList} />
    </>
  );
}
