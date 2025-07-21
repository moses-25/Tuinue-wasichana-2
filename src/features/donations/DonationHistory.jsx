import React from "react";
import "./DonationHistory.css";

const DonationHistory = ({ donations = [] }) => {
  if (!donations.length) {
    return <div className="donation-history-empty">No donations yet.</div>;
  }

  return (
    <div className="donation-history-container">
      <h2>Donation History</h2>
      <table className="donation-history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Charity</th>
            <th>Amount ($)</th>
            <th>Status</th>
            <th>Repeat</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((d, idx) => (
            <tr key={d.id || idx}>
              <td>{new Date(d.date).toLocaleDateString()}</td>
              <td>{d.charityName}</td>
              <td>{d.amount}</td>
              <td>{d.status || "Success"}</td>
              <td>{d.repeat ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationHistory;