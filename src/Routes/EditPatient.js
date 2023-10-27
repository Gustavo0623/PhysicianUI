import React, { useEffect } from "react"
import BackButton from "../components/BackBtn";
import Loading from "../components/Loading";

function EditPage({currentUser, setEdit}) {

    useEffect(()=> {

        if (!currentUser) {
            return 
        }

        // Get a reference to the iframe
        const iframe = document.getElementById("myFrame");
        
        
        // Add a load event listener to the iframe
        iframe.addEventListener("load", function() {
            const iframeDocument = iframe.contentDocument;
    
            // Get a reference to the button inside the iframe
            const button = iframeDocument.querySelector('.btn.btn-primary');
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
            carePlanQ1.defaultValue = questionnaire[24] ? questionnaire[24].answer : ''
            carePlanQ2.defaultValue = questionnaire[25] ? questionnaire[25].answer : ''
            carePlanQ3.defaultValue = questionnaire[26] ? questionnaire[26].answer : ''
            carePlanQ4.defaultValue = questionnaire[27] ? questionnaire[27].answer : ''
            carePlanQ5.defaultValue = questionnaire[28] ? questionnaire[28].answer : ''
    
            // Add an event listener to the button
            button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior
            // Your event handling code here
            alert("Button inside iframe was clicked!");
            });
        });
    }, [currentUser])

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
            <iframe title="EditPatientForm" id="myFrame" src="./questionnaire.html"></iframe>
        </div>
    )
}

export default EditPage