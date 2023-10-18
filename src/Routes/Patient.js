import React, { useState, useEffect } from "react";
import Assessment from "../components/Assessment";
import BackButton from "../components/BackBtn";
import CarePlan from "../components/CarePlan";
import Loading from "../components/Loading";
import PatientInfo from "../components/PatientInfo";
import RiskFactors from "../components/RiskFactors";

function Patient ({currentUser}) {
    // Icon data
    const imageURL = ['../images/drink.png', '../images/home.png', '../images/car.png', '../images/shield.png', '../images/lifeline.png', '../images/sad.png', '../images/heart.png', '../images/pills-bottle.png', ]
    const imageDescriptions = ['Food Security', 'Housing Security', 'Transportation Security', 'Interpersonal Safety', 'Suicide', 'Depression', 'Emotional Health', 'Substance Use']

    // Assessment and Care Plan state variables
    const [assessmentState, setAssessmentState] = useState(false)
    const [carePlanState, setCarePlanState] = useState(false)
    const [resources, setResources] = useState(null)
    const questionsArray = [
        'Do you have food for tonight?',
        'Within the past 12 months, did you worry that your food would run out before you got money to buy more?', 
        'Within the past 12 months, did the food you bought just not last and you didn\'t have money to get more?', 
        'Do you have somewhere safe to sleep tonight?', 
        'Do you have housing?', 
        'Are you worried about losing your housing?', 
        'Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed?', 
        'Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)?', 
        'Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need?', 
        'Do you feel physically and emotionally safe where you currently live', 
        'Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone?', 
        'Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner?', 
        'Are you having thoughts of killing yourself right now?', 
        'In the past few weeks, have you wished you were dead?', 
        'In the past few weeks, have you felt that you or your family would be better off if you were dead?', 
        'In the past week, have you been having thoughts about killing yourself?', 
        'Have you ever tried to kill yourself?', 
        'Little interest or pleasure in doing things?', 
        'Feeling down, depressed, or hopeless?', 
        'Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?', 
        'How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? (One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits)', 
        'How many times in the past 12 months have you used prescription drugs for non-medical reasons?', 
        'How many times in the past 12 months have you used illegal drugs?', 
        'How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?'
    ]

    async function fetchData() {
        try {
            const url = 'http://160.94.179.166:2260/allResources';
            const headers = new Headers();
            headers.append('Content-Type', 'application/json'); // You can add other headers if needed
        
            const requestOptions = {
                method: 'GET',
                headers: headers,
            };
        
            const response = await fetch(url, requestOptions);
        
            if (response.ok) {
                const data = await response.json();
                setResources(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
      

    useEffect(() => {
        fetchData(); // Fetch data when the component is mounted
        // next line disables error message
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!currentUser || !resources) {
        // TODO : edit loading screen while waiting for patient information
        return (
            <div id='loadingBox'>
                <BackButton/>
                <Loading/>
            </div>
        )
    }

    return (
        <div className='patientPage'> 
            <BackButton/>
            <div id="patientDetailBox">
                <p className='patientDetailsText'>PATIENT DETAILS</p>
                <div className="assessmentIcons">
                    <h1 className='name'>{currentUser.name}</h1>
                    <h2 className="mrn">MRN: {currentUser.MRN}</h2>
                    { currentUser ? <PatientInfo iconDetails={currentUser.riskFactors} imageDetails={[imageURL, imageDescriptions]}/> : null }
                </div>
            </div>
            <div className="buttonBar">
                <div className='buttonBox'>
                    <button className={!assessmentState ? "dropButton" : "dropButton active"} onClick={() => {
                        !assessmentState ? 
                            setAssessmentState(true) 
                        :
                            setAssessmentState(false)
                    }}>
                        <span className={!assessmentState ? "arrowBG" : "arrowUp"}></span>
                        <p className="dropText">Psychosocial Assessment</p> 
                    </button>
                    {assessmentState ? <Assessment currentUser={currentUser} questionDetails={questionsArray}/> : null}
                </div>
                <div className='buttonBox'>
                    <button className={!carePlanState ? "dropButton" : "dropButton active"} onClick={() => {
                        !carePlanState ? 
                            setCarePlanState(true)
                        :
                            setCarePlanState(false)
                    }}>
                        <span className={!carePlanState ? "arrowBG" : "arrowUp"}></span>
                        <p className="dropText">Trauma-Informed Care Plan</p>
                    </button>
                </div>
            </div>
            <RiskFactors riskFactors={currentUser.riskFactors} imageDetails={[imageURL, imageDescriptions]} questionDetails={questionsArray} responseDetails={Object.values(currentUser.questionnaireResponses)}/>
            <CarePlan riskFactors={currentUser.riskFactors} resources={resources.return}/>
        </div>

    )

}

export default Patient