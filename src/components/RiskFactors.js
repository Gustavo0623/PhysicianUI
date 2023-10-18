import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function RiskFactors ({riskFactors, imageDetails, questionDetails, responseDetails}) {
    
    const riskAlerts = Object.values(riskFactors)
    const imageURL = imageDetails[0]
    const imageDescriptions = imageDetails[1]
    // Arrange questions arrays

    const [questionsArray, setQuestionsArray] = useState([])
    const [responseArray, setResponseArray] = useState([])
    const setArray = (newArray, originalArray) => {
        newArray([
            originalArray.slice(0,3),
            originalArray.slice(3,7),
            originalArray.slice(7,9),
            originalArray.slice(9,12),
            originalArray.slice(12,17),
            originalArray.slice(17,19),
            originalArray.slice(19,20),
            originalArray.slice(20,24)
        ])
    }

    useEffect(()=> {
        setArray(setQuestionsArray, questionDetails)
        setArray(setResponseArray, responseDetails.slice(2))
    }, [questionDetails, responseDetails])


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
                filteredDescriptions.push(imageDescriptions[i]);
                filteredQuestions.push(questionsArray[i])
                filteredResponses.push(responseArray[i])
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
                <p className='riskResults'>{filteredRiskAlerts.length}</p>

                <div className='riskBoxContainer'>
                    {
                    filteredRiskAlerts.map((risk, riskIndex) => (
                        
                        <div className='riskBox' key={riskIndex}>
                            <div className={setClass(risk)}>
                                <img className='largeIcon' src={filteredURLs[riskIndex]} alt={filteredDescriptions[riskIndex]}/>
                            </div>
                            <div className='riskDescriptionBox'>
                                <p className='header'>{filteredDescriptions[riskIndex]}</p>
                                <p className='riskDescriptionText'><b>Risk:</b> { risk }</p>
                                {
                                    filteredQuestions[riskIndex] ? 
                                        filteredQuestions[riskIndex].map((question, questionIndex) => (
                                            <div className="riskQuestionBox" key={questionIndex}>
                                                <p className='question'><b>{questionIndex + 1}.</b> {question}</p>
                                                <p className='questionResponse'><b>Response:</b> {filteredResponses[riskIndex][questionIndex]}</p>
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