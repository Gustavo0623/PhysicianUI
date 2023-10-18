import React from "react";

// CarePlan details Component
function CarePlan ({riskFactors, resources}) {
    
    const riskFactorValue = Object.values(riskFactors)
    const risk = Object.keys(resources)
    const resourceDetails = Object.values(resources)
    // Set variable to hold the patient CarePlan data

    return (
        <div className='carePlan'>
            {riskFactorValue.map((value, index)=> (
                value !== 'low' ?
                    <div className='resourceBox' key={index}>
                        <p className='risk'>{risk[index]}</p>
                        <div className='resourceDetailBox'>
                            {resourceDetails[index].map((resource, index) => (
                                <div className='resourceDetails' key={index}>
                                    <p className='resourceDetail'><strong>Type:</strong> {resource.type}</p>
                                    <p className='resourceDetail'><strong>Name:</strong> {resource.name}</p>
                                    <p className='resourceDetail'><strong>Address:</strong> {resource.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                :
                null
            ))}
        </div>
    )
}

export default CarePlan