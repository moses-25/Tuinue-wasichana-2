import React, { useEffect } from 'react';
import './StoriesList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../storiesSlice';
import { Link } from 'react-router-dom';

const StoriesList = () => {
  const dispatch = useDispatch();
  const { stories, loading, error } = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  if (loading) return <p>Loading stories...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="stories-list">
      <h2>Real Stories</h2>
      <div className="story-cards">
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

export default StoriesList;
