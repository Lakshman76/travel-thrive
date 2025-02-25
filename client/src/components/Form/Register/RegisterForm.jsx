
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './RegisterForm.css';
import registerImg from '../../../assets/register.jpg'

const RegisterForm = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState({});
    console.log(file);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('email', email)
        formData.append('password', password)

        axios
            .post("http://localhost:5001/register", formData)
            .then((res) => {
                console.log(res)
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="img">
                <img src={registerImg} alt="" />
            </div>
            <div className="register-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your First name"
                            name="firstName"
                            onChange={(e) => setfirstName(e.target.value)}
                            className='inpt'
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your Last name"
                            name="LasttName"
                            onChange={(e) => setlastName(e.target.value)}
                            className='inpt'
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="xyz@gmail.com"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className='inpt'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className='inpt'
                        />
                    </div>
                    <div>
                        <label htmlFor="img">Upload your Picture</label>
                        <input type="file" name="file" id="img" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <button className='subbtn' type="submit">Register</button>
                    <span>Already have Account <Link className='swichLogin' to='/login'> Login</Link></span>

                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
