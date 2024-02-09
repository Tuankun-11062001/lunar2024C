import React from "react";
import titlePng from "../images/title.png";
import apricot from "../images/apricot.svg";
import lanternRight from "../images/lanternRight.svg";
import lanternLeft from "../images/lanternLeft.svg";
import cloud from "../images/cloud.svg";
import user from "../images/user.svg";
import { Link } from "react-router-dom";
const Decoration = () => {
  return (
    <div className="decoration">
      <div className="admin_button">
        <Link to="/login">
          <img src={user} />
        </Link>
      </div>
      <div className="title">
        <img src={titlePng} />
      </div>
      <div className="apricot">
        <img src={apricot} />
      </div>
      <div className="lantern_right">
        <img src={lanternRight} />
      </div>
      <div className="lantern_left">
        <img src={lanternLeft} />
      </div>
      <div className="lantern_left_2">
        <img src={lanternLeft} />
      </div>
      <div className="cloud">
        <img src={cloud} />
      </div>
    </div>
  );
};

export default Decoration;
