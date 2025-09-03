import { createContext, useEffect, useState } from "react";
import { getProgramsResults } from "../api";

const SearchProgramsContext = createContext()

export const SearchProgramsProvider = ({children})=>{
  const [term, setTerm] = useState("")
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  

   const fetchPrograms = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    try {
      const results = await getProgramsResults(searchTerm);
      setPrograms(results);
    } catch (err) {
      console.error(err);
      setError("Error fetching programs");
    } finally {
      setLoading(false);
    }
  };
  // debounce 500ms
  useEffect(() => {
    if (!term.trim()) {
      setPrograms([]);
      return;
    }

    const handler = setTimeout(() => {
      fetchPrograms(term);
    }, 500); 

    return () => clearTimeout(handler); 
  }, [term]);

  const clearSearch = () => {
    setTerm("");
    setPrograms([]);
    setError(null);
  }

  const searchProgramsCtx = {
    term,
    setTerm,
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