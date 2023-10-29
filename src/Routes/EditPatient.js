import React, { useEffect, useState } from "react"
import BackButton from "../components/BackBtn";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

function EditPage({currentUser}) {
    console.log(currentUser)

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

        // Get a reference to the iframe
        const iframe = document.getElementById("myFrame");

        iframe.addEventListener("beforeload", (event) => {
            const iframeSrc = event.target.src;
            
            // Check if the iframe source is requesting "questionnaire" without ".html"
            if (iframeSrc.endsWith("/questionnaire")) {
            // Prevent the default behavior for this request
            event.preventDefault();
            }
        });
    
        // Load "questionnaire.html" as the iframe source
        iframe.src = "/questionnaire.html";
        
        
        // Add a load event listener to the iframe
        iframe.addEventListener("load", function() {
            const iframeDocument = iframe.contentDocument;
            console.log(iframeDocument)
    
            // Get a reference to the button inside the iframe
            const name  = iframeDocument.getElementById('name')
            const age  = iframeDocument.getElementById('age')
            const gender = iframeDocument.getElementById('genderSelect')
            const dob = iframeDocument.getElementById('DOB')
            const restructuredData = Object.entries(currentUser.questionnaireResponses).map(([question, answer]) => ({
                question,
                answer,
            }));
            const questionnaire = restructuredData.slice(5)
            console.log(questionnaire)

            const carePlanQ1 = iframeDocument.getElementById('q21')
            const carePlanQ2 = iframeDocument.getElementById('q22')
            const carePlanQ3 = iframeDocument.getElementById('q23')
            const carePlanQ4 = iframeDocument.getElementById('q24')
            const carePlanQ5 = iframeDocument.getElementById('q25')

            // Iterate through the patient data
            questionnaire.forEach(({ question, answer }) => {
                // Get the input element corresponding to the answer
                const radioInput = iframeDocument.querySelector(`input[type="radio"][name="${question}"][value="${answer}"]`);

                // Check if the radio input exists (not null)
                if (radioInput) {
                // Set the radio input as checked
                radioInput.checked = true;
                }
            });

            name.defaultValue = currentUser.patientName
            age.defaultValue = currentUser.questionnaireResponses.patientAge
            gender.value = currentUser.questionnaireResponses.patientGender
            dob.value = currentUser.questionnaireResponses.patientDOB
            carePlanQ1.defaultValue = questionnaire[24] ? questionnaire[24].answer : null
            carePlanQ2.defaultValue = questionnaire[25] ? questionnaire[25].answer : null
            carePlanQ3.defaultValue = questionnaire[26] ? questionnaire[26].answer : null
            carePlanQ4.defaultValue = questionnaire[27] ? questionnaire[27].answer : null
            carePlanQ5.defaultValue = questionnaire[28] ? questionnaire[28].answer : null

            // Get the form element by its ID (you should replace "yourFormId" with the actual ID)
            const form = iframeDocument.getElementById("patientForm");

            // Iterate through the form inputs and add event listeners
            const formInputs = form.querySelectorAll("input, select, textarea");
            formInputs.forEach((input) => {

                if (
                    input.name === 'command' ||
                    input.name === 'patientName' || input.name === 'patientAge' || 
                    input.name === 'patientGender' || input.name === 'patientDOB' ||
                    input.name === '21. Have you experienced any harmful events with long-lasting effects on your overall health and wellbeing today that you would like the care team to know?' ||
                    input.name === '22. Are there behaviors, environmental factors, or information that triggers a trauma response or causes significant discomfort that you would like the care team to know?' || 
                    input.name === '23. What coping skills work well for you? What helps you manage your emotions in upsetting situations?' ||
                    input.name === '24. Who do you rely on, and if they are available, how can they assist you during this encounter?' ||
                    input.name === '25. What are your strengths and what is something about you or something you have done that you are proud of?'
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
                    const response = await fetch("http://160.94.179.166:2270/updatePatient", {
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
        <div id='editPage'>
            <iframe title="EditPatientForm" id="myFrame" src="/questionnaire.html"></iframe>
        </div>
    )
}

export default EditPage