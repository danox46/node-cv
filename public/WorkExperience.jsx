import React from "react";
import './css/modules.css';

const ExperienceData = [
  {
    id: 1,
    year: "2018 - 2020",
    company: "Company A",
    position: "Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    year: "2020 - Present",
    company: "Company B",
    position: "Designer",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    year: "2015 - 2018",
    company: "Company C",
    position: "Manager",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    year: "2010 - 2015",
    company: "Company D",
    position: "Analyst",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      {ExperienceData.map((item) => (
        <div className="experience-item flex-section" key={item.id}>
          <div className="experience-item__date width-30">
            <h3>{item.year}</h3>
            <h4>Position: {item.position}</h4>
          </div>
          <div className="experience-item__info width-70">
            <h3>{item.company}</h3>
            <p>Description: {item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
