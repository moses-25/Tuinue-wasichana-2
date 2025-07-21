import React from "react";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Tuinue Wasichana</h1>
    <p>
      Empowering girls through charity and community support. 
      Browse charities, donate, read beneficiary stories, or apply as a charity!
    </p>
    <div className="home-actions">
      <a href="/charities" className="home-btn">Explore Charities</a>
      <a href="/donate" className="home-btn">Make a Donation</a>
      <a href="/stories" className="home-btn">Read Stories</a>
    </div>
  </div>
);

export default Home;