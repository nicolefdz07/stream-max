import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useSliderCarrousel from "../hooks/useSliderCarrousel";
import { Spinner } from "@heroui/spinner";
import { Link } from "react-router-dom";

export default function SliderCarrousel({ fetchData, title, type }) {
  const { sliderPrograms, loading, error } = useSliderCarrousel({ fetchData });
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

  if (loading) return <Spinner color="default" />;
  if (error) return <p>Error al cargar</p>;
  return (
    <div className="slider-carrousel-container">
      <h3>{title}</h3>
      <button
        className="carrousel-arrow left"
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        <MdKeyboardArrowLeft />
      </button>

      <div className="slider-carrousel" ref={sliderRef}>
        {sliderPrograms.map((program) => (
          <Link to={`/program/${program.media_type || type}/${program.id}`}>
            <div className="slider-carrousel-card" key={program.id}>
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
