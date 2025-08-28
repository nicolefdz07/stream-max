import { getFeaturedSeries, getSeriesCarrousel } from "../api";
import Carrousel from "../components/Carrousel";
import SliderCarrousel from "../components/SliderCarrousel";
import { Top10Series } from "../api";
import SliderTopCarrusel from "../components/SliderTopCarrousel";

export default function SeriesPage() {
  return (
    <>
      <Carrousel fetchData={getSeriesCarrousel} />
      <SliderCarrousel fetchData={getFeaturedSeries} />
      <SliderTopCarrusel fetchData={Top10Series} title="Series" />
    </>
  );
}
