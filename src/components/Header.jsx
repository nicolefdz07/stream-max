import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import streamLogo from "../assets/stream-max.png";
import { CiSearch } from "react-icons/ci";

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
            <Link to="/">Home</Link>
            <Link to="">Series</Link>
            <Link to="">Movies</Link>
            <Link to="">Kids and Family</Link>
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
