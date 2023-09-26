import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Style/detail.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Detail = () => {
  const newFile = JSON.parse(localStorage.getItem("newFile"));

  let { id } = useParams();

  const { setNewFile, setActiveLink, setVideoUrl } = useContext(MyContext);

  console.log("this is newFile in ShowDetails", newFile);

  setVideoUrl(newFile.video_url);

  const [slidedetailapi, setslidedetailapi] = useState({});

  setActiveLink("hello");

  const apiUrl = `https://academics.newtonschool.co/api/v1/ott/show/${id}`;
  const headers = {
    projectId: "q674owg0x4zq",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(apiUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setslidedetailapi(data.data);
        setNewFile(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
        <Navbar />
    <div className="DeatilsPage">
      <section className="detailssection">
        <div className="detailsdescription">
          <div className="detailalltext">
            <h1>{newFile.title}</h1>
            <p>
              {newFile?.keywords?.map((keyword, index) => (
                <span key={index}>
                  <FiberManualRecordIcon
                    style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
                  />
                  {keyword}
                </span>
              ))}
              {""}
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
              />
              <span>{newFile.type}</span>
            </p>
            <p>{newFile.description}</p>
            <p>
              <span id="spantext">Cast: </span> {newFile.cast?.join(", ")}
            </p>
            <p>
              <span id="spantext">Director: </span>
              {newFile?.director}
            </p>
            <div className="detailsbtn">
              {" "}
              <Link to={`/Video/${newFile._id}`}>
                <button
                  className="detailsbtnButton"
                  onClick={() => setVideoUrl(newFile.video_url)}
                >
                  Play
                </button>
              </Link>
            </div>
            <div className="detailsactionbtn">
              <div onClick={() => {}}></div>{" "}
            </div>
          </div>
        </div>
        <div
          className="detailsimage"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0),rgba(21, 21, 21, 1)), url(${newFile.thumbnail})`,
          }}
        ></div>
      </section>
      <h3 style={{ color: "white", marginLeft: "15px" }}>More Like This</h3>
      <Footer />
    </div>
    </div>
  );
};

export default Detail;
