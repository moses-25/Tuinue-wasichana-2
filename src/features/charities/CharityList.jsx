import React from "react";

const charities = [
  { id: 1, name: "Charity One", description: "Helping girls in STEM." },
  { id: 2, name: "Charity Two", description: "Supporting education." },
];

const CharityList = () => (
  <div>
    <h2>Charities</h2>
    <ul>
      {charities.map((charity) => (
        <li key={charity.id}>
          <strong>{charity.name}</strong>: {charity.description}
        </li>
      ))}
    </ul>
  </div>
);

export default CharityList;

