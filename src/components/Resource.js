import React from "react";

// Resource details Component
function Resource ({riskFactors, resources}) {
    
    const riskFactorValue = Object.values(riskFactors)
    const risk = Object.keys(resources)
    const resourceDetails = Object.values(resources)
    // Set variable to hold the patient Resource data

    return (
        <div className='Resource'>
            {riskFactorValue.map((value, index)=> (
                value !== 'low' ?
                    <div className='resourceBox' key={index}>
                        <p className='risk header'>{risk[index]}</p>
                        <div className='resourceDetailBox'>
                            {resourceDetails[index].map((resource, index) => (
                                <div className='resourceDetails' key={index}>
                                    <p className='resourceDetail'><strong>{`${index + 1}${'.'}`} Name:</strong> {resource.name}</p>
                                    <p className='resourceDetail'><strong>Address:</strong> {resource.address}</p>
                                    <p className='resourceDetail'><strong>Description:</strong> {resource.description ? resource.description : 'No Description Available'}</p>
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

export default Resource