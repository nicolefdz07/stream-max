import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useSliderCarrousel from "../hooks/useSliderCarrousel";

export default function SliderCarrousel({ fetchData }) {
  const { sliderPrograms, loading, error } = useSliderCarrousel({ fetchData });
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const amount = sliderRef.current.offsetWidth * 0.8; // 80% del ancho visible
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
      <h3>Featured</h3>
      <button
        className="carrousel-arrow left"
        onClick={scrollLeft}
        aria-label="Previous slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="slider-carrousel" ref={sliderRef}>
        {sliderPrograms.map((program) => (
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
