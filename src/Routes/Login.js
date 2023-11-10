import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

// Physician Login

export const Login = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    });

    const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setLoginData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
    }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    navigate('/patients')

    // try {
    //     const response = await fetch("YOUR_LOGIN_API_ENDPOINT", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginData),
    //     });

    //     if (!response.ok) {
    //     throw new Error("Failed to log in");
    //     }

    //     // Handle successful login, e.g., redirect to another page
    //     console.log("Login successful!");
    // } catch (error) {
    //     console.error(error);
    //     // Handle the error as needed, e.g., display an error message to the user
    // }
};

    return(
        // Form
        <div className="formPage">
            <div className="formContainer">
                <h1 className="header">Account Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor="loginEmail">Email Address</label>
                        <input className="formInput" type="email" name="email" autoComplete="on" id="loginEmail" onChange={handleChange} required/>                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor="loginPassword">Password</label>
                        <input className="formInput" type="password" name="password" id="loginPassword" onChange={handleChange} required/>
                    </div>
                    <div className="comLoginRemember">
                        <input type="checkbox" id="rememberMe" name="rememberMe" checked={loginData.rememberMe} onChange={handleChange}/>
                        <label htmlFor="rememberMe" className="formLabel">Remember Me</label>
                    </div>
                    <button className="formSubmitButton" type="submit">Login</button>
                    <p className="comLoginSubtext">New user? Click <a href="./signup">here</a> to sign up.</p>
                </form>
            </div>
        </div>
    )
}