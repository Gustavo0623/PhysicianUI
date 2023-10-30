import React from "react";

// Careplan details Component
function Careplan ({questions, values}) {

    return (
        <div className='carePlan'>
            { questions.map((question, index) => (
                <div className='carePlanQuestionBox' key={index}>
                    <p className='question'>{question}</p>
                    <p className='response'><b>Response:</b> {values[index]}</p>
                </div> 
            ))}
        </div>
    )
}

export default Careplan