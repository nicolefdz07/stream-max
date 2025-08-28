import { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Carrousel({programs, loading, error}) {

  const [current, setCurrent] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error</p>;

  const total = programs.length;
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="carrousel carrousel-outer">
      <button
        className="carrousel-arrow left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="carrousel-wrapper">
        {programs.map((program, idx) => (
          <div
            key={program.id}
            className={`carrousel-item${idx === current ? " active" : ""}`}
          >
            <img
              className="carrousel-img"
              id={`slide-${idx}`}
              src={`https://image.tmdb.org/t/p/original${program.backdrop_path}`}
              alt={program.title}
            />
            {/* info container */}
            <div className="carrousel-item-info">
              <h2>{program.title || "Not title"}</h2>
              <p>{program.overview}</p>
              <div className="carrousel-buttons">
                <button>see info</button>
                <button>Add to list</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carrousel-arrow right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
}
