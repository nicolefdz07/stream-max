import { CiBookmark, CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import streamLogo from "../assets/stream-max.png";

// import { FaBookmark } from "react-icons/fa"; filled
export default function Header() {
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
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to=""
            >
              Kids and Family
            </NavLink> */}
          </nav>
        </section>
        <section className="header-icons">
          <nav>
            <Link to="">
              <CiSearch color="white" size={32} />
            </Link>
            <Link to="">
              <CiBookmark color="white" size={32} />
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
