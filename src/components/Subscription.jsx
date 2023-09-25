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
    <div className="subscription-container" >
      <div className="planHeader">
        <h3 className="planHeaderH3">JioCinema Premium</h3>
        <p>
          Welcome to the new home of all your favourite Hollywood content. The
          biggest, the best. Exclusively yours.
        </p>
      </div>
      <div className="planFeatures">
        <h6>Best of Hollywood</h6>
        <ul>
          <li>Watch on any device</li>
          <li>Highest video & audio quality</li>
          <li>Upto 4 devices simultaneously</li>
        </ul>
      </div>
      <p className="termAndCondition">
        By continuing you agree to our{" "}
        <span className="termAndConditionSpan">Terms of Use</span> and
        acknowledge that you have read our{" "}
        <span className="termAndConditionSpan">Privacy Policy</span> .
      </p>
      <div className="promocode">
        <a className="promocodeAnchor">Apply Promo Code</a>
        <button className="promocodeButton">continuie and Pay 999</button>
      </div>
      <div className="alreadySubscried">
        <p>Already Subscribed?</p>
        <a className="alreadySubscriedAnchor">click here</a>
      </div>
    </div>
    </div>
  );
}

export default Subscription;
