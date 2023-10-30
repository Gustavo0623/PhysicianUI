import React from "react";

// Assessment details Component
function Assessment ({questionDetails, headers, assessmentValues}) {

    return (
        <div className='assessment'>
            {headers.map((header, headerIndex)=>(
                <div className='assessmentCategory' key={headerIndex}>
                    <p className='header'>{header}</p>
                    {questionDetails[headerIndex].map((question, questionIndex)=>(

                        <div className='questionBox border1' key={questionIndex}>
                            <p className='question'>{question}</p>
                            <p className='response'><b>Response:</b> {assessmentValues[headerIndex][questionIndex]}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Assessment