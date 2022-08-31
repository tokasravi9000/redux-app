import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />  
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="hero__section">
                                <div className="">
                                    <p className="myName">Hi, my name is</p>
                                </div>
                                <div className="">
                                    <h1 className="big-heading">Ravi Tokas</h1>
                                </div>
                                <div className="">
                                    <h2 className="big-heading">I build things for the web.</h2>
                                </div>
                                <div className="ab__descrip">
                                    <p>
                                    I am an enthusiastic frontend Developer based in New Delhi, with a rich experience of over 10 years in website & product design.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <Link className="btn email-link" to="/experience">
                                        Check out my work!
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;