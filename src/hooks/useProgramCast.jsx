import { useEffect, useState } from "react";

export default function useProgramCast({fetchCast, id, type}){
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(id, type);
        setCast(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchCast, id, type]);

  return { cast, loading, error };
}
