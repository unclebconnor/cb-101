import React, {useState } from 'react';
import {capitalize} from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



import Home from './Home';
import About from './About';
import HowItWorks from './HowItWorks';
import Faqs from './Faqs';
import Logo from 'img/logo.jpg';


const CityPage = ({selectedCity, backgroundImage, displayTitle, setFormState, formState}) => {
    const [dropdownIsActive, toggleDropdownIsActive] = useState(false)
    return (
        <Router basename={selectedCity}>
            <header className="level is-mobile" >
                <div className="level-left">
                    <a className="level-item" href="/">
                        <img src={Logo} alt="Clubbing 101 Logo" id="logo-image"/>
                    </a>
                </div>
                <nav className="level-right is-hidden-mobile">
                    {/* Full version */}
                    <div className="level-item menu-item lil-side-margin">
                        <Link to="/">{displayTitle}</Link>
                    </div>
                    <div className="level-item menu-item lil-side-margin">
                        <Link to="/about/">About</Link>
                    </div>
                    <div className="level-item menu-item lil-side-margin">
                        <Link to="/how-it-works/">How It Works</Link>
                    </div>
                    <div className="level-item menu-item lil-side-margin">
                        <Link to="/faqs/">FAQ's</Link>
                    </div>
                </nav>
                <nav className="level-right is-hidden-tablet">
                    {/* hamburger version */}
                    <div className={`dropdown is-right ${dropdownIsActive ? "is-active" : ''}`}>
                        <div id="hamburger-button" className="dropdown-trigger level-item menu-item ">
                            <button
                                className="button hamburger-button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={() => toggleDropdownIsActive(!dropdownIsActive)}
                                onBlur={() => toggleDropdownIsActive(false)}
                            >
                                <FontAwesomeIcon icon={faBars}/>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content menu-dropdown-wrapper">
                                <Link
                                    to="/"
                                    className="dropdown-item menu-item"
                                    onMouseDown={e => e.preventDefault()}
                                >{capitalize(selectedCity)}
                                </Link>
                                <Link
                                    to="/about/"
                                    className="dropdown-item menu-item"
                                    onMouseDown={e => e.preventDefault()}
                                >About
                                </Link>
                                <Link
                                    to="/how-it-works/"
                                    className="dropdown-item menu-item"
                                    onMouseDown={e => e.preventDefault()}
                                >How It Works
                                </Link>
                                <Link
                                    to="/faqs/"
                                    className="dropdown-item menu-item"
                                    onMouseDown={e => e.preventDefault()}
                                >FAQ's
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="content-area">
                <Route exact path="/">
                    <Home
                        backgroundImage={backgroundImage}
                        setFormState={setFormState}
                        formState={formState}
                        selectedCity={selectedCity}
                    />
                </Route>
                <Route path="/about/"><About/></Route>
                <Route path="/how-it-works/"><HowItWorks /></Route>
                <Route path="/faqs/"><Faqs/></Route>
            </div>
        </Router>
    )
}

export default CityPage;