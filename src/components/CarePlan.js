import React from "react";

// Careplan details Component
function Careplan ({currentUser, questions}) {

    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    // const keys = Object.keys(questionnaireResponses)
    const allValues = Object.values(questionnaireResponses)
    const responses = allValues.slice(29)
    console.log(responses)

    return (
        <div className='carePlan'>
            { questions.map((question, index) => (
                <div className='carePlanQuestionBox' key={index}>
                    <p className='question'><b>{index +1}.</b> {question}</p>
                    <p className='response'><b>Response:</b> {responses[index]}</p>
                </div> 
            ))}
        </div>
    )
}

export default Careplan