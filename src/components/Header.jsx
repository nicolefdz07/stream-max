import { CiBookmark, CiSearch } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";
import streamLogo from "../assets/stream-max.png";
import { FaBookmark } from "react-icons/fa";

// import { FaBookmark } from "react-icons/fa"; filled
export default function Header() {
  const location = useLocation();
  const isWatchlistPage = location.pathname === '/Watchlist';
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={streamLogo} alt="StreamMax Logo" />
          </Link>
        </div>
        <section className="header-categories">
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="series"
            >
              Series
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="movies"
            >
              Movies
            </NavLink>
          </nav>
        </section>
        <section className="header-icons">
          <nav>
            <Link to="search">
              <CiSearch color="white" size={32} />
            </Link>
            <Link to="Watchlist">
              {isWatchlistPage ? <FaBookmark color="white" size={32} /> : <CiBookmark color="white" size={32} />}
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
