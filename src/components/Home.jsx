import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../Redux/movieSlice";
import MovieData from "./MovieData";
import Navbar from "./Navbar";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Binge from "./Binge";
import Trending from "./Trending";
import Sports from "./Sports";
import Hollywood from "./Hollywood";

const Home = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.show);

  useEffect(() => {
    dispatch(getShow());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* <MovieData show={show} first={0} last={10}/> */}

      <Container>
        <ImageSlider />
        <Trending />
        <Binge />
        <Sports />
        <Hollywood />
      </Container>
    </div>
  );
};

const Container = styled.main`
  position: relative;
  top: 72px;
  overflow-x: hidden;
  display: block;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  font-size: 30px;
`;

export default Home;
