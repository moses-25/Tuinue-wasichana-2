import React, { useEffect } from 'react';
import './StoryDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStoryById } from './storiesSlice.js';

// Import images
import image2 from '../../assets/images/Image 2.jpg';
import image3 from '../../assets/images/Image 3.jpg';

const imageMap = {
  'Image 2.jpg': image2,
  'Image 3.jpg': image3,
};

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

  const imageUrl = imageMap[selectedStory.image] || image2; // Fallback to Image 2.jpg

  return (
    <div className="story-details">
      <h2>{selectedStory.title}</h2>
      <img src={imageUrl} alt={selectedStory.title} />
      <p className="author">By {selectedStory.author || 'Anonymous'}</p>
      <p className="content">{selectedStory.content}</p>
    </div>
  );
};

export default StoryDetails;

