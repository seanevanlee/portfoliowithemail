import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I am </span>
        <span className="introName">Sean</span>
        <p className="intorPara">a full-stack developer</p>
        with experience in visually appealing websites.
        <br />I also have experiences in other fields such as <br />
        venture capital and tech sales.
        <Link>
          <button className="btn">
            <img src="" alt="" />
            Hire me!
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
