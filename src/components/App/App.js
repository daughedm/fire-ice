import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import { houseFetch } from '../../apiCalls/apiCalls';
import { swornMembersFetch } from '../../apiCalls/apiCalls';
import addHouses from '../../actions/index';
import loadingGif from '../../Assets/wolf.gif';

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
    this.setState({isLoading: false})
  }

  fetchHouses = () => {
    const url = 'http://localhost:3001/api/v1/houses';
    return houseFetch(url);
  }

  fetchSwornMembers = (house) => {
    const swornMembers = house.swornMembers.map(async member => {
      const splitUrl = member.split('/');
      const memberNumber = splitUrl.slice(-1)[0];
      const url = `http://localhost:3001/api/v1/character/${memberNumber}`;
      const memberFetch = await swornMembersFetch(url);
      return memberFetch;
    });
    return swornMembers;
  }
  
  render() {
    const loading = this.state.isLoading ? 
      ( <img src={loadingGif} /> ) : 
      (<div className='Display-info'>
        <CardContainer fetchSwornMembers={this.fetchSwornMembers}/>
      </div>);
    
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/* <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button> */}
        </div>
        {loading}
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
