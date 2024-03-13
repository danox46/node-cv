import React from "react";
import './css/modules.css';  // Styles for recommendations

// Data for recommendations
const RecommendationsData = [
  {
    id: 1,
    type: 'personal',
    name: 'John Doe',
    position: 'Friend',
    phone: '123-456-7890',
    email: 'john@example.com',
  },
  {
    id: 2,
    type: 'personal',
    name: 'Jane Smith',
    position: 'Neighbor',
    phone: '987-654-3210',
    email: 'jane@example.com',
  },
  {
    id: 3,
    type: 'work',
    name: 'Alice Johnson',
    position: 'Manager',
    phone: '555-555-5555',
    email: 'alice@example.com',
  },
  {
    id: 4,
    type: 'work',
    name: 'Bob Williams',
    position: 'Supervisor',
    phone: '444-444-4444',
    email: 'bob@example.com',
  },
];

// Component for recommendations
const Recommendations = () => {
  // Function to render recommendations
  const renderRecommendations = () => {
    return RecommendationsData.map((item) => (
      <div key={item.id} className={`recommendation-item ${item.type} flex-section-column`}>
        <div>
        <h3>{item.name}</h3>
        <h4>{item.position}</h4>
        </div>
        <div>
          <p>Phone: {item.phone}</p>
          <p>Email: {item.email}</p>
        </div>
      </div>
    ));
  };

  // Render recommendations
  return <div className="recommendations-container flex-section-references">{renderRecommendations()}</div>;
};

export default Recommendations;
