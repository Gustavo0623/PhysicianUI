import React from "react";
import Loading from "./Loading";

function RiskFactors ({riskFactors, imageDetails, questionDetails, responseDetails}) {
    
    const riskAlerts = Object.values(riskFactors)
    const imageURL = imageDetails[0]
    const descriptions = imageDetails[1]
    // Arrange questions arrays
  

    // Create new arrays to store filtered results
    const filteredRiskAlerts = [];
    const filteredURLs = [];
    const filteredDescriptions = [];
    const filteredQuestions = []
    const filteredResponses = []

    if (riskFactors && imageDetails && questionDetails && responseDetails) {
        for (let i = 0; i < riskAlerts.length; i++) {
            if (riskAlerts[i] !== 'low') {
                filteredRiskAlerts.push(riskAlerts[i]);
                filteredURLs.push(imageURL[i]);
                filteredDescriptions.push(descriptions[i]);
                filteredQuestions.push(questionDetails[i])
                filteredResponses.push(responseDetails[i])
            }
        }
    }

    const setClass = (detail) => {
        // values are as follows, ('low' = green/good, 'medium' = yellow/average, 'high' red/high risk )
        if (detail === 'medium') {
            return 'riskImageBox yellow'
        } else 
        return 'riskImageBox red'
    }

    return (

        <div className='riskAlerts'>
                <p className='header'>Risk Alerts</p>
                <p className='riskResults'>{filteredRiskAlerts.length} Risks</p>

                <div className='riskBoxContainer'>
                    {
                    filteredRiskAlerts.map((risk, riskIndex) => (
                        
                        <div className='riskBox' key={riskIndex}>
                            <div className='iconHeader'>
                                <div className={setClass(risk)}>
                                    <img className='largeIcon' src={filteredURLs[riskIndex]} alt={filteredDescriptions[riskIndex]}/>
                                </div>
                                <p className='header'>{filteredDescriptions[riskIndex]}</p>
                            </div>
                            <div className='riskDescriptionBox'>
                                <p className='riskDescriptionText'><b>Risk:</b> { risk }</p>
                                {
                                    filteredQuestions[riskIndex] ? 
                                        filteredQuestions[riskIndex].map((question, questionIndex) => (
                                            <div className="riskQuestionBox" key={questionIndex}>
                                                <p className='question'>{question}</p>
                                                <p className='questionResponse'><b>Response:</b> {filteredResponses[riskIndex][questionIndex] ? filteredResponses[riskIndex][questionIndex] : 'N/A'}</p>
                                            </div>
                                        )) 
                                    : <Loading/>
                                }
                            </div>
                        </div>
                    ))
                    }
                </div>
        </div>
    )

}

export default RiskFactors