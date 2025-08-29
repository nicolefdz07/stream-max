import { useEffect, useState } from "react";

export default function useGenrePrograms({ fetchProgramsById, id }) {
  const [genrePrograms, setGenresPrograms] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGenrePrograms = async () => {
      setLoading(true);
      try {
        const data = await fetchProgramsById(id);
        setGenresPrograms(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenrePrograms();
  }, [fetchProgramsById, id]);

  
  useEffect(() => {
    console.log("genrePrograms:", genrePrograms);
  }, [genrePrograms]);

  return { genrePrograms, error, loading };
}
