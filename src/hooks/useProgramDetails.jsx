import { useEffect, useState } from "react";


export default function useProgramDetails(fetchProgram, id, type){
  const [programDetails, setProgramDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchProgramDetails = async()=>{
      setLoading(true);
      try{
        const res = await fetchProgram(id, type);
        
        setProgramDetails(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgramDetails();
  }, [id]);

  return { programDetails, error, loading };
}