import {  useRef } from "react";
import useGenrePrograms from "../hooks/useGenrePrograms";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {Spinner} from "@heroui/spinner";
import { Link } from "react-router-dom";
export default function GenreSliderCarrousel({ fetchProgramsById, id, title, type }) {
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

  if (loading) return (
    <Spinner color="default" />
  )
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
          <Link to={`/program/${program.media_type || type}/${program.id}`} key={program.id}>
            <div className="slider-carrousel-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${program.poster_path}`}
              />
            </div>
          </Link>
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
