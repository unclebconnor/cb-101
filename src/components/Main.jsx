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
	  selectedCity: null
	}
  }


  handleSelectCity = (city) => {
	this.setState({selectedCity: city})
  }


//   work on form
//   clean up margins/css
//   on-click -> validates form contents, sends to sendgrid if valid


  render() {
	return (
	  <Router>
		{/* to-do: redirect bad routes to home */}
		<Route exact path="/">
			<LandingPage/>
		</Route>
		<Route path="/vegas">
			<CityPage selectedCity={"vegas"} backgroundImage={Vegas}/>
		</Route>
		<Route path="/miami">
			<CityPage selectedCity={"miami"} backgroundImage={Miami}/>
		</Route>
		<Route path="/new-york">
			<CityPage selectedCity={"New York"} backgroundImage={NewYork}/>
		</Route>
		<Route path="/los-angeles">
			<CityPage selectedCity={"Los Angeles"} backgroundImage={LosAngeles}/>
		</Route>
		<Footer/>
	  </Router>
	);
  }
}

export default Main;