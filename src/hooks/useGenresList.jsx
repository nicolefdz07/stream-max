
import { useEffect, useState } from "react";

export default function useGenresList({fetchGenres}){
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchGenresList = async()=>{
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGenresList();
  }, [fetchGenres])

  return {genres, loading, error};

}