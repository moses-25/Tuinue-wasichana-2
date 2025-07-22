import React, { useEffect } from 'react';
import './StoryDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStoryById } from '../storiesSlice';

const StoryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedStory, loading, error } = useSelector((state) => state.stories);

  useEffect(() => {
    if (id) {
      dispatch(fetchStoryById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading story...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!selectedStory) return <p>No story found.</p>;

  return (
    <div className="story-details">
      <h2>{selectedStory.title}</h2>
      <img src={selectedStory.image} alt={selectedStory.title} />
      <p className="author">By {selectedStory.author || 'Anonymous'}</p>
      <p className="content">{selectedStory.content}</p>
    </div>
  );
};

export default StoryDetails;
