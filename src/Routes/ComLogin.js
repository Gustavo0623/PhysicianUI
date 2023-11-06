import React from "react";

// Community Resource Login

export const ComLogin = () => {

    function handleSubmit() {
        console.log("placeholder")
    }

    return(
        // Form
        <div className="comLoginPage">
            <div className="comLogin">
                <h1 className="header">Community Resource Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="formFieldContainer">
                        <label className="comLoginLabel">Email Address</label>
                        <input className="comLoginInput" type="email" />                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="comLoginLabel">Password</label>
                        <input className="comLoginInput" type="password" />
                    </div>
                    <button className="comLoginButton" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default ComLogin