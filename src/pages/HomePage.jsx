import CarrouselHome from "../components/CarrouselHome";
import { getFeaturedPrograms } from "../api";
import SliderCarrousel from "../components/SliderCarrousel";

export default function HomePage() {
  return (
    <>
      <CarrouselHome />
      <SliderCarrousel fetchData={getFeaturedPrograms} />
    </>
  );
}
