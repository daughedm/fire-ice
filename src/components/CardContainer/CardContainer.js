import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../Card/Card';


const CardContainer = (props) => {
  const cards = props.houses.map((house, index) => {
    return <Card 
      house={ house } 
      fetchSwornMembers={props.fetchSwornMembers}
      key={index}/>;
  });
  
  return (
    <div className="Container">
      {cards}
    </div>
  );
};


export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps, null)(CardContainer);

