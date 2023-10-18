import React from "react";

// Assessment details Component
function Assessment ({currentUser, questionDetails}) {
    
    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    // const keys = Object.keys(questionnaireResponses)
    const values = Object.values(questionnaireResponses)
    const patientInfo = values.slice(1,5)
    const response = values.slice(5)
    console.log(patientInfo)

    return (
        <div className='assessment'>
            {questionDetails.map((question, index)=>(
                <div className='questionBox' key={index}>
                    <p className='question'><b>{index + 1}.</b> {question}</p>
                    <p className='response'><b>Response:</b> {(response[index] !== undefined) ? response[index] : 'N/A'}</p>
                </div>
            ))}
        </div>
    )
}

export default Assessment