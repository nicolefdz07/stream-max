import { useState, useEffect } from "react";
 
export default function useCarrousel({fetchData}){
const [carrouselItems, setCarrouselItems] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)
  
useEffect(()=>{
    const fetchDataFunction = async()=>{
      setLoading(true)
      try{
        const data = await fetchData()
        setCarrouselItems(data)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
     
    fetchDataFunction()
  }, [fetchData])
  
  return {carrouselItems, error, loading}
}