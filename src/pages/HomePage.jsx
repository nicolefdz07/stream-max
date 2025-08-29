import CarrouselHome from "../components/CarrouselHome";
import { getFeaturedPrograms } from "../api";
import SliderCarrousel from "../components/SliderCarrousel";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import { Top10Movies } from "../api";
import { Top10Series } from "../api";

export default function HomePage() {
  return (
    <>
      <CarrouselHome />
      <SliderCarrousel fetchData={getFeaturedPrograms} title='Featured'/>
      <SliderTopCarrusel fetchData={Top10Movies} title="Movies" />
      <SliderTopCarrusel fetchData={Top10Series} title="Series" />
    </>
  );
}
