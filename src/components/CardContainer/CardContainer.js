import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Card from '../Card/Card';


const CardContainer = (props) => {
  const cards = props.houses.map((house, index) => {
    return <Card house={ house } key={index}/>
  })
  
  return (
    <div>
      {cards}
    </div>
  );
};


export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps, null)(CardContainer);

