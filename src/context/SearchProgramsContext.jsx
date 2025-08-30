import { createContext, useState } from "react";
import { getProgramsResults } from "../api";

const SearchProgramsContext = createContext()

export const SearchProgramsProvider = ({children})=>{
  const [term, setTerm] = useState("")
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChangeTerm = (e)=>{
    const newTerm = e.target.value;
    setTerm(newTerm.trim());

  }

  const fetchPrograms = async(e)=>{
    e.preventDefault();
    setLoading(true);
    if (!term.trim()) return;
    try{
      const results = await getProgramsResults();
      setPrograms(results);
    }catch(error){
      console.log(error);
      setError("Error fetching programs");
    }finally{
      setLoading(false);
    }
  }

  const clearSearch = () => {
    setTerm("");
    setPrograms([]);
    setError(null);
  }

  const searchProgramsCtx = {
    term,
    handleChangeTerm,
    fetchPrograms,
    programs,
    loading, 
    error,
    clearSearch
  }
  return (
    <SearchProgramsContext.Provider value={searchProgramsCtx}>
      {children}
    </SearchProgramsContext.Provider>
  )

}
export default SearchProgramsContext;