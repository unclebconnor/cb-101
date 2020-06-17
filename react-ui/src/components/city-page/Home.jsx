import React from 'react';

import Form from './Form.jsx';

const CityHome = ({backgroundImage, setFormState, formState, selectedCity}) => {
    const [showError, setShowError] = React.useState(false)
    const [showSuccess, setshowSuccess] = React.useState(false)

    const showFormSuccess = () => {
        return (
            <div className="contact-form-container mo-top-margin is-mobile">
                <div className="column is-8 is-offset-2 is-mobile" >
                    <h2 className="title is-size-4 has-text-centered">
                        Your form was submitted successfully
                    </h2>
                    <h2 className="has-text-centered">
                        Check your email for a confirmation and we'll be in touch soon!
                    </h2>
                </div>
            </div>
        )
    }

    const showFormFailure = () => {
        return (
            <div className="contact-form-container mo-top-margin is-mobile">
                <div className="column is-8 is-offset-2 is-mobile" >
                    <h2 className="title is-size-4 has-text-centered">
                        There was a problem
                    </h2>
                    <h2 className="has-text-centered">
                        Please try again!
                    </h2>
                </div>
            </div>
        )
    }

    return (
        <div
            className="page-content main-img"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: "600px"
            }}
        >
            <div className="container form-area">
                <div className="columns">
                    <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile form-wrap">
                        {!showError && !showSuccess? (
                            <Form
                                setFormState={setFormState}
                                formState={formState}
                                selectedCity={selectedCity}
                                setShowError={setShowError}
                                setshowSuccess={setshowSuccess}
                            />
                        ): null}
                        {showError && !showSuccess? showFormSuccess() : null}
                        {showSuccess && !showError? showFormFailure() : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityHome;