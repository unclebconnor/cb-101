import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import WarningIcon from 'components/tools/WarningIcon.jsx'

import MapIcon from 'img/icon-map.svg';
import TripDetailsIcon from 'img/icon-trip-details.svg';
import ContactIcon from 'img/icon-contact.svg';


export const Form = ({setFormState, formState}) => {
    const [page, setPage] = React.useState(2)
    const [groupDropIsOpen, toggleGroupDrop] = React.useState(false)

    const handleOnChange = (e) => {
        e.preventDefault()
        setFormState(e.target.name, e.target.value)
    }

    const incrementCount = ( stateKey, change) => {
        const val = formState[stateKey] + change
        setFormState(stateKey, val)
    }

    const handleMinorsRadio = (e) => {
        setFormState('minors', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact-form-container mo-top-margin">
            <div className='' id="contact-form">
                <div className="flex-sa is-flex" id="icon-row" style={{margin: "10px 0 10px 0"}}>
                    <div className='icon-group has-text-centered is-link' id='icon-pg-1'>
                        <img src={MapIcon} alt="map icon" onClick={() => setPage(1)}/>
                        <h5>Destination</h5>
                    </div>
                    <div className='icon-group has-text-centered is-link' id='icon-pg-2'>
                        <img src={ContactIcon} alt="contact icon" onClick={() => setPage(2)} style={{paddingRight: "39px"}}/>
                        <h5>Contact Info</h5>
                    </div>
                    <div className='icon-group has-text-centered is-link' id='icon-pg-3'>
                        <img src={TripDetailsIcon} alt="trip details icon" onClick={() => setPage(3)}/>
                        <h5>Trip Details</h5>
                    </div>
                </div>
                <form className="column is-8 is-offset-2" id="contact-form" name="contact-form">
                    <div className={`form-page ${page !== 1 ? 'is-hidden' : ''}`} id="form-page-1" >
                        <section id="form-destination">
                            <div className="columns">
                                <div className="field column is-12">
                                    <div className="control is-flex flex-sa">
                                        <div className="select">
                                            <select
                                                id="choose-a-city"
                                                name="choose-a-city"
                                                title="Choose a City"
                                                style={{width:"300px"}}
                                                onChange={handleOnChange}
                                            >
                                                <option value="" disabled>Choose a City</option>
                                                <option id="vegas" value="Vegas">Vegas</option>
                                                <option id="miami" value="Miami">Miami</option>
                                                <option id="new-york" value="New York">New York</option>
                                                <option id="los-angeles" value="Los Angeles">Los Angeles</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control is-flex flex-sa space-around">
                                    <button
                                        className="button is-link form-nav"
                                        type="button"
                                        onClick={() => setPage(2)}
                                    >Next</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={`form-page ${page !== 2 ? 'is-hidden' : ''}`} id="form-page-2">
                        <section id="form-contact">
                            <div className="field">
                                <label><div id="pg-2-error" ></div></label>
                            </div>
                            <div className="columns is-multiline">
                                <div className="field column is-6">
                                    <div className="control is-flex flex-sa has-icons-right">
                                        <input
                                            className="input"
                                            id="first-name"
                                            name="firstName"
                                            placeholder="First Name"
                                            title="First Name"
                                            type="text"
                                            value={formState.firstName}
                                            autoComplete='given-name'
                                            tabIndex="1"
                                            onChange={handleOnChange}
                                            autoFocus
                                        />
                                        <WarningIcon isVisible={true}/>
                                    </div>
                                </div>
                                <div className="field column is-6">
                                    <div className="control is-flex flex-sa">
                                        <input
                                            className="input"
                                            id="last-name"
                                            name="lastName"
                                            placeholder="Last Name"
                                            title="Last Name"
                                            type="text"
                                            value={formState.lastName}
                                            autoComplete='family-name'
                                            tabIndex="2"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="field column is-12">
                                    <div className="control is-flex flex-sa has-icons-right">
                                        <input
                                            className="input "
                                            validationmessage="Please enter valid"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number"
                                            title="Phone Number: xxx-xxx-xxxx"
                                            type="tel"
                                            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                                            autoComplete='tel-national'
                                            tabIndex="3"
                                            onChange={handleOnChange}
                                            value={formState.phone}
                                        />
                                        <WarningIcon isVisible={true}/>
                                    </div>
                                </div>
                                <div className="field column is-12">
                                    <div className="control is-flex flex-sa has-icons-right">
                                        <input
                                            className="input"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            title="Email Address: example@email.com"
                                            type="email"
                                            pattern=".+@.+\..+"
                                            value={formState.email}
                                            autoComplete='email'
                                            tabIndex="4"
                                            onChange={handleOnChange}
                                        />
                                        <WarningIcon isVisible={true}/>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-flex flex-sa ">
                                <div className="control ">
                                    <button
                                        className="button is-link form-nav-small"
                                        type="button"
                                        tabIndex="-1"
                                        onClick={() => setPage(1)}
                                    ><FontAwesomeIcon icon={faArrowLeft}/></button>
                                </div>
                                <div className="control">
                                    <button
                                        className="button is-link form-nav"
                                        type="button"
                                        tabIndex="5"
                                        onClick={() => setPage(3)}
                                    >Next</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={`form-page ${page !== 3 ? 'is-hidden' : ''}`}  id="form-page-3">
                        <section id="form-details">
                            <div className="field">
                                <label><div id="pg-3-error"></div></label>
                            </div>
                            <div className="columns is-multiline">
                                <div className="field column is-6">
                                    <div className="control is-flex flex-sa has-icons-right">
                                        <input
                                            className="input validate-date"
                                            id="arrival-date"
                                            name="arrivalDate"
                                            placeholder="Arrival Date"
                                            title="Arrival Date: mm/dd/yyyy"
                                            type="date"
                                            pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}|[0-9]{2}"
                                            tabIndex="6"
                                            onChange={handleOnChange}
                                            value={formState.arrivalDate}
                                        />
                                        <WarningIcon isVisible={true}/>
                                    </div>
                                </div>
                                <div className="field column is-6">
                                    <div className="control is-flex flex-sa has-icons-right">
                                        <input
                                            className="input validate-date"
                                            id="departure-date"
                                            name="departureDate"
                                            placeholder="Departure Date"
                                            title="Departure Date: mm/dd/yyyy"
                                            type="date"
                                            pattern="[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}|[0-9]{2}"
                                            tabIndex="7"
                                            onChange={handleOnChange}
                                            value={formState.departureDate}
                                        />
                                        <WarningIcon isVisible={true}/>
                                    </div>
                                </div>
                                <div className={`dropdown is-flex flex-sa field column is-12 ${groupDropIsOpen ? 'is-active' : ''}`}>
                                    <div
                                        className="dropdown-trigger full-wide"
                                        id="form-count-dropdown"
                                        tabIndex="8"
                                        onClick={() => toggleGroupDrop(!groupDropIsOpen)}
                                    >
                                        <button
                                            className="button full-wide level is-mobile"
                                            aria-haspopup="true"
                                            aria-controls="party-dropdown-menu"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <div className="level-left">
                                                <span className="level-item">Group Size:</span>
                                                <span className="level-item" id="count-total-display">{formState.countMen + formState.countWomen}</span>
                                            </div>
                                            <div className="level-right">
                                                <span className="icon is-small level-item">
                                                    <FontAwesomeIcon icon={faAngleDown}/>
                                                </span>
                                            </div>

                                        </button>
                                    </div>
                                    <div className="dropdown-menu full-wide" id="party-dropdown-menu" >
                                        <div className="dropdown-content" role="menu">
                                            <div id="count-men-row" className="level is-mobile">
                                                <div className="level-left">
                                                    <div className="level-item lil-side-margin dont-touch">Men</div>
                                                </div>
                                                <div className="level-right lil-side-margin">
                                                    <span
                                                        className="center level-item dark-red"
                                                        id="cm-dn"><FontAwesomeIcon
                                                        icon={faMinusCircle}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            incrementCount('countMen', -1)
                                                        }}
                                                    /></span>
                                                    <span
                                                        className="center level-item column is-2 dont-touch"
                                                        id="count-men-display"
                                                    >{formState.countMen}</span>
                                                    <span
                                                        className="center level-item dark-red"
                                                        id="cm-up"><FontAwesomeIcon
                                                        icon={faPlusCircle}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            incrementCount('countMen', 1)
                                                        }}
                                                    /></span>
                                                </div>
                                            </div>
                                            <div id="count-women-row" className="level is-mobile">
                                                <div className="level-left">
                                                    <div className="level-item lil-side-margin dont-touch">Women</div>
                                                </div>
                                                <div className="level-right lil-side-margin is-pulled-left">
                                                    <span
                                                        className="center level-item dark-red "
                                                        id="cw-dn"><FontAwesomeIcon
                                                        icon={faMinusCircle}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            incrementCount('countWomen', -1)
                                                        }}
                                                    /></span>
                                                    <span
                                                        className="center level-item column is-2 dont-touch"
                                                        id="count-women-display"
                                                    >{formState.countWomen}</span>
                                                    <span
                                                        className="center level-item dark-red"
                                                        id="cw-up"><FontAwesomeIcon
                                                        icon={faPlusCircle}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            incrementCount('countWomen', 1)
                                                        }}
                                                    /></span>
                                                </div>
                                            </div>
                                            <div className="field is-horizontal level is-mobile">
                                                <div className="level-left">
                                                    <span className="level-item lil-side-margin dont-touch">Is anyone under 21?</span>
                                                </div>
                                                <div className="control level-right lil-side-margin"  onChange={handleMinorsRadio}>
                                                    <label className="radio level-item">
                                                        <input
                                                            type="radio"
                                                            checked={formState.minors === "Yes"}
                                                            value="Yes"
                                                            onChange={() => {return}} // satisfies strictmode complaint
                                                        />&nbsp;Yes
                                                    </label>
                                                    <label className="radio level-item">
                                                        <input
                                                            type="radio"
                                                            checked={formState.minors === "No"}
                                                            value="No"
                                                            onChange={() => {return}} // satisfies strictmode complaint
                                                        />&nbsp;No
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="level is-mobile">
                                                <div className="level-left" style={{visibility: "hidden"}}>
                                                    <span className="level-item">Blank</span>
                                                </div>
                                                <div className="control level-right">
                                                    <button
                                                        id="form-close"
                                                        className="level-item button is-text"
                                                        aria-haspopup="true"
                                                        aria-controls="party-dropdown-menu"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            toggleGroupDrop(!groupDropIsOpen)
                                                        }}
                                                    >Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field column is-12">
                                    <div className="control">
                                        <input
                                            className="input"
                                            id="occasion"
                                            name="occasion"
                                            placeholder="What is the occasion?  (E.g. Birthday, Wedding)"
                                            title="occasion"
                                            type="text"
                                            tabIndex="9"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="field is-flex flex-sa lil-bottom-margin">
                                <div className="control ">
                                    <button
                                        className="button is-link form-nav-small"
                                        type="button"
                                        tabIndex="-1"
                                        onClick={() => setPage(2)}
                                    ><FontAwesomeIcon icon={faArrowLeft}/></button>
                                </div>
                                <div className="control">
                                    <button
                                        className="button is-link form-nav"
                                        id="submit-button"
                                        type="submit"
                                        value="submit"
                                        name='submit-button'
                                        tabIndex="10"
                                        onSubmit={handleSubmit}
                                    >Submit</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Form;