
import PropertyTypes from "prop-types";
import PropTypes from "prop-types";
import imgAvatar from "/assets/avatar.png";
import ProgressBar from "./components/ProgressBar";
import Languages from "./components/Languages";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import References from "./components/References";
import Divider from "./components/TitleDivider";
import Form from "./components/Form";
import "./index.css"; // General styles

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="column-image">
        <img className="user-image" src={imgAvatar} alt="avatar-image" />
        </div>
      <div className="column-name">
      <h1>Carl Smith.</h1>
            <h2>Graphic Designer</h2>
            </div>
      </div>
      <div className="box">
        <div className="column column-contact">
          <div className="section-contact">
            <Divider title="Contact" />
            
            <Contact />
            <Profile />
          </div>
          <div className="section-expertise">
            <Divider title="Expertise" />
            <ProgressBar />
          </div>

          <div className="section-languages">
            <Divider title="Languages" />
           <Languages />
          </div>
        </div>

        <div className="column column-experience">
          <div className="section-experience">
            <Divider title="WORK EXPERIENCE" />
            <WorkExperience />
          </div>
          <div className="section-education">
            <Divider title="EDUCATION" />
            <Education />
          </div>
          <div className="section-references">
            <Divider title="REFERENCE" />
            <References />
          </div>
        </div>
      </div>

    <Form />
      
    </div>
  );
};

export default App;
