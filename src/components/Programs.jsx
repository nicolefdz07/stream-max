import { useContext } from "react";
import SearchProgramsContext from "../context/SearchProgramsContext";

export default function Programs() {
  const { programs, loading, error } = useContext(SearchProgramsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    programs && (
      <section className="programs-grid">
        {programs.map((program) => (
          <div className="program" key={program.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${program.poster_path}`}
              alt={program.name || program.title || "Unknown Title"}
            />
            <div className="program-info">
              <h4>{program.name || program.title || "Unknown Title"}</h4>
              <span className="age-rating">{program.adult === "false" ? "13+" : "18+"}</span>
              <span>
                {program.release_date || program.first_air_date
                  ? (program.release_date || program.first_air_date).slice(0, 4)
                  : ""}
              </span>
            </div>
          </div>
        ))}
      </section>
    )
  );
}
