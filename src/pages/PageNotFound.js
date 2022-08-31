import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <Header />
            <div className="container pnf__page">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pnf__block">
                            <h1 class="h-landmark text-center mt-5"><span>Oops!</span></h1>
                            <p class="p-landmark-sub text-center mt-5"><span>You blew up the Internet. </span></p>

                            <div class="x-container max width offset">
                                <div class="x-main full" role="main">
                                    <div class="entry-wrap entry-404">
                                        <p class="center-text">The page you are looking for is no longer here, or never existed in the first place (bummer). You can try searching for what you are looking for using the main menu. If that still doesn't provide the results you are looking for, you can always start over from the home page.</p>
                                        <div className="text-center">
                                            <Link className="btn" to="/">Go To Home Page</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
        </>
    )
}

export default PageNotFound;
