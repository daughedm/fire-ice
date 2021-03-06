import React from 'react';
import { mapStateToProps } from '../CardContainer/CardContainer';

const Card = ({ house, fetchSwornMembers }) => {
  return (
    <div className="Card"
      onClick={()=>fetchSwornMembers(house)}
    >
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
