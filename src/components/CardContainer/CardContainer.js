import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  
    const cards = this.props.houses.map(house => {
      return (
        <Card { house } />
      )
    })
    
    return (
      <div>
        
      </div>
    )
  }
}

CardContainer.propTypes = {
  prop: PropTypes
}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps, null)(CardContainer);

