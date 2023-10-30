import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import PatientForm from "../components/PatientForm";

function NewPatient () {
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(false)

    useEffect(()=> {

        // Create an object to store the selected values
        const newPatientData = {};

        if (submit) {
            navigate('../patients')
        }

        
        // Get the form element by its ID (you should replace "yourFormId" with the actual ID)
        const form = document.getElementById("patientForm");
        // Iterate through the form inputs and add event listeners
        const formInputs = form.querySelectorAll("input, select, textarea");
        formInputs.forEach((input) => {
            if (input.name === 'command' || input.name === 'patientGender') {
                newPatientData[input.name] = input.value;
            }
            input.addEventListener("change", function() {
                // Update the newPatientData object when input values change
                newPatientData[input.name] = input.value;
            });
        });
        // Add a submit button event listener to capture the data
        const submitButton = form.querySelector('#submitBtn');
        submitButton.addEventListener("click", async function(event) {
            event.preventDefault(); // Prevent the form from submitting
            
            // Use a try-catch block to handle potential errors
            try {
        
                // Make a PUT request to update the patient data
                const response = await fetch("http://160.94.179.166:2270/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        questionnaireData: newPatientData
                    }),
                });
                console.log(response)
                console.log(newPatientData)
                setSubmit(true)
                
                if (!response.ok) {
                    throw new Error("Failed to create Patient");
                }
            } catch (error) {
                console.error(error);
                // Handle the error as needed, e.g., display an error message to the user
            }
        });
    }, [navigate, submit])

    return (
        <PatientForm/>
    )
}

export default NewPatient 