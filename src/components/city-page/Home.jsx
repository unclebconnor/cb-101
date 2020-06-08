import React from 'react';

import Form from './Form.jsx';

const CityHome = ({backgroundImage, setFormState, formState, selectedCity}) => {

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
                        <Form
                            setFormState={setFormState}
                            formState={formState}
                            selectedCity={selectedCity}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityHome;