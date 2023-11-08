import React from "react";

// New Community Resource

export const NewResource = () => {

    function handleSubmit() {
        console.log("placeholder")
    }

    return(
        // Form
        <div className="formPage">
            <div className="formContainer">
                <h1 className="header">Create a New Resource</h1>
                <form onSubmit={handleSubmit}>
                    <div className="formFieldContainer">
                        <label className="formLabel">Resource Name</label>
                        <input className="formInput" type="text" />                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel">Resource Description</label>
                        <input className="formInput" type="text" />                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel">Resource Type</label>
                        <select name="resourceType">
                            <option value="Food Bank">Food Bank</option>
                        </select>                      
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel">Resource Address</label>
                        <input className="formInput" type="address" />
                    </div>
                    <button className="formSubmitButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewResource