import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import "../App.css";

const Navbar = () => {
  const { setVideoUrl, slider, setSlider, activeLink, setActiveLink } =
    useContext(MyContext);
  const [lessThanPixel, setLessThanPixel] = useState(false);
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const [middleSlider, setMiddleSlider] = useState(false);
  const myName = localStorage.getItem("myName");

  const [myLocalData, setMYLocalData] = useState([]);
  useEffect(() => {
    const mydata = localStorage.getItem("myLocalData") || [
      ["/", "Home"],
      ["subscription", "Subscription"],
      ["Watchlist", "Watchlist"],
      ["web-series", "Web Series"],
    ];
    if (!localStorage.getItem("myName")) setActiveLink("hwy");
    setMYLocalData(mydata);
  }, []);

  return (
    <div className="header">
      <div className="header1">
        <img
          onClick={() => {
            setLessThanPixel(!lessThanPixel);
          }}
          className="menu"
          src="https://th.bing.com/th/id/R.7917c643053737a32ee070e8eca7fb3d?rik=OJPogICGQrUuGQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_51584.png&ehk=4OfpX4nPa1hboxLz4swH0KV0EzWl9%2fF1NygH7LzN6tE%3d&risl=&pid=ImgRaw&r=0"
        ></img>
        <img src="https://www.jiocinema.com/images/jc_logo_v2.svg" alt="logo" />
        {myLocalData.map((data) => (
          <h4
            className={` ${activeLink === data[1] ? "active" : ""}`}
            onClick={() => {
              handleLinkClick(data[1]);
            }}
          >
            <Link
              to={`${data[0]}`}
              style={{
                textDecoration: "none",
                color: "white",
                padding: "10px 10px",
              }}
            >
              {data[1]}
            </Link>
          </h4>
        ))}
        <h5
          onClick={() => setMiddleSlider(!middleSlider)}
          className="headerNewGroup"
          style={{ fontSize: "50px", padding: "0", margin: "0" }}
        >
          +
        </h5>
        {middleSlider && (
          <div
            onClick={() => setMiddleSlider(false)}
            className="newAddGroupDiv"
            style={{
              height: "350px",
              width: "200px",
              position: "absolute",
              top: "60px",

              left: "55%",
            }}
          >
            <h4
              onClick={() => {
                setMYLocalData([...myLocalData, ["SortFilm", "SortFilm"]]);
              }}
              className="newAddGroupDivh4"
              style={{
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              SortFilm
            </h4>
          </div>
        )}
      </div>
      {lessThanPixel && (
        <div className="lessWidth">
          {myLocalData.map((data) => (
            <h4
              className={` ${activeLink === data[1] ? "active" : ""}`}
              onClick={() => {
                setLessThanPixel(!lessThanPixel);
                handleLinkClick(data[1]);
              }}
            >
              <Link
                to={`${data[0]}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 10px",
                }}
              >
                {data[1]}
              </Link>
            </h4>
          ))}
        </div>
      )}
      <div className="header2">
        <input type="text" placeholder="Search" />
        <img
          onClick={() => {
            setSlider(!slider);
          }}
          className="logo"
          src="https://www.jiocinema.com/images/profile/profile_avatar.svg"
          alt="Icon"
        />
      </div>
      {slider && (
        <div className="slider" onClick={() => setSlider(!slider)}>
          <div>
            <img src="https://www.jiocinema.com/images/profile/profile_avatar.svg" />
            <h3 className="sliderH5">Hi! {myName}</h3>
          </div>
          <h1
            onClick={() => {
              window.location.href = "/SignUp";
              setSlider(false);
            }}
          >
            SignUp
          </h1>
          <h1
            onClick={() => {
              window.location.href = "/PasswordUpdateForm";
              setSlider(false);
            }}
          >
            Change Password
          </h1>
          <h1
            onClick={() => {
              localStorage.setItem("jwtToken", "");
              localStorage.setItem("myName", "hey");
              setActiveLink("sd");
              window.location.href = "/";
            }}
          >
            SignOut
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;