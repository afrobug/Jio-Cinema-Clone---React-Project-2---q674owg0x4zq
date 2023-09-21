import React, { useState, useRef } from "react";
import "./Style/movieStyle.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function MovieData({  show, first, last }) {
  const containerRef = useRef(null);
  const [, setScrollPosition] = useState(0);
  const [showLeftIcon, setShowLeftIcon] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
      setShowLeftIcon(containerRef.current.scrollLeft > 0);
    }
  };

  const slideRight2 = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollLeft += scrollAmount;
      setShowLeftIcon(true);
    }
  };

  const slideLeft2 = () => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollLeft -= scrollAmount;
      setShowLeftIcon(false);
    }
  };

  return (
    <div className="slider-container-2">
      {showLeftIcon && (
        <ArrowBackIosNewIcon
          fontSize="large"
          onClick={() => {
            slideLeft2();
          }}
          className="slider-icon-2 left"
        />
      )}

      <div
        ref={containerRef}
        className="image-container-2"
        onScroll={handleScroll}
      >
        {show.slice(first,last).map((shows)=>{
          return (
        <div>
          <Link to="/">
            <img src={shows.thumbnail} alt="" />
          </Link>
        </div>
        )})}
      </div>

      <ArrowForwardIosIcon
        fontSize="large"
        onClick={() => {
          slideRight2();
        }}
        className="slider-icon-2 right"
      />
    </div>
  );
}

export default MovieData;
