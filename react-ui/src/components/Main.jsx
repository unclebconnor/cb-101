import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LandingPage from 'components/LandingPage.jsx';
import CityPage from 'components/city-page/CityPage.jsx';
import Footer from 'components/Footer.jsx';

import Vegas from 'img/city-vegas.jpg';
import Miami from 'img/city-miami.jpg';
import NewYork from 'img/city-new-york.jpg';
import LosAngeles from 'img/city-los-angeles.jpg';

class Main extends React.Component {
  constructor(props){
	super(props);
	this.state = {
	  selectedCity: '',
	  arrivalDate: '',
	  departureDate: '',
	  occasion: '',
	  firstName: '',
	  lastName: '',
	  phone: '',
	  email: '',
	  countMen: 0,
	  countWomen: 0,
	  minors: "no"

	}
  }

  setFormState = (key, val) => {
	this.setState({[key]: val})
  }

  render() {
	return (
	  <Router>
		{/* to-do: redirect bad routes to home */}
		<Route exact path="/">
			<LandingPage setFormState={this.setFormState} />
		</Route>
		<Route path="/vegas">
			<CityPage
				selectedCity={"vegas"}
				backgroundImage={Vegas}
				displayTitle={"Vegas"}
				setFormState={this.setFormState}
				formState={this.state}
			/>
		</Route>
		<Route path="/miami">
			<CityPage
				selectedCity={"miami"}
				backgroundImage={Miami}
				displayTitle={"Miami"}
				setFormState={this.setFormState}
				formState={this.state}
			/>
		</Route>
		<Route path="/new-york">
			<CityPage
				selectedCity={"new-york"}
				backgroundImage={NewYork}
				displayTitle={"New York"}
				setFormState={this.setFormState}
				formState={this.state}
			/>
		</Route>
		<Route path="/los-angeles">
			<CityPage
				selectedCity={"los-angeles"}
				backgroundImage={LosAngeles}
				displayTitle={"Los Angeles"}
				setFormState={this.setFormState}
				formState={this.state}
			/>
		</Route>
		<Footer/>
	  </Router>
	);
  }
}

export default Main;