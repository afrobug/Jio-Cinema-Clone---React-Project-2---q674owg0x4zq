import React, { useEffect } from "react";
import { getWatchlist } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Watchlist = () => {
  const { show } = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getWatchlist());
  }, [dispatch]);

  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 50,
          margin: 20,
        }}
      >
        Watchlist
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {show.length > 0 ? (
          show.map((movie, index) => (
            <div key={index}>
              <img
                style={{ borderRadius: "20px" }}
                src={movie.thumbnail}
                alt={movie.title}
                width={200}
                height={210}
              />

              <p style={{ color: "white" }}>{movie.title}</p>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>Loading</p>
        )}
      </div>
    </>
  );
};

export default Watchlist;
