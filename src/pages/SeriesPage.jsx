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
      <Carrousel fetchData={getSeriesCarrousel} type='tv'/>
      <SliderCarrousel fetchData={getFeaturedSeries} title="Featured" type='tv'/>
      <SliderTopCarrusel fetchData={Top10Series} title="Series" type='tv'/>
      <GenresTab fetchGenres={getGenresSeriesList} />
      <GenreSliderCarrousel fetchProgramsById={getSeriesGenre} id={serieId} type='tv'/>
      <SliderCarrousel fetchData={AiringToday} title="Airing Today" type='tv'/>
      
      
    </>
  );
}
