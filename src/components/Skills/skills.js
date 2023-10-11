import React from "react";
import "./skills.css";
// import UIDesign from '../../assets/ui-design.png';
// import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../..assets/app-design.png';
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I love creating cool tech.</span>
      <div className="skillBars">
        <div className="skillBar">
          {/* <img src={UIDesign} alt="UIDesign" className="skillBarImg" /> */}
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Fresh front-end development is my passion.</p>
          </div>
        </div>
        <div className="skillBar">
          {/* <img src={WebDesign} alt="WebDesign" className="skillBarImg" /> */}
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Tell me what you want to achieve and we can collaborate together.
            </p>
          </div>
        </div>
        <div className="skillBar">
          {/* <img src={AppDesign} alt="AppDesign" className="skillBarImg" /> */}
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>I love mobile apps!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
