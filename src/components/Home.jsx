import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShow } from "../Redux/movieSlice";
import MovieData from "./MovieData";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.show);

  useEffect(()=>{
    dispatch(getShow());
  },[dispatch])

  return (
    <div>
      <Navbar />
      <MovieData show={show} first={0} last={10}/>
    </div>
  ) 
};

export default Home;
