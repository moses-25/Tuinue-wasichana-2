import React from 'react';
import './CharityDetails.css';
import StoryCard from '../../components/StoryCard/StoryCard';
import Button from '../../components/Button/Button';

const CharityDetails = () => {
  const charity = {
    name: "Girls First Foundation",
    location: "Kisumu, Kenya",
    mission: "Empowering rural girls through education and menstrual health.",
    description:
      "Girls First Foundation works to ensure no girl misses school due to lack of fees or access to menstrual hygiene products. Through your support, we provide education sponsorships, hygiene kits, and mentorship programs.",
    image: "/assets/images/girlsfirst.jpg",
    stories: [
      {
        image: "/assets/images/achieng.jpg",
        name: "Achieng",
        age: "14",
        story: "Thanks to your donations, I received pads and books to continue learning!"
      },
      {
        image: "/assets/images/zahara.jpg",
        name: "Zahara",
        age: "12",
        story: "I walk confidently to school every day because I now have a proper uniform."
      }
    ]
  };

  return (
    <div className="tw-charity-details">
      <div className="charity-header">
        <img src={charity.image} alt={charity.name} />
        <div className="charity-text">
          <h1>{charity.name}</h1>
          <p className="location">{charity.location}</p>
          <p>{charity.description}</p>
          <Button text="Donate Now" />
        </div>
      </div>

      <section className="impact-stories">
        <h2>Stories of Impact</h2>
        <div className="stories-grid">
          {charity.stories.map((story, index) => (
            <StoryCard
              key={index}
              image={story.image}
              name={story.name}
              age={story.age}
              story={story.story}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CharityDetails;
