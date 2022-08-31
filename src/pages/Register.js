import React, {useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Alert } from 'bootstrap';
// import MyAccount from './MyAccount';

const Register = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
   // const [login, setLogin] = useState(true);

    function formSubmit(){

    };

    return (
        <>
            <Header />

            <div className="conatiner signup-page">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="mb-4 mt-4 text-center text-uppercase">Sign Up</h3>
                                <form onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" name="fname" placeholder="First name"
                                        value={fname}
                                        onchange={(event) => setFname(event.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" name="lname" placeholder="Last name" 
                                            value={lname}
                                            onchange={(event) => setLname(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="text" name="username" placeholder="Username" 
                                            value={userName}
                                            onchange={(event) => setUserName(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="email" name="email" placeholder="Email Id" 
                                            value={email}
                                            onchange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="password" name="password"  placeholder="Password"
                                            value={password}
                                            onchange={(event) => setPassword(event.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <button className="btn btn-primary text-uppercase">Signup</button>
                                        <Link className="login-link ms-auto text-uppercase" to="/login">Login</Link>
                                    </div>

                                    {flag && (
                                        <Alert color="primary" variant="danger">
                                            Please fill every field.
                                        </Alert>
                                    )}

                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Register;
