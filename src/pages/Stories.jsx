import React, { useEffect } from 'react';
import './Stories.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../features/stories/storiesSlice';
import { Link } from 'react-router-dom';

const Stories = () => {
  const dispatch = useDispatch();
  const { stories, loading, error } = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div className="tw-stories-page">
      <section className="stories-header">
        <h1>Inspiring Stories</h1>
        <p>Read powerful stories of girls whose lives were changed through education, dignity, and support.</p>
      </section>

      {loading && <p>Loading stories...</p>}
      {error && <p className="error">{error}</p>}

      <div className="stories-grid">
        {stories.map((story) => (
          <Link to={`/stories/${story.id}`} key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.snippet || story.content.slice(0, 80)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stories;

