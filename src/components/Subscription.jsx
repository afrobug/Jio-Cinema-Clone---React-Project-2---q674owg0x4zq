import React, { useContext } from "react";
import "./Style/Subscription.css";
import Navbar from "./Navbar";
// import { MyContext } from "../App";

function Subscription() {
  //   const { setSeaarchActive, slider, setSlider } = useContext(MyContext);
  //   setSeaarchActive(false);
  return (
    <div>
      <Navbar />
      <div className="subscription-container">
        <div className="planHeader">
          <h2 className="planHeaderH3">JioCinema Premium</h2>
          <br />
          <p>
            Welcome to the new home of all your favourite Hollywood content. The
            biggest, the best. Exclusively yours.
          </p>
        </div>

        <div className="planFeatures">
          <h3>Best of Hollywood</h3>
          <ul>
            <li>Watch on any device</li>
            <li>Highest video & audio quality</li>
            <li>Upto 4 devices simultaneously</li>
          </ul>
          <div className="months">
            <p>12 Months</p>
          </div>
          <div className="pay">
            <span>₹</span>999
          </div>
        </div>
        <p className="termAndCondition">
          By continuing you agree to our{" "}
          <span className="termAndConditionSpan">Terms of Use</span> and
          acknowledge that you have read our{" "}
          <span className="termAndConditionSpan">Privacy Policy</span> .
        </p>
        <div className="promocode">
          <a href="#" className="promocodeAnchor">
            Apply Promo Code
          </a>
          <button className="promocodeButton">Continue and Pay 999</button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
