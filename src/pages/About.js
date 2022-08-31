import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <section>
                                <p>
                                    Hello! My name is Ravi and I enjoy creating things that live on the internet. My interest in web development started back in 2011 when I decided to try editing custom websites themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                                </p>
                                <p>
                                    Fast-forward to today, and I’ve had the privilege of working at an Publishing company, a start-up, a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                                </p> 
                                <p>
                                    Here are a few technologies I’ve been working with recently:
                                </p>    
                                <div className="work__tech__list row mb-4">
                                    <div className="col-md-6">HTML 5</div>
                                    <div className="col-md-6">CSS 3</div>
                                    <div className="col-md-6">JavaScript (ES6+)</div>
                                    <div className="col-md-6">React Js</div>
                                    <div className="col-md-6">Redux</div>
                                    <div className="col-md-6">Router</div>
                                    <div className="col-md-6">Bootstrap</div>
                                    <div className="col-md-6">Wordpress</div>
                                    <div className="col-md-6">Elementor</div>
                                    <div className="col-md-6">Crocoblock</div>
                                </div>    
                            </section>
                        </div> 
                        <div className="col-md-4 mt-5 text-center">
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt= "Ravi Tokas" width="auto" height="395" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About;
