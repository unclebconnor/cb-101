import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage.jsx';
import Vegas from '../img/city-vegas.jpg';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCity: 'Seattle'
    }
  }

  handleSelectCity = (city) => {
    this.setState({selectedCity: city})
  }
  // default to landing page & select city
  // redirect to city page
  // city pages have their own router on main
  // sub-pages selected by router
  // form sub-page populates main state
  // on-click -> validates form contents, sends to sendgrid if valid


  render() {
    return (
      <>
		<div
			className="page-content main-img"
			style={{ backgroundImage: `url(${Vegas})`, minHeight: "600px" }}>
          <LandingPage handleSelectCity={this.handleSelectCity}/>
        </div>
      </>
    );
  }
}

export default Main;