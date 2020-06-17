import React from 'react';
import ClipForm from 'img/clip-form.png'
import ClipPhone from 'img/clip-phone.png'
import ClipSpeech from 'img/clip-speech.png'


const HowItWorks = () => {

    return (
        <div className="page-content">
            <section className="hero">
                <div className="hero-body">
                    <h2 className="title is-size-2 has-text-centered">How It Works</h2>
                </div>
            </section>
            <div className="container is-fluid content-area">
                <div className="columns lil-bottom-margin">
                    <div className="column is-8 is-offset-2">
                        <div className="columns">
                            <div className="column is-6 has-text-centered">
                            <img
                                    style={{maxWidth: "250px"}}
                                    src={ClipForm}
                                    alt="Form"
                                />
                            </div>
                            <div className="column is-6 has-text-centered is-flex valign-center lil-side-margin">
                                <div>
                                    <h3 className="is-size-3">Fill out form</h3>
                                    <p>Skip the chaos with an escort into the club, saving time and stress.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="columns lil-bottom-margin">
                    <div className="column is-8 is-offset-2">
                        <div className="columns">
                            <div className="column is-6 has-text-centered">
                                <img
                                    style={{maxWidth: "250px"}}
                                    src={ClipPhone}
                                    alt="Phone"
                                />
                            </div>
                            <div className="column is-6 has-text-centered is-flex valign-center lil-side-margin">
                                <div>
                                    <h3 className="is-size-3">Get contacted by a professional nightlife host</h3>
                                    <p>Our hosts will help you plan your itinerary before you even get there.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns lil-bottom-margin">
                    <div className="column is-8 is-offset-2">
                        <div className="columns">
                            <div className="column is-6 has-text-centered">
                                <img
                                    style={{maxWidth: "250px"}}
                                    src={ClipSpeech}
                                    alt="Speech"
                                />
                            </div>
                            <div className="column is-6 has-text-centered is-flex valign-center lil-side-margin">
                                <div>
                                    <h3 className="is-size-3">Connect with a night when you arrive</h3>
                                    <p>Feel confident that you have a known commodity, a trusted host who has the skills and connections to help you on every trip you make to Vegas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;