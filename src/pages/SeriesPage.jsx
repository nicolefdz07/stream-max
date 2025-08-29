import { getFeaturedSeries, getSeriesCarrousel } from "../api";
import Carrousel from "../components/Carrousel";
import SliderCarrousel from "../components/SliderCarrousel";
import { Top10Series } from "../api";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import { AiringToday } from "../api";
import { getGenresSeriesList } from "../api";
import GenresTab from "../components/GenresTab";

export default function SeriesPage() {
  return (
    <>
      <Carrousel fetchData={getSeriesCarrousel} />
      <SliderCarrousel fetchData={getFeaturedSeries} title='Featured'/>
      <SliderTopCarrusel fetchData={Top10Series} title="Series" />
      <SliderCarrousel fetchData={AiringToday} title='Airing Today'/> 
      <GenresTab fetchGenres={getGenresSeriesList} />
    </>
  );
}
