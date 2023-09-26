import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ImageSlider = ({ show }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  console.log("show", show[0]);

  return (
    <Carousel {...settings}>
      {show.map((item, index) => {
        if (index <= 4) {
          return (
            <Wrap key={index}>
              <Link to="/detail">
                <a>
                  <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    onClick={() => {
                      localStorage.setItem("newFile", JSON.stringify(item));
                    }}
                  />
                </a>
              </Link>
            </Wrap>
          );
        }
      })}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 20px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    overflow: hidden;

    img {
      overflow: hidden;
      height: 60vh;
      width: 100%;
      object-fit: fill;
    }

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImageSlider;
