import { useEffect, useState } from "react";


export default function useSliderCarrousel({ fetchData }) {
  const [sliderPrograms, setSliderPrograms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

   
  useEffect(() => {
    const fetchedFeaturedPrograms = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
        setSliderPrograms(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      
    };
    fetchedFeaturedPrograms();
  }, [fetchData]);
  return {sliderPrograms, error, loading}

}
