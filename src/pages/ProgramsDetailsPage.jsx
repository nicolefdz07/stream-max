import { useParams } from "react-router-dom";
import { getProgramById } from "../api";
import useProgramDetails from "../hooks/useProgramDetails";
import {Spinner} from "@heroui/spinner";

export default function ProgramsDetailsPage() {
  const { type, id } = useParams();
  const { programDetails, error, loading } = useProgramDetails(
    getProgramById,
    id, type
  );

  if(loading){
    return <Spinner color="default" />
  }

  return (
    programDetails && (
      <div className="program-details-page">
        <img
          src={`https://image.tmdb.org/t/p/w500${programDetails.poster_path}`}
          alt={programDetails.title || programDetails.name}
        />
        <h2>{programDetails.title || programDetails.name}</h2>
        <p>{programDetails.overview}</p>
      </div>
    )
  );
}
