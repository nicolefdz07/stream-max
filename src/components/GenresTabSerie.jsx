import { useContext, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useGenresList from "../hooks/useGenresList";

import ProgramsIdsContext from "../context/MovieGenreIdContext";




export default function GenresTabSerie({ fetchGenres }) {
  const [selectedId, setSelectedId] = useState(10759);
  const {setSerieId} = useContext(ProgramsIdsContext)
  const { genres } = useGenresList({ fetchGenres });
  const sliderRef = useRef(null);

  const handleClick = (e) => {
    const selectedGenre = e.currentTarget.dataset.id;
    console.log("Selected id:", selectedGenre);
    setSerieId(selectedGenre);
    setSelectedId(selectedGenre);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const amount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      const amount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="genres-tab-wrapper">
      <button
        className="carrousel-arrow left"
        onClick={scrollLeft}
        aria-label="Previous genres"
        
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="genres-tab" ref={sliderRef}>
        {genres.map((genre) => (
          <button
            className={`genre-button${String(selectedId) === String(genre.id) ? " selected" : ""}`}
            key={genre.id}
            onClick={handleClick}
            data-id={genre.id}
            data-genre={genre.name}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <button
        className="carrousel-arrow right"
        onClick={scrollRight}
        aria-label="Next genres"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
