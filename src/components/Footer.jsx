import React from "react";
import "./Style/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="jioFooter">
          <h3>JioCinema</h3>
          <a href="#">
            <p>For You</p>
          </a>
          <a href="#">
            <p>Sports</p>
          </a>
          <a href="#">
            <p>Movie</p>
          </a>
          <a href="#">
            <p>TV Shows</p>
          </a>
        </div>
        <div>
          <h3>Support</h3>
          <a href="https://www.jiocinema.com/help?uid=897f0698-45cd-40d4-a986-be68e059d1cf&name=Meghna_7002">
            <p>Help Center</p>
          </a>
          <a href="https://www.jiocinema.com/tou?uid=897f0698-45cd-40d4-a986-be68e059d1cf&name=Meghna_7002">
            <p>Terms of Use</p>
          </a>
          <a href="https://www.jiocinema.com/pp?uid=897f0698-45cd-40d4-a986-be68e059d1cf&name=Meghna_7002">
            <p>Privacy Policy</p>
          </a>
          <a href="https://www.jiocinema.com/cc?uid=897f0698-45cd-40d4-a986-be68e059d1cf&name=Meghna_7002">
            <p>content Complents</p>
          </a>
        </div>

        <div className="rowFooter">
          <h2 className="connects">Connect With Us</h2>
          <div className="circle">
            <a href="https://www.facebook.com/JioCinema/">
              <img
                src="https://www.jiocinema.com/images/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com/JioCinema">
              <img
                src="https://www.jiocinema.com/images/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com/officialjiocinema/">
              <img
                src="https://www.jiocinema.com/images/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="https://www.youtube.com/channel/UC8To9CFsZzvPafxMLzS08iA">
              <img
                src="https://www.jiocinema.com/images/youtube.svg"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
        <div className="download">
          <h2>Download the App</h2>
          <a href="https://play.google.com/store/apps/details?id=com.jio.media.ondemand&hl=en_IN&gl=US">
            <img
              src="https://www.jiocinema.com/images/googlePlay.svg"
              alt="Google Play"
            />
          </a>
          <a href="https://apps.apple.com/in/app/jiocinema/id1067316596">
            <img
              src="https://www.jiocinema.com/images/appleStore.svg"
              alt="Apple Store"
            />
          </a>
        </div>
      </div>
      <div className="footerBottom">
        <p>Copyright © 2023 Viacom18 Media PVT LTD.All rights reserved.</p>
        <img src="/images/footerBottom.png" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
