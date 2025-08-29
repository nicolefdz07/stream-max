import { createContext, useState } from "react";

const ProgramsIdsContext = createContext();

export const ProgramsIdsProvider = ({children})=> {
  const [movieId, setMovieId] = useState(28);
  const [serieId, setSerieId] = useState(10759);

  const programsIdContext = {
    movieId,
    setMovieId,
    serieId,
    setSerieId
  }
  return (
    <ProgramsIdsContext.Provider value={programsIdContext}>
      {children}
    </ProgramsIdsContext.Provider>

  )


}
export default ProgramsIdsContext;