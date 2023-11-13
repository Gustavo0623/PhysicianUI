import React, { useState, useEffect } from "react";
import Assessment from "../components/Assessment";
import BackButton from "../components/BackBtn";
import Resource from "../components/Resource";
import Loading from "../components/Loading";
import PatientInfo from "../components/PatientInfo";
import RiskFactors from "../components/RiskFactors";
import Careplan from "../components/CarePlan";
import Nav from "../components/PhysNav";

function Patient ({currentUser}) {
    // Icon data
    const imageURL = ['../images/drink.png', '../images/home.png', '../images/car.png', '../images/shield.png', '../images/lifeline.png', '../images/sad.png', '../images/heart.png', '../images/pills-bottle.png', ]
    const descriptions = ['Food Security', 'Housing Security', 'Transportation Security', 'Interpersonal Safety', 'Suicide', 'Depression', 'Emotional Health', 'Substance Use']

    // Assessment and Care Plan state variables
    const [assessmentState, setAssessmentState] = useState(false)
    const [carePlanState, setCarePlanState] = useState(false)
    const [resources, setResources] = useState(null)
    
    // Set variable to hold the patient assessment data
    const questionnaireResponses = currentUser.questionnaireResponses
    
    // Extract the keys and values from the object
    const keys = Object.keys(questionnaireResponses);
    
    // Define an array of special keys to appear at the front
    const specialKeys = ['patientName', 'patientDOB', 'patientGender', 'command', 'patientAge'];
    
    // Custom sorting function to sort by both numeric and alphabetic parts
    const customSort = (a, b) => {
        const matchA = a.match(/^(\d+)([a-d])?\./);
        const matchB = b.match(/^(\d+)([a-d])?\./);
    
        const keyA = matchA ? parseInt(matchA[1]) : 0;
        const keyB = matchB ? parseInt(matchB[1]) : 0;

        // Compare the numeric parts first
        if (keyA !== keyB) {
            return keyA - keyB;
        }
    
        if (keyA === keyB) {
            const alphaA = matchA ? matchA[2] : a;
            const alphaB = matchB ? matchB[2] : b;
            return alphaA.localeCompare(alphaB);
        }
    
        return keyA - keyB;
    };
    
    // Sort the remaining keys based on both numeric and alphabetic parts
    const sortedKeys = keys
        .filter((key) => !specialKeys.includes(key))
        .sort(customSort);
    
    // Concatenate special keys and sorted keys
    const finalSortedKeys = specialKeys.concat(sortedKeys);
    
    // Store the sorted values using the final sorted keys
    const sortedValues = finalSortedKeys.map((key) => questionnaireResponses[key]);

    // Extract the first five values into a new variable
    const patientDetails = sortedValues.slice(0, 5);

    // Remove the first five values from the original array
    sortedValues.splice(0, 5);

    finalSortedKeys.splice(0, 5)

      
    const categories = [
        ["1. Do you have food for tonight? (Y/N)", "2. Within the past 12 months, did you worry that your food would run out before you got money to buy more? (Y/N)", "3. Within the past 12 months, did the food you bought just not last and you didn’t have money to get more? (Y/N)"],
        ["4. Do you have somewhere safe to sleep tonight? (Y/N)", "5. Do you have housing? (Y/N)", "6. Are you worried about losing your housing? (Y/N)", "7. Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed? (Y/N)"],
        ["8. Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)? (Y/N)", "9. Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need? (Y/N)"],
        ["10. Do you feel physically and emotionally safe where you currently live? (Y/N)", "11. Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone? (Y/N)", "12. Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner? (Y/N)"],
        ["13. Are you having thoughts of killing yourself right now? (Y/N)", "14. In the past few weeks, have you wished you were dead? (Y/N)", "15. In the past few weeks, have you felt that you or your family would be better off if you were dead? (Y/N)", "16. In the past week, have you been having thoughts about killing yourself? (Y/N)", "17. Have you ever tried to kill yourself? (Y/N)"],
        ["18a. Little interest or pleasure in doing things?", "18b. Feeling down, depressed, or hopeless?"],
        ["19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?"],
        ["20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits.", "20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?", "20c. How many times in the past 12 months have you used illegal drugs?", "20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?"],
        ["21. Have you experienced any harmful events with long-lasting effects on your overall health and wellbeing today that you would like the care team to know?", "22. Are there behaviors, environmental factors, or information that triggers a trauma response or causes significant discomfort that you would like the care team to know?", "23. What coping skills work well for you? What helps you manage your emotions in upsetting situations?", "24. Who do you rely on, and if they are available, how can they assist you during this encounter?", "25. What are your strengths and what is something about you or something you have done that you are proud of?"]
    ];
    
    // Create an array to hold the grouped categories
    const groupedCategories = categories.map((category) =>
        category.map((key) => finalSortedKeys[sortedKeys.indexOf(key)] || "")
    );
    
    // Create an array to hold the grouped values
    const groupedValues = groupedCategories.map((category) =>
    category.map((key) => sortedValues[sortedKeys.indexOf(key)] || "N/A")
    );

    const carePlanQuestions = categories[categories.length-1]
    const assessmentQuestions = categories.slice(0, categories.length - 1)
    const carePlanValues = groupedValues[groupedValues.length-1]
    const assessmentValues = groupedValues.slice(0, groupedValues.length - 1)


    async function fetchData() {
        try {
            const url = 'http://128.101.131.217:2260/allResources';
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
        <div className="page">
            <Nav url='../images/vertex-updated-logo.webp'/>
            <div className='patientPage'> 
                <BackButton/>
                <div id="patientDetailBox">
                    <p className='patientDetailsText'>PATIENT DETAILS</p>
                    <div className="assessmentIcons">
                        <h1 className='name'>{currentUser.patientName}</h1>
                        <div className='patient'>
                            <h2 className="patientInformation">MRN: {currentUser.MRN}</h2>
                            <h2 className='patientInformation'>Age: {patientDetails[4]}</h2>
                            <h2 className='patientInformation'>Gender: {patientDetails[2]}</h2>
                            <h2 className='patientInformation'>DOB: {patientDetails[1]}</h2>
                        </div>
                        { currentUser ? <PatientInfo iconDetails={currentUser.riskFactors} imageDetails={[imageURL, descriptions]}/> : null }
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
                        {assessmentState ? <Assessment questionDetails={assessmentQuestions} headers={descriptions} assessmentValues={assessmentValues}/> : null}
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
                        {carePlanState ? <Careplan questions={carePlanQuestions} values={carePlanValues}/> : null}
                    </div>
                </div>
                <RiskFactors riskFactors={currentUser.riskFactors} imageDetails={[imageURL, descriptions]} questionDetails={categories} responseDetails={assessmentValues}/>
                <p className='header'>Resources</p>
                <Resource riskFactors={currentUser.riskFactors} resources={resources.return}/>
            </div>
        </div>

    )

}

export default Patient