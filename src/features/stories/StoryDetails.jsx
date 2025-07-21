import React from "react";
import "./StoryDetails.css";

const StoryDetails = ({ story, onBack }) => {
  if (!story) return <div className="story-details-empty">Story not found.</div>;

  return (
    <div className="story-details-container">
      <button className="story-details-back" onClick={onBack}>&larr; Back</button>
      <div className="story-details-header">
        <img
          src={story.image || "/assets/images/story-placeholder.png"}
          alt={story.title}
          className="story-details-image"
        />
        <h2>{story.title}</h2>
      </div>
      <div className="story-details-body">
        <p className="story-details-content">{story.content}</p>
        <div className="story-details-meta">
          <span>
            <strong>Author:</strong> {story.author || "Charity"}
          </span>
          <span>
            <strong>Date:</strong>{" "}
            {story.date
              ? new Date(story.date).toLocaleDateString()
              : "Unknown"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;