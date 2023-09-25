import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../Redux/movieSlice";
import Navbar from "./Navbar";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Trending from "./Trending";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.show);

  useEffect(() => {
    dispatch(getShow());
  }, [dispatch]);
  console.log("show", show);

  return (
    <div>
      <Navbar />
      <Container>
        <ImageSlider />
        <Trending
          show={show}
          title="Latest & Trending
"
          first={0}
          last={7}
        />
        <Trending
          show={show}
          title="Binge-Worthy Originals
"
          first={8}
          last={15}
        />
        <Trending
          show={show}
          title="Top Hollywood Movies
"
          first={16}
          last={23}
        />
      </Container>
      <Footer />
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
