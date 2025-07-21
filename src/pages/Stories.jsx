import React from 'react';
import './Stories.css';
import StoryCard from '../../components/StoryCard/StoryCard';

const stories = [
  {
    image: '/assets/images/achieng.jpg',
    name: 'Achieng',
    age: '14',
    story: 'Thanks to your support, I now have pads, school supplies, and I no longer miss classes.'
  },
  {
    image: '/assets/images/zahara.jpg',
    name: 'Zahara',
    age: '12',
    story: 'I used to walk 8km to school. Now I have a bike that gets me there safely and faster.'
  },
  {
    image: '/assets/images/mercy.jpg',
    name: 'Mercy',
    age: '15',
    story: 'The mentorship program gave me confidence. I now want to become a doctor.'
  }
  // Add more stories as needed
];

const Stories = () => {
  return (
    <div className="tw-stories">
      <h1>Stories of Change</h1>
      <p>Read how your support is making a difference — one girl at a time.</p>

      <div className="stories-grid">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            image={story.image}
            name={story.name}
            age={story.age}
            story={story.story}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
