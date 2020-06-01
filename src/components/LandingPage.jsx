import React, {useState} from 'react';
import Logo from 'img/logo.jpg';
import Vegas from 'img/city-vegas.jpg';
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [dropdownIsActive, toggleDropdownIsActive] = useState(false)

    return (
    <div className="page-content main-img" >
        <header className="level is-mobile">
            <div className="level-left">
                <a className="level-item" href="/">
                    <img src={Logo} alt="Clubbing 101 Logo" id="logo-image"/>
                </a>
            </div>
        </header>

        <div className="is-mobile" style={{ backgroundImage: `url(${Vegas})`, minHeight: "600px" }}>
            <section className="hero">
                <div className="hero-body landing-hero">
                    <div className="container">
                        <h2 className="title is-size-2 has-text-centered">Clubbing Done Right</h2>
                        <h4 className="subtitle is-size-4 has-text-centered">Enter your travel destination below to start connecting with a nightlife expert</h4>
                    </div>
                </div>
            </section>
            <div className="container content-area">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <div
                            id="lp-dropdown"
                            className={`no-pad has-text-centered full-wide dropdown ${dropdownIsActive ? "is-active" : ''}`}
                        >
                            <div className="dropdown-trigger has-text-centered full-wide">
                                <button
                                    className="button has-text-centered full-wide "
                                    aria-haspopup="true"
                                    aria-controls="dropdown-menu"
                                    onClick={() => toggleDropdownIsActive(!dropdownIsActive)}
                                    onBlur={() => toggleDropdownIsActive(false)}
                                >
                                    <span className="trigger-text lil-side-margin">What is your destination?</span>
                                    <span><i className="trigger-text lil-side-margin caret fas fa-angle-down"></i></span>
                                </button>
                            </div>
                            <div className="dropdown-menu has-text-centered full-wide" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <Link
                                        className="dropdown-item"
                                        to="/vegas/"
                                        onMouseDown={e => e.preventDefault()}
                                    >Vegas</Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/miami/"
                                        onMouseDown={e => e.preventDefault()}
                                    >Miami</Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/new-york/"
                                        onMouseDown={e => e.preventDefault()}
                                    >New York</Link>
                                    <Link
                                        className="dropdown-item"
                                        to="/los-angeles/"
                                        onMouseDown={e => e.preventDefault()}
                                    >Los Angeles</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
