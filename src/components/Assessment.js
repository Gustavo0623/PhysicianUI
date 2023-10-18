import React from "react";

// Assessment details Component
function Assessment ({currentUser, questionDetails}) {
    
    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    // const keys = Object.keys(questionnaireResponses)
    const values = Object.values(questionnaireResponses)
    const response = values.slice(2)

    return (
        <div className='assessment'>
            {questionDetails.map((question, index)=>(
                <div className='questionBox' key={index}>
                    <p className='question'><b>{index + 1}.</b> {question}</p>
                    <p className='response'><b>Response:</b> {response[index]}</p>
                </div>
            ))}
        </div>
    )
}

export default Assessment