import { useState, useEffect } from "react";
import {getTrendingCarrousel} from "../api";
export default function useCarrousel(){
const [carrouselItems, setCarrouselItems] = useState([])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(true)
  
useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true)
      try{
        const data = await getTrendingCarrousel()
        setCarrouselItems(data)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  
  return {carrouselItems, error, loading}
}