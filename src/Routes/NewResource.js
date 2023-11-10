import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/PhysNav";

const NewResource = () => {
    const navigate = useNavigate()
    const [resourceName, setResourceName] = useState("");
    const [resourceCategory, setResourceCategory] = useState("Hunger Resources");
    const [resourceAddress, setResourceAddress] = useState("");
    const [resourceDescription, setResourceDescription] = useState("");
    const [resourceType, setResourceType] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object with the form data
        const formData = {
        category: resourceCategory,
        type: resourceType,
        name: resourceName,
        address: resourceAddress,
        description: resourceDescription || null,
        };

        console.log(formData);
        navigate('/resourceList')
        // TODO: Add logic to submit the form data (e.g., make a fetch request)
    };

    return (
        // Form
        <div className="page">
            <Nav/>
            <div className="formPage mainView">
            <div className="formContainer">
                <h1 className="header">Create New Resource</h1>
                <form onSubmit={handleSubmit}>
                <div className="formFieldContainer">
                    <label htmlFor="resourceCategory" className="formLabel">Resource Category</label>
                    <div className="formSelectContainer">
                    <span className="selectArrow"></span>
                    <select
                        className="formSelect"
                        name="resourceCategory"
                        id="resourceCategory"
                        value={resourceCategory}
                        onChange={(e) => setResourceCategory(e.target.value)}
                    >
                        <option value="Hunger Resources">Hunger</option>
                        <option value="Housing Resources">Housing</option>
                        <option value="Transporation Resources">Transportation</option>
                        <option value="Intrapersonal Help">Intrapersonal Help</option>
                        <option value="Suicide Help">Suicide Help</option>
                        <option value="Depression Help">Depression Help</option>
                        <option value="Emotional Heath">Emotional Heath</option>
                        <option value="Substance Abuse">Substance Abuse</option>
                    </select>
                    </div>
                </div>
                <div className="comAccCreateRow">
                    <div className="formFieldContainer">
                        <label htmlFor="resourceName" className="formLabel">Resource Name</label>
                        <input
                        className="formInput"
                        name="resourceName"
                        id="resourceName"
                        type="text"
                        value={resourceName}
                        onChange={(e) => setResourceName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="formFieldContainer">
                        <label htmlFor="resourceType" className="formLabel">Resource Type</label>
                        <input
                        className="formInput"
                        type="text"
                        name="resourceType"
                        id="resourceType"
                        value={resourceType}
                        onChange={(e) => setResourceType(e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div className="formFieldContainer">
                    <label htmlFor="resourceAddress" className="formLabel">Resource Address</label>
                    <input
                    className="formInput"
                    type="address"
                    name="resourceAddress"
                    id="resourceAddress"
                    value={resourceAddress}
                    onChange={(e) => setResourceAddress(e.target.value)}
                    required
                    />
                </div>
                <div className="formFieldContainer">
                    <label htmlFor="resourceDescription" className="formLabel">Resource Description</label>
                    <textarea
                    className="formInput"
                    name="resourceDescription"
                    id="resourceDescription"
                    value={resourceDescription}
                    onChange={(e) => setResourceDescription(e.target.value)}
                    />
                </div>
                <button className="formSubmitButton" type="submit">
                    Submit
                </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default NewResource;
