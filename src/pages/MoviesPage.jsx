import { getFeaturedMovies, getMoviesCarrousel } from "../api";
import Carrousel from "../components/Carrousel";
import SliderCarrousel from "../components/SliderCarrousel";
import SliderTopCarrusel from "../components/SliderTopCarrousel";
import { Top10Movies } from "../api";

export default function MoviesPage(){
return (
  <>
  <Carrousel fetchData={getMoviesCarrousel} />
  <SliderCarrousel fetchData={getFeaturedMovies} />
  <SliderTopCarrusel fetchData={Top10Movies} title="Movies" />
   
  </>
)
}