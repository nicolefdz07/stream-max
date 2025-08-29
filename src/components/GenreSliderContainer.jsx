import {  useRef } from "react";
import useGenrePrograms from "../hooks/useGenrePrograms";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function GenreSliderCarrousel({ fetchProgramsById, id, title }) {
  const { genrePrograms, loading, error } = useGenrePrograms({
    fetchProgramsById,
    id,
  });
  
  

  const sliderRef = useRef(null);

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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar</p>;
  
  return (
    <div className="slider-carrousel-container">
      {title &&<h3>{title}</h3>}
      <button
        className="carrousel-arrow left"
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="slider-carrousel" ref={sliderRef}>
        {genrePrograms.map((program) => (
          <div className="slider-carrousel-card" key={program.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${program.poster_path}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carrousel-arrow right"
        onClick={scrollRight}
        aria-label="Next slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
