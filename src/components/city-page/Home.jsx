import React from 'react';


const CityHome = ({backgroundImage}) => {

    return (
        <div
            className="page-content main-img"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: "600px"
            }}
        >
            <div class="container form-area">
                <div class="columns">
                    <div class="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
                        Form/Home
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityHome;