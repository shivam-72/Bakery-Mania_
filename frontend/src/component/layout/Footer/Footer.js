import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Bakery Mania.</h1>
        <p>High Quality is our first priority</p>

        <p className="copRight">
          Copyrights 2023 &copy;{" "}
          <a href="(https://www.instagram.com/shivam.sinha_1/?igshid=ZGUzMzM3NWJiOQ%3D%3D">
            Shivam Prakash
          </a>
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/shivam.sinha_1/?igshid=ZGUzMzM3NWJiOQ%3D%3D">
          Instagram
        </a>
        <a href="https://leetcode.com/shivam-727/">LeetCode</a>
        <a href="https://www.linkedin.com/in/shivam-prakash-0403b420a/">
          Linkedin
        </a>
        <a href="https://auth.geeksforgeeks.org/user/shivamsinha72/practice/">
          GeeksForGeeks
        </a>
      </div>
    </footer>
  );
};

export default Footer;
