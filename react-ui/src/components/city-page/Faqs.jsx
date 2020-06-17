import React from 'react';
import ClubbingBackground from 'img/clubbing-background.jpg';


const Faqs = () => {

    return (
        <div className="page-content">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h2 className="title is-size-2 has-text-centered">Promoters Vs. Host</h2>
                    </div>
                </div>
            </section>
            <div className="container is-fluid content-area">
                <div className="columns">
                    <div className="has-text-centered column is-10 is-offset-1">
                        <div className="columns lil-bottom-margin">
                            <div className="column is-6 has-text-centered lil-pad">
                                <h3 className="is-size-3 has-text-centered">Nightclub Promoter</h3>
                                <p>Responsible for getting people to come to the club through general admission and guest list.</p>
                            </div>
                            <div className="column is-6 has-text-centered lil-pad">
                                <h3 className="is-size-3 has-text-centered">Nightclub Host</h3>
                                <p>Responsible for booking and managing table service clients</p>
                                <p>Can also help with guest list and VIP entry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-img"  style={{ backgroundImage: `url(${ClubbingBackground})`}}>
                <div className="columns faq-bg-area">
                    <div className="has-text-centered column is-8 is-offset-2 is-flex valign-center">
                        <div className="wrapping">
                            <h2 className="is-size-2 text-has-weight-semibold">Help Us Grow</h2>
                            <p>Your support and contributions will enable us to create jobs and hit our goals, expanding into your favorite cities and connecting you to nightlife professionals worldwide.</p>
                        </div>
                    </div>
                </div>
                <div class="columns lil-bottom-margin"></div>
            </div>
        </div>
    )
}

export default Faqs;