import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import PatientForm from "../components/PatientForm";

function NewPatient () {
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(false)
    
    useEffect(()=> {
        
        // Create an object to store the selected values
        const newPatientData = {};
        const header = document.getElementById('formHeader')

        if (submit) {
            navigate('../patients')
        }

        // Set header for edit page
        header.innerHTML = 'New Patient'

        
        // Get the form element by its ID (you should replace "yourFormId" with the actual ID)
        const form = document.getElementById("patientForm");
        // Iterate through the form inputs and add event listeners
        const formInputs = form.querySelectorAll("input, select, textarea");
        formInputs.forEach((input) => {
            if (input.name === 'command' || input.name === 'patientGender' || input.name === '21. Have you experienced any harmful events with long-lasting effects on your overall health and wellbeing today that you would like the care team to know?' || input.name === '22. Are there behaviors, environmental factors, or information that triggers a trauma response or causes significant discomfort that you would like the care team to know?' || input.name === '23. What coping skills work well for you? What helps you manage your emotions in upsetting situations?' || input.name === '24. Who do you rely on, and if they are available, how can they assist you during this encounter?' || input.name === '25. What are your strengths and what is something about you or something you have done that you are proud of?') {
                newPatientData[input.name] = input.value ? input.value : '';
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
                const response = await fetch("http://128.101.131.217:2270/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPatientData),
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