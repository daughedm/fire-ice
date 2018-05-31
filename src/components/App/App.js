import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import { houseFetch } from '../../apiCalls/apiCalls';
import addHouses from '../../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount = async () => {
    const houses = await this.fetchHouses();
    this.props.handleAddHouses(houses);
  }

  fetchHouses = () => {
    const url = 'http://localhost:3001/api/v1/houses';
    return houseFetch(url);

  }
  
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  handleAddHouses: func.isRequired
  
};

const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  handleAddHouses:(houses) => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
