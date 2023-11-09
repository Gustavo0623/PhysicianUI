import React from "react";

// New Community Resource
// TODO: Add organization name of account creating resource to beginning of resource name before storing

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
{/*                    <div className="formFieldContainer"> */} 
{/*                        <label className="formLabel">Resource Description</label> */} 
{/*                        <input className="formInput" type="text" />                */}          
{/*                    </div>   */}  
                    <div className="formFieldContainer">
                        <label className="formLabel">Resource Category</label>
                        <div className="formSelectContainer">
                            <span className="selectArrow"></span>
                            <select className="formSelect" name="resourceType">
                                <option value="hungerresources">Hunger</option>
                                <option value="housingresources">Housing</option>
                                <option value="transporation">Transportation</option>
                                <option value="intrapersonalhelp">Intrapersonal Help</option>
                                <option value="suicidehelp">Suicide Help</option>
                                <option value="depressionhelp">Depression Help</option>
                                <option value="emotionalheath">Emotional Health</option>
                                <option value="substanceAbuse">Substance Abuse</option>
                            </select>    
                        </div>                  
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