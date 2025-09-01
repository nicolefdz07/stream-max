import { Spinner } from "@heroui/spinner";
import { useParams } from "react-router-dom";
import { getCast, getProgramById } from "../api";
import useProgramCast from "../hooks/useProgramCast";
import useProgramDetails from "../hooks/useProgramDetails";
import { FaPlus } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";

export default function ProgramsDetailsPage() {
  const { type, id } = useParams();
  const { programDetails, error, loading } = useProgramDetails(
    getProgramById,
    id,
    type
  );
  const { cast } = useProgramCast({ fetchCast: getCast, id, type });
  

  // console.log('genres: ', genres);
  console.log("cast: ", cast);
  console.log("programDetails: ", programDetails);

  if (loading) {
    return <Spinner color="default" />;
  }
  if (error) {
    return <div>Error loading program details</div>;
  }

  return (
    programDetails && (
      <div className="program-details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${programDetails.poster_path}`}
          alt={programDetails.title || programDetails.name}
        />
        <div className="program-details-info">
          <h2>{programDetails.title || programDetails.name}</h2>
          <div className="program-details">
            <span>{programDetails.adult === false ? "PG-13" : "18+"}</span>
            {programDetails.release_date && (
              <span>{programDetails.release_date.slice(0, 4)}</span>
            )}
            {programDetails.seasons &&
              Array.isArray(programDetails.seasons) && (
                <span>{programDetails.number_of_seasons} seasons</span>
              )}
          </div>
          <div className="program-actions">
            <button>< FaPlus /></button>
            <button><BiSolidMoviePlay /></button>
          </div>
          <div className="program-overview">
            <p>{programDetails.genres[0].name}</p>
            <p>{programDetails.overview}</p>
          </div>
        </div>
  
      </div>
    )
  );
}
