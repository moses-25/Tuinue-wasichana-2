import React from "react";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound-container">
    <h1>404 - Page Not Found</h1>
    <p>
      Sorry, the page you are looking for does not exist.
    </p>
    <a href="/" className="notfound-home-link">Go to Home</a>
  </div>
);

export default NotFound;