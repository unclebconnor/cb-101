import * as React from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleDown, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import WarningIcon from 'components/tools/WarningIcon.jsx'
import FormPageError from 'components/tools/FormPageError.jsx'
import {
    textFieldIsValid,
    phoneIsValid,
    emailIsValid,
    dateIsValid,
    groupSizeIsValid,
    dateOrderIsValid,
    pg2IsValid,
    pg3IsValid
} from 'components/tools/form-validation.js'

import MapIcon from 'img/icon-map.svg';
import TripDetailsIcon from 'img/icon-trip-details.svg';
import ContactIcon from 'img/icon-contact.svg';


export const Form = ({setFormState, formState, selectedCity, setShowError, setShowSuccess}) => {
    const [page, setPage] = React.useState(2)
    const [groupDropIsOpen, toggleGroupDrop] = React.useState(false)
    const [validatePg2, setValidatePg2] = React.useState(false)
    const [validatePg3, setValidatePg3] = React.useState(false)
    const [pg2Error, setPg2Error] = React.useState(false)
    const [pg3Error, setPg3Error] = React.useState(false)
    const [completePage, setCompletePage] = React.useState(false)
    const [arrivalFieldType, setArrivalFieldType] = React.useState('text')
    const [departureFieldType, setDepartureFieldType] = React.useState('text')

    // getting selectedCity from url, so update state for form
    React.useEffect(() => {
        const re = /^\/?(?<path>[\w-]*)\/?.*/
        const path = window.location.pathname
        const city = path.match(re).groups.path
        if (formState.selectedCity  !== city){
            setFormState('selectedCity', city)
        }
    },[formState.selectedCity, setFormState])

    // generic onChange handler
    const handleOnChange = (e) => {
        e.preventDefault()
        setFormState(e.target.name, e.target.value)
    }

    // for countMen, countWomen
    const incrementCount = ( stateKey, change) => {
        const val = formState[stateKey] + change
        setFormState(stateKey, val)
    }

    // special handling for minors radio button
    const handleMinorsRadio = (e) => {
        setFormState('minors', e.target.value)
    }

    // submit assumes form has been validated
    const handleSubmit = async () => {
        try {
            await axios.post('/api/submit_form', { formState })
                .then(() => {
                    setShowSuccess(true)
                })
        } catch (e) {
            setShowError(true)
        }
    }

    const renderDateError = () => {
        const errorText = "Departure must be after arrival"
        return (
            formState.arrivalDate !== '' && formState.departureDate !== ''
                ? dateOrderIsValid(formState.arrivalDate, formState.departureDate)
                    ? null
                    : <FormPageError errorText={errorText}/>
                : null
        )
    }

    // page 2 validation
    React.useMemo(() => {
        if(validatePg2){
            const pageIsValid = pg2IsValid(formState.firstName, formState.phone, formState.email)
            if(!pageIsValid){
               setCompletePage(false) // fix page and submit again
               setPg2Error(true)
            } else {
                setPg2Error(false)
            }
            if(pageIsValid && completePage){
                setPage(3)
                setValidatePg2(false)  // reset in case we come back
                setCompletePage(false) // reset in case we come back
            }
        }
    }, [validatePg2, completePage, formState.firstName, formState.phone, formState.email])

    // page 3 validation
    React.useMemo(() => {
        if(validatePg3){
            const pageIsValid = pg3IsValid(formState.arrivalDate, formState.departureDate, formState.countWomen + formState.countMen)
            if(!pageIsValid){
                setCompletePage(false) // fix page and submit again
                setPg3Error(true)
            } else {
                setPg3Error(false)
            }
            if(pageIsValid && completePage){
                handleSubmit()
                setValidatePg3(false)  // reset in case we come back
                setCompletePage(false) // reset in case we come back
            }
        }
    // leaving handleSubmit out of hook deps on purpose
    // eslint-disable-next-line
    }, [validatePg3, completePage, formState.arrivalDate, formState.departureDate, formState.countWomen, formState.countMen ])

    return (
        <div className="contact-form-container mo-top-margin">
            <div className='' id="contact-form">
                {/* Form page nav */}
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
                {/* Begin Form */}
                <form className="column is-8 is-offset-2" id="contact-form" name="contact-form">
                    {/* Form Page 1 */}
                    <div className={`form-page ${page !== 1 ? 'is-hidden' : ''}`} id="form-page-1" >
                        <section id="form-destination">
                            <div className="columns">
                                <div className="field column is-12">
                                    <div className="control is-flex flex-sa">
                                        <div className="select">
                                            {/* // to-do: abstract this and make cities/names constants */}
                                            <select
                                                id="choose-a-city"
                                                name="choose-a-city"
                                                title="Choose a City"
                                                style={{width:"300px"}}
                                                onChange={(e) => window.location.href = `/${e.target.value}`}
                                                value={selectedCity}
                                            >
                                                <option value="" disabled>Choose a City</option>
                                                <option value="vegas" >Vegas</option>
                                                <option value="miami" >Miami</option>
                                                <option value="new-york" >New York</option>
                                                <option value="los-angeles" >Los Angeles</option>
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
                    {/* Form Page 2 */}
                    <div className={`form-page ${page !== 2 ? 'is-hidden' : ''}`} id="form-page-2">
                        <section id="form-contact">
                            { pg2Error ? <FormPageError/> : null}
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
                                        {
                                            validatePg2
                                                ? textFieldIsValid(formState.firstName)
                                                    ? null
                                                    : <WarningIcon isVisible={true}/>
                                                : null
                                        }
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
                                            validationmessage="Please a enter valid phone number"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number"
                                            title="Phone Number: xxx-xxx-xxxx"
                                            type="tel"
                                            autoComplete='tel-national'
                                            tabIndex="3"
                                            onChange={handleOnChange}
                                            value={formState.phone}
                                        />
                                        {
                                            validatePg2
                                                ? phoneIsValid(formState.phone)
                                                    ? null
                                                    : <WarningIcon isVisible={true}/>
                                                : null
                                        }
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
                                            value={formState.email}
                                            autoComplete='email'
                                            tabIndex="4"
                                            onChange={handleOnChange}
                                        />
                                        {
                                            validatePg2
                                                ? emailIsValid(formState.email)
                                                    ? null
                                                    : <WarningIcon isVisible={true}/>
                                                : null
                                        }
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
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setCompletePage(true)
                                            setValidatePg2(true)
                                        }}
                                    >Next</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Form Page 3 */}
                    <div className={`form-page ${page !== 3 ? 'is-hidden' : ''}`}  id="form-page-3">
                        <section id="form-details">
                            {pg3Error ? <FormPageError/> : null}
                            {renderDateError()}
                            <div className="columns is-multiline">
                                <div className="field column is-6">
                                    <div
                                        className={`control is-flex flex-sa ${dateIsValid(formState.arrivalDate) ? '' : 'has-icons-right'}`}
                                    >
                                        <input
                                            className="input validate-date"
                                            id="arrival-date"
                                            name="arrivalDate"
                                            placeholder="Arrival Date"
                                            title="Arrival Date: mm/dd/yyyy"
                                            type={arrivalFieldType}
                                            tabIndex="6"
                                            onFocus={() => setArrivalFieldType("date")}
                                            onBlur={() => setArrivalFieldType("text")}
                                            onChange={handleOnChange}
                                            value={formState.arrivalDate}
                                        />
                                        {
                                            validatePg3
                                                ? dateIsValid(formState.arrivalDate)
                                                    ? null
                                                    : <WarningIcon isVisible={true}/>
                                                : null
                                        }
                                    </div>
                                </div>
                                <div className="field column is-6">
                                    <div
                                        className={`control is-flex flex-sa ${dateIsValid(formState.departureDate) ? '' : 'has-icons-right'}`}
                                    >
                                        <input
                                            className="input validate-date"
                                            id="departure-date"
                                            name="departureDate"
                                            placeholder="Departure Date"
                                            title="Departure Date: mm/dd/yyyy"
                                            type={departureFieldType}
                                            tabIndex="7"
                                            onFocus={() => setDepartureFieldType("date")}
                                            onBlur={() => setDepartureFieldType("text")}
                                            onChange={handleOnChange}
                                            value={formState.departureDate}
                                        />
                                        {
                                            validatePg3
                                                ? dateIsValid(formState.departureDate)
                                                    ? null
                                                    : <WarningIcon isVisible={true}/>
                                                : null
                                        }
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
                                                <span className="level-item" id="count-total-display">
                                                    {formState.countMen + formState.countWomen}
                                                </span>
                                            </div>

                                            <div className="level-right">
                                                {
                                                    validatePg3
                                                        ? groupSizeIsValid(formState.countMen + formState.countWomen)
                                                            ? null
                                                            : <WarningIcon isVisible={true}/>
                                                        : null
                                                }
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
                                                            if(formState.countMen > 0){
                                                                incrementCount('countMen', -1)
                                                            }
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
                                                            if(formState.countWomen > 0){
                                                                incrementCount('countWomen', -1)
                                                            }
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
                                                            checked={formState.minors === "yes"}
                                                            value="yes"
                                                            onChange={() => {return}} // satisfies strictmode complaint
                                                        />&nbsp;Yes
                                                    </label>
                                                    <label className="radio level-item">
                                                        <input
                                                            type="radio"
                                                            checked={formState.minors === "no"}
                                                            value="no"
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
                                        onClick={(e) => {
                                            e.preventDefault()
                                            // also submits form
                                            setCompletePage(true)
                                            setValidatePg3(true)
                                        }}
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