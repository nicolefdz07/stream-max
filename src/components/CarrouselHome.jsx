

import useCarrousel from "../hooks/useCarrousel";
import Carrousel from "./Carrousel";

export default function CarrouselHome() {
  const { carrouselItems, error, loading } = useCarrousel();
  


  return (
    <Carrousel programs={carrouselItems} loading={loading} error={error} />
    
  );
}
