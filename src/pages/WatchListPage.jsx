import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti";


export default function WatchlistPage() {
  const { myWatchList, removeProgram } = useContext(WatchListContext);

  return (
    myWatchList && (
      <section className="watchlist-container">
        <h1>My Stuff</h1>
        <h3>My List</h3>
        <div className="watchlist-grid">
          {myWatchList.map((program) => (
            <div className="watchlist-card" key={program.id}>
              <Link
                to={`/program/${program.type}/${program.id}`}
                key={program.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w342${program.backdrop_path}`}
                  alt={program.title || program.name}
                />
              </Link>
              <div className="list-actions">
                <h4>{program.title || program.name}</h4>
                <TiDelete onClick={() => removeProgram(program)} />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );
}
