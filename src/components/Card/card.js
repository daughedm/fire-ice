import React from 'react';

const Card = ({ house }) => {
  return (
    <div className="Card">
      <h1>{house.name}</h1>
      <h3>Founded: {house.founded}</h3>
      <h3>Seats: {house.seat}</h3>
      <h3>Titles: {house.titles}</h3>
      <h3>Coat of Arms: {house.coatOfArms}</h3>
      <h3>Ancestral Weapons: {house.ancestralWeapons}</h3>
      <h3>Words: {house.words}</h3>

    </div>
  );
};

export default Card;
