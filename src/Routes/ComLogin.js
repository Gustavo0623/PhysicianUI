import React from "react";

// Community Resource Login

export const ComLogin = () => {

    function handleSubmit() {
        console.log("placeholder")
    }

    return(
        // Form
        <div className="formPage">
            <div className="formContainer">
                <h1 className="header">Community Resource Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="formFieldContainer">
                        <label className="formLabel">Email Address</label>
                        <input className="formInput" type="email" />                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel">Password</label>
                        <input className="formInput" type="password" />
                    </div>
                    <div className="comLoginRemember">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="formLabel">Remember Me</label>
                    </div>
                    <button className="formSubmitButton" type="submit">Login</button>
                    <p className="comLoginSubtext">New user? <a href="/ComAccCreate">Click here to sign up.</a></p>
                </form>
            </div>
        </div>
    )
}

export default ComLogin