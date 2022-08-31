import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg bg-dark">
                                <div className="container-fluid">
                                    <NavLink className=" logo navbar-brand" to="/">Ravi Tokas <span>Frontend Developer</span></NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/experience">Experience</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contacts">Contacts</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/login">Login</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/signup">Signup</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
