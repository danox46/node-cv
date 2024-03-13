import React from "react";
import axios from "axios";
import PropsTypes from "prop-types";
import imgAvatar from "/assets/avatar.png";
import ProgressBar from "./ProgressBar";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Contact from "./Contact";
import References from "./References";
import "./index.css"; // General styles

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="column column-contact">
          <div className="column-sections">
            <img src={imgAvatar} alt="avatar-image" />
          </div>
          <h2>Contact me</h2>
          <hr class="divider" />
          <Contact />

          <div className="section-expertise">
            <h2>expertise</h2>
            <hr class="divider" />
            <ProgressBar />
          </div>

          <section>
            <h2>Sección 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
        </div>

        <div className="column column-experience">
          <div className="column-experience-name">
            <h1>Carl Smith.</h1>
            <h2>Graphic Designer</h2>
          </div>
          <div className="section-experience">
            <h2>WORK EXPERIENCE</h2>
            <hr class="divider" />
            <div className="section-experience__items">
              <WorkExperience />
            </div>

            <div className="section-education">
              <h2>EDUCATION</h2>
              <hr class="divider" />
              <div className="section-education__items">
                <Education />
              </div>
            </div>

            <div className="section-references">
              <h2>REFERENCES</h2>
              <hr class="divider" />
              <div className="section-references__items">
                <References />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
