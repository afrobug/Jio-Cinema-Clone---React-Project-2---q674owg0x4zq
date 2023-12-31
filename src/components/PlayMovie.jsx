import React, { useEffect, useState } from "react";
import "./Style.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from "../MovieApi/MovieCard";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "800px",
    height: "700px",
    border: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};
const PlayMovie = ({ isOpen, onClose, myListItem, showId, onClick }) => {
  const [videoContent, setVideoContent] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchVideoContent = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ott/show/${showId}`,

        {
          headers: {
            projectId: "q674owg0x4zq",
          },
        }
      );

      setVideoContent(response.data.data);
      console.log("content: ", videoContent);
    } catch (error) {
      console.error("Error in Movie extra data API:", error);
    }
  };

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ott/show",
        {
          headers: {
            projectId: "aopqdxbd59rz",
          },
        }
      );
      setMovies(response.data.data);
      console.log("movies-content: ", movies);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching extra data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchVideoContent();
      fetchMovies();
    }
  }, [isOpen, showId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      style={customStyles}
    >
      <div>
        <video
          src={videoContent.video_url}
          type="video/mp4"
          controls
          className="vdo"
        />
        <div className="vedio-container">
          <h3>{videoContent.title}</h3>
          <div className="vdo-contents">
            <div>
              <span className="buton">
                <PlayArrowIcon className="vd-icons" />
                play
              </span>
              <span className="span" onClick={onClick}>
                {myListItem ? (
                  <RemoveIcon className="vd-icon" />
                ) : (
                  <AddIcon className="vd-icon" />
                )}
              </span>
              <span className="span">
                <ThumbUpOffAltIcon className="vd-icon" />
              </span>
            </div>
            <div>
              <span className="span">
                <VolumeUpIcon className="vd-icon" />
              </span>
            </div>
          </div>
          <div className="vdo-contents two">
            <div className="vdo-dis">
              <p>{videoContent.description}</p>
            </div>
            <div>
              <p>Cast : {videoContent.cast} </p>
              <p>Genres :{videoContent.keywords} </p>
              <p>Director :{videoContent.director} </p>
            </div>
          </div>
        </div>
        <div className="vdo-more-container">
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="extra-movie">
              {movies.slice(10, 30).map((movie, index) => (
                <MovieCard
                  thumbnail={movie.thumbnail}
                  title={movie.title}
                  showId={movie._id}
                  keywords={movie.keywords}
                  key={index}
                  videoUrl={movie.video_url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PlayMovie;
