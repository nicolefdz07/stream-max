import {
  AiringToday,
  getFeaturedSeries,
  getGenresSeriesList,
  getSeriesCarrousel,
  Top10Series,
} from "../api";
import Carrousel from "../components/Carrousel";
import GenresTab from "../components/GenresTabSerie";
import SliderCarrousel from "../components/SliderCarrousel";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import GenreSliderCarrousel from "../components/GenreSliderContainer";
import { getSeriesGenre } from "../api";
import ProgramsIdsContext from "../context/MovieGenreIdContext";
import { useContext } from "react";



export default function SeriesPage() {
  const { serieId } = useContext(ProgramsIdsContext);
  return (
    <>
      <Carrousel fetchData={getSeriesCarrousel} />
      <SliderCarrousel fetchData={getFeaturedSeries} title="Featured" />
      <SliderTopCarrusel fetchData={Top10Series} title="Series" />
      <SliderCarrousel fetchData={AiringToday} title="Airing Today" />
      <GenresTab fetchGenres={getGenresSeriesList} />
      <GenreSliderCarrousel fetchProgramsById={getSeriesGenre} id={serieId} />
    </>
  );
}
