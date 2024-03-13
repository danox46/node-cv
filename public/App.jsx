import React from "react";
import axios from "axios";
import PropsTypes from "prop-types";
import imgAvatar from "/assets/avatar.png";
import imgLocation from "/assets/location-icon.png";
import imgPhone from "/assets/phone-icon.png";
import imgEmail from "/assets/email-icon.png";
import imgLinkedin from "/assets/linkedin-icon.png";
import ProgressBar from "./ProgressBar";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
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
          <div className="column-contact-info">
            <div className="column-contact-info__addres flex-row">
              <img src={imgLocation} alt="location-icon" />
              <div>
                <h4>Addres</h4>
                <p>123 Anywhere St., Any City</p>
              </div>
            </div>

            <div class="column-contact-info__phone flex-row">
              <img src={imgPhone} alt="phone-icon" />
              <div>
                <h4>Phone</h4>
                <a href="https://www.google.com/">123-456-7890</a>
              </div>
            </div>

            <div class="column-contact-info__email flex-row">
              <img src={imgEmail} alt="email-icon" />
              <div>
                <h4>Email</h4>
                <a href="https://www.google.com/">hello@reallygreatsite.com</a>
              </div>
            </div>

            <div class="column-contact-info__linkedin flex-row">
              <img src={imgLinkedin} alt="linkedin-icon" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.google.com/">Carl Smith - LinkedIn</a>
              </div>
            </div>
          </div>

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

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
