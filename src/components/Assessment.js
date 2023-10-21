import React from "react";

// Assessment details Component
function Assessment ({currentUser, questionDetails, headers}) {
    
    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    // const keys = Object.keys(questionnaireResponses)
    const values = Object.values(questionnaireResponses)
    const response = values.slice(5)

    return (
        <div className='assessment'>
            {questionDetails.map((question, index)=>(
                <div className='assessmentCategory' key={index}>
                    {index === 0 ? 
                        <p className='header'>{headers[0]}</p>
                    : index === 3 ?
                        <p className='header'>{headers[1]}</p>
                    : index === 7 ?
                        <p className='header'>{headers[2]}</p>
                    : index === 9 ?
                        <p className='header'>{headers[3]}</p>
                    : index === 12 ?
                        <p className='header'>{headers[4]}</p>
                    : index === 17 ?
                        <p className='header'>{headers[5]}</p>
                    : index === 19 ?
                        <p className='header'>{headers[6]}</p>
                    : index === 20 ?
                        <p className='header'>{headers[7]}</p>
                    : null
                    }
                    <div className={
                        index === 2 || 
                        index === 6 || 
                        index === 8 || 
                        index === 11 || 
                        index === 16 || 
                        index === 18 || 
                        index === 19 ? 'questionBox border' : 'questionBox'
                    }>
                        <p className='question'><b>{index + 1}.</b> {question}</p>
                        <p className='response'><b>Response:</b> {(response[index] !== undefined) ? response[index] : 'N/A'}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Assessment