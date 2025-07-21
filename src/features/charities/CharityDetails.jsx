import React from "react";
import "./CharityDetails.css";

const CharityDetails = ({ charity, onBack }) => {
  if (!charity) return <div className="charity-details-empty">Charity not found.</div>;

  return (
    <div className="charity-details-container">
      <button className="charity-details-back" onClick={onBack}>&larr; Back</button>
      <div className="charity-details-header">
        <img
          className="charity-details-logo"
          src={charity.logo || "/assets/images/logo.png"}
          alt={charity.name}
        />
        <h2>{charity.name}</h2>
      </div>
      <div className="charity-details-body">
        <p>{charity.description}</p>
        <div className="charity-details-info">
          <div>
            <strong>Total Donations:</strong> ${charity.totalDonated ?? 0}
          </div>
          <div>
            <strong>Beneficiaries:</strong> {charity.beneficiariesCount ?? "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharityDetails;