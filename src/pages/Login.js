import React, {useState} from 'react'
//import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
//import MyAccount from './MyAccount';
import { v4 as uuidv4 } from 'uuid';

//const baseURL = "https://swapi.dev/api/people";

const Login = () => {
  /*  const [post, setPost] = React.useState(null);
    console.log(post);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    */

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    function submitForm(e){
        e.preventDefault();
        const newEntry = {id: uuidv4(), email, password};
        //console.log(newEntry.id);
        setAllEntry([...allEntry, newEntry]);
        
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Header />
            <div className="container login-page">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{
                            //post.title
                            }</h1>
                        <p>{
                            //post.body
                        }</p>
                        <div className="login-block">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="mb-4 mt-4 text-center text-uppercase">Login</h3>
                                    <form autoComplete="on" action="" onSubmit={submitForm}>
                                        <div className="mb-3">
                                            <input className="form-control" type="email" name="email" 
                                                value={email} 
                                                autoComplete="on"
                                                placeholder="Username or Email ID" 
                                                onChange={(e)=> setEmail(e.target.value)}
                                                />
                                        </div>
                                        <div className="mb-3">
                                            <input className="form-control" type="password" name="password" 
                                                value={password} 
                                                autoComplete="on"
                                                placeholder="Password" 
                                                onChange={(e)=> setPassword(e.target.value)}
                                                />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remmember password</label>
                                        </div>
                                        <div className="mb-3 d-flex">
                                            <button className="btn btn-primary">Login</button>
                                            <Link className="sign-up-link ms-auto text-uppercase" to="/signup">Signup</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="resultBox">
                            
                                {
                                    allEntry.map((curElem) => {
                                        const  {id, email, password} = curElem;
                                        return (
                                            <div className="card m-1" key={id}>
                                                <div className="card-body">
                                                    <div className="d-flex">
                                                        <p className="mb-0">{email}</p>
                                                        <p className="ms-auto mb-0">{password}</p>
                                                    </div>
                                                </div> 
                                            </div>
                                        )
                                    })
                                }
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
