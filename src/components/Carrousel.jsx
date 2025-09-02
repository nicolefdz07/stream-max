import { Spinner } from "@heroui/spinner";
import { useContext, useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa6";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import WatchListContext from "../context/WatchListContext";
import useCarrousel from "../hooks/useCarrousel";

export default function Carrousel({ fetchData, type }) {
  const { carrouselItems, loading, error } = useCarrousel({ fetchData });
  const [current, setCurrent] = useState(0);
  const { addProgram, myWatchList, removeProgram } = useContext(WatchListContext);

  if (loading) return <Spinner color="default" />;
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
        {carrouselItems.map((program, idx) => {
          const isInList = myWatchList.some(
            (item) =>
              item.id === program.id &&
              (item.type === program.media_type || item.type === type)
          );
          return (
            <div
              key={program.id}
              className={`carrousel-item${idx === current ? " active" : ""}`}
            >
              <Link to={`/program/${program.media_type || type}/${program.id}`}>
                <img
                  className="carrousel-img"
                  id={`slide-${idx}`}
                  src={`https://image.tmdb.org/t/p/original${program.backdrop_path}`}
                  alt={program.title || program.name}
                />
              </Link>
              <div className="carrousel-item-info">
                <h2>{program.title || program.name || "Unknown title"}</h2>
                <p>{program.overview}</p>
                <div className="carrousel-buttons">
                  <Link
                    to={`/program/${program.media_type || type}/${program.id}`}
                  >
                    <button className="btn">See info</button>
                  </Link>
                  <button
                    className="mylist-btn"
                    onClick={
                      isInList ? ()=> removeProgram(program) :
                      () =>
                      addProgram({
                        ...program,
                        type: program.media_type || type,
                      })
                    }
                  >
                    <span className="icon">
                      {isInList ? <FaCheck /> : <FaPlus />}
                    </span>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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
