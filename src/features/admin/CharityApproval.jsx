import React from "react";
import "./CharityApproval.css";

const CharityApproval = ({ pendingCharities = [], onApprove, onReject }) => {
  if (!pendingCharities.length) {
    return <div className="charity-approval-empty">No pending charity applications.</div>;
  }

  return (
    <div className="charity-approval-container">
      <h2>Charity Applications for Review</h2>
      <table className="charity-approval-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingCharities.map((charity) => (
            <tr key={charity.id}>
              <td>{charity.name}</td>
              <td>{charity.email}</td>
              <td>{charity.description}</td>
              <td>
                {charity.website ? (
                  <a href={charity.website} target="_blank" rel="noopener noreferrer">
                    {charity.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <button
                  className="charity-approval-btn approve"
                  onClick={() => onApprove && onApprove(charity.id)}
                >
                  Approve
                </button>
                <button
                  className="charity-approval-btn reject"
                  onClick={() => onReject && onReject(charity.id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharityApproval;