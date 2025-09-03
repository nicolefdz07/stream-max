import { useEffect, useState } from "react";

export default function useTrailerUrl ({fetchUrl, id, type}){
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchUrlTrailer = async()=>{
      setLoading(true)
      try{
        const data = await fetchUrl(id, type)
        setUrl(data)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      
      }
    }
   fetchUrlTrailer()
  }, [fetchUrl, id, type])

  return {url, error, loading}
}