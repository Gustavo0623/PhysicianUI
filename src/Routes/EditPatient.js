import React, { useEffect, useState } from "react"
import BackButton from "../components/BackBtn";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import PatientForm from "../components/PatientForm";

function EditPage({currentUser}) {
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(false)

    useEffect(()=> {

        // Create an object to store the selected values
        const newPatientData = {};

        if (!currentUser) {
            return 
        }

        if (submit) {
            navigate('../patients')
        }
            const name  = document.getElementById('name')
            const age  = document.getElementById('age')
            const gender = document.getElementById('genderSelect')
            const dob = document.getElementById('DOB')
            const header = document.getElementById('formHeader')
            const restructuredData = Object.entries(currentUser.questionnaireResponses).map(([question, answer]) => ({
                question,
                answer,
            }));
            const questionnaire = restructuredData.slice(5)

            // Set header for edit page
            header.innerHTML = 'Edit Patient'

            // Iterate through the patient data
            questionnaire.forEach(({ question, answer }) => {
                // Get the input element corresponding to the answer
                const radioInput = document.querySelector(`input[type="radio"][name="${question}"][value="${answer}"]`);

                // Check if the radio input exists (not null)
                if (radioInput) {
                // Set the radio input as checked
                radioInput.checked = true;
                }

                const textarea = document.querySelector(`textarea[name="${question}"]`)
                if (textarea) {
                    textarea.defaultValue = answer
                }
            });

            name.defaultValue = currentUser.patientName
            age.defaultValue = currentUser.questionnaireResponses.patientAge
            gender.value = currentUser.questionnaireResponses.patientGender
            dob.value = currentUser.questionnaireResponses.patientDOB

            // Get the form element by its ID (you should replace "yourFormId" with the actual ID)
            const form = document.getElementById("patientForm");

            // Iterate through the form inputs and add event listeners
            const formInputs = form.querySelectorAll("input, select, textarea");
            formInputs.forEach((input) => {

                if (
                    input.name === 'command' ||
                    input.name === 'patientName' || input.name === 'patientAge' || 
                    input.name === 'patientGender' || input.name === 'patientDOB'
                ) {
                    newPatientData[input.name] = input.value;
                }

                // Check if the input is already set to the default value
                if (input.value === [input.defaultValue] || input.checked === true) {
                    // If it's the default value, store the default in newPatientData
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
                    const response = await fetch("http://128.101.131.217:2270/updatePatient", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            patientName: newPatientData.patientName,
                            MRN: currentUser.MRN,
                            questionnaireResponses: newPatientData,
                        }),
                    });
                    console.log(response)
                    console.log(newPatientData)
                    setSubmit(true)
                    
                    if (!response.ok) {
                        throw new Error("Failed to update patient data");
                    }
                } catch (error) {
                    console.error(error);
                    // Handle the error as needed, e.g., display an error message to the user
                }
            });
    }, [currentUser, navigate, submit])

    if (!currentUser) {
        return (
            <div>
                <BackButton/>
                <Loading/>
            </div>
        )
    }


    return (
        <PatientForm/>
    )
}

export default EditPage