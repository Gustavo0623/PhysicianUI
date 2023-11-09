import React from "react";

// New Community Resource Account Create Page

export const ComAccCreate = () => {

    function handleSubmit() {
        console.log("placeholder")
    }
    return(
        // Form
        <div className="formPage">
            <div className="formContainer">
                <h1 className="header">Create a Community Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="comAccCreateRow"> 
                        <div className="formFieldContainer">
                            <label className="formLabel">First Name</label>
                            <input className="formInput formSmallInput" type="text" />                        
                        </div>
                        <div className="formFieldContainer">
                            <label className="formLabel">Last Name</label>
                            <input className="formInput formSmallInput" type="text" />
                        </div>
                    </div>
                    <div className="comAccCreateRow"> 
                        <div className="formFieldContainer">
                            <label className="formLabel">Email</label>
                            <input className="formInput formSmallInput" type="email" />                        
                        </div>
                    </div>
                    <div className="comAccCreateRow">
                        <div className="formFieldContainer">
                            <label className="formLabel">Password</label>
                            <input className="formInput formSmallInput" type="password" />
                        </div>
                        <div className="formFieldContainer">
                            <label className="formLabel">Confirm Password</label>
                            <input className="formInput formSmallInput" type="password" />
                        </div>
                    </div>
                    <div className="comAccCreateRow"> 
                        <div className="formFieldContainer">
                            <label className="formLabel">Organization Name</label>
                            <input className="formInput formSmallInput" type="text" />                        
                        </div>
                    </div>
                    <button className="formSubmitButton" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default ComAccCreate