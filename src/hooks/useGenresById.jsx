import { useEffect, useState } from "react";

export default function useGenresById({fetchGenres, id, type}){
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGenres(id, type);
        setGenres(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchGenres, id, type]);

  return { genres, loading, error };
}
