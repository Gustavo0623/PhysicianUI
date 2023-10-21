import React from "react";

function PatientInfo ({iconDetails, imageDetails}) {

    const patientData = Object.values(iconDetails)

    // function that will determine the className of each icon to determine the color depending on the iconDetails prop value that will change with every user
    const setClass = (detail) => {
        // values are as follows, ('low' = green/good, 'medium' = yellow/average, 'high' red/high risk )
        if (detail === 'low') {
            return 'icon green'
        } else if (detail === 'medium') {
            return 'icon yellow'
        } else 
        return 'icon red'
    }

    const imageURL = imageDetails[0]
    const descriptions = imageDetails[1]
    
    return (

        <div className='expansion'>
            {
                patientData.map((detail, index) => (
                    detail !== 'low' ? 
                    <div className='detailGroup' key={index}>
                        <div className={setClass(detail)}>
                            <img className='smallIcon' src={imageURL[index]} alt={descriptions[index]}/>
                        </div>
                    </div>
                    : null
                ))
                }
        </div>
    )

}

export default PatientInfo