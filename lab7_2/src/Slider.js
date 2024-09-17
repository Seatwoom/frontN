import React, { useState, useEffect } from "react";
import GoodsCard from "./GoodsCard";

const Slider = ({ goods }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = currentIndex === 0 ? goods.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === goods.length - 1 ? 0 : currentIndex + 1;

  const prevSlide = () => {
    setCurrentIndex(prevIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="prev-btn">
        <span className="arrow left"></span>
      </button>
      <div className="slider">
        <div className="slide prev">
          <GoodsCard
            image={goods[prevIndex].image}
            title={goods[prevIndex].title}
            price={goods[prevIndex].price}
          />
        </div>
        <div className="slide active">
          <GoodsCard
            image={goods[currentIndex].image}
            title={goods[currentIndex].title}
            price={goods[currentIndex].price}
          />
        </div>
        <div className="slide next">
          <GoodsCard
            image={goods[nextIndex].image}
            title={goods[nextIndex].title}
            price={goods[nextIndex].price}
          />
        </div>
      </div>
      <button onClick={nextSlide} className="next-btn">
        <span className="arrow right"></span>
      </button>
    </div>
  );
};

export default Slider;
