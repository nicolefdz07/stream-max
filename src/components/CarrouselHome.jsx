 
import { getTrendingCarrousel } from "../api";

import Carrousel from "./Carrousel";

export default function CarrouselHome() {

  
  


  return (
    <Carrousel fetchData={getTrendingCarrousel} />
    
  );
}
