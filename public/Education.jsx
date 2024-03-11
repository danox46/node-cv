import React from "react";
import './css/education.css';

const EducationData = [
  {
    id: 1,
    year: "2014 - 2018",
    institution: "University A",
    degree: "Bachelor's Degree in Computer Science",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    year: "2010 - 2014",
    institution: "High School B",
    degree: "High School Diploma",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    year: "2005 - 2010",
    institution: "Elementary School C",
    degree: "Elementary School Diploma",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    year: "2003 - 2005",
    institution: "Preschool D",
    degree: "Preschool Certificate",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      {EducationData.map((item) => (
        <div className="education-item" key={item.id}>
          <div className="education-item__date">
            <h3>{item.year}</h3>
            <h4>Degree: {item.degree}</h4>
          </div>
          <div className="education-item__info">
            <h3>{item.institution}</h3>
            <p>Description: {item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
