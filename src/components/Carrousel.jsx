import { useState } from "react";
import {Spinner} from "@heroui/spinner";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useCarrousel from "../hooks/useCarrousel";


export default function Carrousel({ fetchData }) {
  const { carrouselItems, loading, error } = useCarrousel({ fetchData });
  const [current, setCurrent] = useState(0);

  if (loading) return (
    <Spinner color="default" />
  )
  if (error) return <p>There was an error</p>;

  const total = carrouselItems.length;
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
        {carrouselItems.map((program, idx) => (
          <div
            key={program.id}
            className={`carrousel-item${idx === current ? " active" : ""}`}
          >
            <img
              className="carrousel-img"
              id={`slide-${idx}`}
              src={`https://image.tmdb.org/t/p/original${program.backdrop_path}`}
              alt={program.title || program.name}
            />
            {/* info container */}
            <div className="carrousel-item-info">
              <h2>{program.title || program.name || "Unknown title"}</h2>
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
