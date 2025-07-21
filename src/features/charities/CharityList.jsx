import React, { useEffect } from "react";
import "./CharityList.css";

const CharityList = ({ charities = [], onSelectCharity }) => {
  useEffect(() => {
    // You could fetch charities here if not provided via props, or use redux dispatch
  }, []);

  if (!charities.length) {
    return <div className="charity-list-empty">No charities found.</div>;
  }

  return (
    <div className="charity-list-container">
      <h2>Charities</h2>
      <div className="charity-list">
        {charities.map((charity) => (
          <div
            className="charity-card"
            key={charity.id}
            onClick={() => onSelectCharity && onSelectCharity(charity)}
            tabIndex={0}
          >
            <img
              src={charity.logo || "/assets/images/logo.png"}
              alt={charity.name}
              className="charity-card-logo"
            />
            <div className="charity-card-content">
              <h3>{charity.name}</h3>
              <p>{charity.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharityList;
