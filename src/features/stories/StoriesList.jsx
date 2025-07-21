import React from "react";
import "./StoriesList.css";

const StoriesList = ({ stories = [], onSelectStory }) => {
  if (!stories.length) {
    return <div className="stories-list-empty">No stories available.</div>;
  }

  return (
    <div className="stories-list-container">
      <h2>Beneficiary Stories</h2>
      <div className="stories-list">
        {stories.map(story => (
          <div
            key={story.id}
            className="story-card"
            onClick={() => onSelectStory && onSelectStory(story)}
            tabIndex={0}
          >
            <img
              src={story.image || "/assets/images/story-placeholder.png"}
              alt={story.title}
              className="story-card-image"
            />
            <div className="story-card-content">
              <h3>{story.title}</h3>
              <p className="story-card-snippet">
                {story.content.slice(0, 90)}...
              </p>
              <span className="story-card-author">
                By {story.author || "Charity"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesList;