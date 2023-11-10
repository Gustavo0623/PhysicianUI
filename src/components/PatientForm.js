import React from "react";
import Nav from "./PhysNav";

function PatientForm () {

    return(
        <div className="page">
            <Nav/>
            <div className="container-fluid mainView">
                <div className="row" id="editPage">
                    <div className="col-4 col-lg-2" id="left-form">
                        <nav id="FormNav" className="h-100 flex-column border-end">
                            <nav className="nav nav-pills flex-column sticky-top pt-5">
                                <a className="nav-link rounded" href="#PatientInfo">Patient Info</a>
                                <a className="nav-link rounded" href="#FoodSecurity">Food Security</a>
                                <a className="nav-link rounded" href="#HouseSecurity">House Security</a>
                                <a className="nav-link rounded" href="#Transportation">Transportation</a>
                                <a className="nav-link rounded" href="#InterpersonalSafety">Interpersonal Safety</a>
                                <a className="nav-link rounded" href="#Suicide">Suicide</a>
                                <a className="nav-link rounded" href="#Depression">Depression</a>
                                <a className="nav-link rounded" href="#Stress">Stress</a>
                                <a className="nav-link rounded" href="#SubstanceUse">Substance Use</a>
                                <a className="nav-link rounded" href="#TraumaCare">Trauma-Informed Care Plan</a>
                            </nav>
                        </nav>
                    </div>
                    <div className="col-6 col-lg-7" id="right-form">
                        <div data-bs-spy="scroll" data-bs-target="#FormNav" data-bs-smooth-scroll="true" className="" tabIndex="0">
                            <h2 id='formHeader'>Header</h2>
                            <hr/>
                            <h4>
                                There are programs to help people with needs that can affect their health, but they aren’t reaching everyone who may need them. Are there things you need help with?
                            </h4>
                            <hr/>
                            <form id="patientForm" action="/" method="post">
                                <input name="command" type="hidden" value="computeRiskScores"/>
                                    <div id="PatientInfo" className="mb-5">
                                    <h4 className="mb-3">Patient Info</h4>
                                    <div className="mb-3">
                                        <label className="form-label">Patient Name</label>
                                        <input type="text" id="name" className="form-control" name="patientName" require="true"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Patient Age</label>
                                        <input type="number" id="age" className="form-control" name="patientAge" require="true"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="genderSelect" className="form-label">Gender</label>
                                        <select className="form-control" id="genderSelect" name="patientGender" require="true">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Date of Birth</label>
                                        <input type="date" id="DOB" className="form-control" name="patientDOB" require="true"/>
                                    </div>
                                </div>
                                    {/* <!-- Food Security (0-3; 1: medium risk, 2: high risk, 3: imminent risk) --> */}
                                    <hr className="hr" />
                                    <div id="FoodSecurity" className="mb-5">
                                    <h4 className="mb-3">Food Security</h4>
                                    <div className="mb-4">
                                        <label className="form-label">
                                        1. Do you have food for tonight? (Y/N)
                                        </label>
                                        <br/>
                                        <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input q1Y" id="inlineRadioDefault1" name="1. Do you have food for tonight? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input q1N" id="inlineRadioDefault2" name="1. Do you have food for tonight? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                        2. Within the past 12 months, did you worry that your food would run out before you got money to buy more? (Y/N)
                                        </label>
                                        <br/>
                                        <div className="form-check form-check-reverse form-check-inline">
                                        <input className="form-check-input" id="inlineRadioDefault1" name="2. Within the past 12 months, did you worry that your food would run out before you got money to buy more? (Y/N)" type="radio" value="Yes"/>
                                        <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                        Yes
                                        </label>
                                        </div>
                                        <div className="form-check form-check-reverse form-check-inline">
                                        <input className="form-check-input" id="inlineRadioDefault2" name="2. Within the past 12 months, did you worry that your food would run out before you got money to buy more? (Y/N)" type="radio" value="No"/>
                                        <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                        No
                                        </label>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">
                                        3. Within the past 12 months, did the food you bought just not last and you didn’t have money to get more? (Y/N)
                                        </label>
                                        <br/>
                                        <div className="form-check form-check-reverse form-check-inline">
                                        <input className="form-check-input" id="inlineRadioDefault1" name="3. Within the past 12 months, did the food you bought just not last and you didn’t have money to get more? (Y/N)" type="radio" value="Yes"/>
                                        <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                        Yes
                                        </label>
                                        </div>
                                        <div className="form-check form-check-reverse form-check-inline">
                                        <input className="form-check-input" id="inlineRadioDefault2" name="3. Within the past 12 months, did the food you bought just not last and you didn’t have money to get more? (Y/N)" type="radio" value="No"/>
                                        <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                        No
                                        </label>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!-- Housing Security/Utilities (0-4; 1: medium risk, 2: high risk, 4: imminent risk) --> */}
                                    <hr className="hr" />
                                    <div id="HouseSecurity" className="mb-5">
                                        <h4 className="mb-3">House Security</h4>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            4. Do you have somewhere safe to sleep tonight? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="4. Do you have somewhere safe to sleep tonight? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="4. Do you have somewhere safe to sleep tonight? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            5. Do you have housing? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="5. Do you have housing? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="5. Do you have housing? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            6. Are you worried about losing your housing? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="6. Are you worried about losing your housing? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="6. Are you worried about losing your housing? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            7. Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="7. Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="7. Within the past 12 months, have you or your family members you live with been unable to get utilities (heat, electricity) when it was really needed? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Transportation (0-2; 1: medium risk, 2: imminent risk) --> */}
                                    <hr className="hr" />
                                    <div id="Transportation" className="mb-5">
                                        <h4 className="mb-3">Transportation</h4>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            8. Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="8. Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="8. Are your currently able to access reliable transportation to receive needed care (e.g. transportation to medical appointments, pharmacies for medications, other needed services)? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                            9. Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="9. Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="9. Within the past 12 months, has lack of transportation kept you from medical appointments, getting your medicines, non-medical meetings or appointments, work, or from getting things that you need? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Interpersonal Safety (0-4; 1: medium risk, 2: high risk, 4: imminent risk) --> */}
                                    <hr className="hr" />
                                    <div id="InterpersonalSafety" className="mb-5">
                                        <h4 className="mb-3">Interpersonal Safety</h4>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            10. Do you feel physically and emotionally safe where you currently live? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="10. Do you feel physically and emotionally safe where you currently live? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="10. Do you feel physically and emotionally safe where you currently live? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            11. Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="11. Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="11. Within the past 12 months, have you been hit, slapped, kicked or otherwise physically hurt by someone? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            12. Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="12. Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="12. Within the past 12 months, have you been humiliated or emotionally abused in other ways by your partner or ex-partner? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!---- TRAUMA INFORMED SCREENINGS ----> */}
                                    {/* <!-- Suicide (1-5; 1: high risk, 5: imminent risk) --> */}
                                    <hr className="hr" />
                                    <div id="Suicide" className="mb-5">
                                        <h4 className="mb-3">Suicide</h4>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            13. Are you having thoughts of killing yourself right now? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="13. Are you having thoughts of killing yourself right now? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="13. Are you having thoughts of killing yourself right now? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            14. In the past few weeks, have you wished you were dead? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="14. In the past few weeks, have you wished you were dead? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="14. In the past few weeks, have you wished you were dead? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            15. In the past few weeks, have you felt that you or your family would be better off if you were dead? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="15. In the past few weeks, have you felt that you or your family would be better off if you were dead? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="15. In the past few weeks, have you felt that you or your family would be better off if you were dead? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            16. In the past week, have you been having thoughts about killing yourself? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="16. In the past week, have you been having thoughts about killing yourself? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="16. In the past week, have you been having thoughts about killing yourself? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            17. Have you ever tried to kill yourself? (Y/N)
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="17. Have you ever tried to kill yourself? (Y/N)" type="radio" value="Yes"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Yes
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="17. Have you ever tried to kill yourself? (Y/N)" type="radio" value="No"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            No
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Depression (after adding 18a and 18b together, 3 or more: high risk) --> */}
                                    {/* <!-- Intro: Over the last 2 weeks, how often have you been bothered by
                                                the following problems? --> */}
                                    <hr className="hr" />
                                    <div id="Depression" className="mb-5">
                                        <h4 className="mb-3">Depression</h4>
                                        <h6 className="lead fst-italic">Intro: Over the last 2 weeks, how often have you been bothered by the following problems?</h6>
                                        <br/>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            18a. Little interest or pleasure in doing things?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="18a. Little interest or pleasure in doing things?" type="radio" value="Not at all"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Not at all
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="18a. Little interest or pleasure in doing things?" type="radio" value="Several days"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Several days
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="18a. Little interest or pleasure in doing things?" type="radio" value="More than half the days"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            More than half the days
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="18a. Little interest or pleasure in doing things?" type="radio" value="Nearly every day"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Nearly every day
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            18b. Feeling down, depressed, or hopeless?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="18b. Feeling down, depressed, or hopeless?" type="radio" value="Not at all"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Not at all
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="18b. Feeling down, depressed, or hopeless?" type="radio" value="Several days"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Several days
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="18b. Feeling down, depressed, or hopeless?" type="radio" value="More than half the days"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            More than half the days
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="18b. Feeling down, depressed, or hopeless?" type="radio" value="Nearly every day"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Nearly every day
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr" />
                                    {/* <!-- Stress/Emotional Health (0-4; 2: medium risk, 3: high risk, 4: imminent risk) --> */}
                                    <div id="Stress" className="mb-5">
                                        <h4 className="mb-3">Stress</h4>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?" type="radio" value="Not at all"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Not at all
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?" type="radio" value="A little bit"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            A little bit
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?" type="radio" value="Somewhat"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            Somewhat
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?" type="radio" value="Quite a bit"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Quite a bit
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault5" name="19. Stress means a situation in which a person feels tense, restless, nervous, or anxious, or is unable to sleep at night because his or her mind is troubled all the time. Do you feel this kind of stress these days?" type="radio" value="Very much"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault5">
                                            Very much
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Substance Use (0-4; 2: medium risk; 3: high risk; 4: imminent risk) --> */}
                                    {/* <!-- Intro: The next questions relate to your experience with alcohol,
                                                cigarettes, and other drugs. Some of the substances are prescribed by a
                                                doctor (like pain medications), but only count those if you have taken
                                                them for reasons or in doses other than prescribed. One question is about
                                                illicit or illegal drug use, but we only ask in order to identify community
                                                services that may be available to help you. --> */}
                                    <hr className="hr" />
                                    <div id="SubstanceUse" className="mb-5">
                                        <h4 className="mb-3">Substance Use</h4>
                                        <h6 className="lead fst-italic">The next questions relate to your experience with alcohol,
                                            cigarettes, and other drugs. Some of the substances are prescribed by a
                                            doctor (like pain medications), but only count those if you have taken
                                            them for reasons or in doses other than prescribed. One question is about
                                            illicit or illegal drug use, but we only ask in order to identify community
                                            services that may be available to help you.</h6>
                                            <br/>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits.
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits." type="radio" value="Never"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Never
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits." type="radio" value="Once or Twice"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Once or Twice
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits." type="radio" value="Monthly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            Monthly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits." type="radio" value="Weekly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Weekly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault5" name="20a. How many times in the past 12 months have you had 5 or more drinks in a day (males) or 4 or more drinks in a day (females)? One drink is 12 ounces of beer, 5 ounces of wine, or 1.5 ounces of 80-proof spirits." type="radio" value="Daily or Almost Daily"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault5">
                                            Daily or Almost Daily
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?" type="radio" value="Never"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Never
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?" type="radio" value="Once or Twice"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Once or Twice
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?" type="radio" value="Monthly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            Monthly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?" type="radio" value="Weekly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Weekly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault5" name="20b. How many times in the past 12 months have you used prescription drugs for non-medical reasons?" type="radio" value="Daily or Almost Daily"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault5">
                                            Daily or Almost Daily
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            20c. How many times in the past 12 months have you used illegal drugs?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="20c. How many times in the past 12 months have you used illegal drugs?" type="radio" value="Never"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Never
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="20c. How many times in the past 12 months have you used illegal drugs?" type="radio" value="Once or Twice"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Once or Twice
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="20c. How many times in the past 12 months have you used illegal drugs?" type="radio" value="Monthly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            Monthly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="20c. How many times in the past 12 months have you used illegal drugs?" type="radio" value="Weekly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Weekly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault5" name="20c. How many times in the past 12 months have you used illegal drugs?" type="radio" value="Daily or Almost Daily"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault5">
                                            Daily or Almost Daily
                                            </label>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                            20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?
                                            </label>
                                            <br/>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault1" name="20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?" type="radio" value="Never"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault1">
                                            Never
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault2" name="20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?" type="radio" value="Once or Twice"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault2">
                                            Once or Twice
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault3" name="20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?" type="radio" value="Monthly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault3">
                                            Monthly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input" id="inlineRadioDefault4" name="20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?" type="radio" value="Weekly"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault4">
                                            Weekly
                                            </label>
                                            </div>
                                            <div className="form-check form-check-reverse form-check-inline">
                                            <input className="form-check-input q24-5" id="inlineRadioDefault5" name="20d. How many times in the past 12 months have you used tobacco products (like cigarettes, cigars, snuff, chew, electronic cigarettes)?" type="radio" value="Daily or Almost Daily"/>
                                            <label className="form-check-label" htmlFor="inlineRadioDefault5">
                                            Daily or Almost Daily
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--Trauma Informed Care Plan--> */}
                                    <hr className="hr" />
                                    <h4 className="mb-3">Trauma-Informed Care Plan</h4>
                                    <div className="mb-4" id="TraumaCare">
                                        <h5 className="mb-3">Trauma History</h5>
                                        <p>21. Have you experienced any harmful events with long-lasting effects on your overall health and wellbeing today that you would like the care team to know?</p>
                                        <textarea id="q21" className="form-control" name="21. Have you experienced any harmful events with long-lasting effects on your overall health and wellbeing today that you would like the care team to know?" rows="4" cols="50"></textarea>
                                    </div>
                                    
                                    <div className="mb-4" id="PatientTriggers">
                                        <h5 className="mb-3">Patient Triggers</h5>
                                        <p>22. Are there behaviors, environmental factors, or information that triggers a trauma response or causes significant discomfort that you would like the care team to know?</p>
                                        <textarea id="q22" className="form-control" name="22. Are there behaviors, environmental factors, or information that triggers a trauma response or causes significant discomfort that you would like the care team to know?" rows="4" cols="50"></textarea>
                                    </div>
                                    
                                    <div className="mb-4" id="PatientCopingSkills">
                                        <h5 className="mb-3">Patient Coping Skills</h5>
                                        <p>23. What coping skills work well for you? What helps you manage your emotions in upsetting situations?</p>
                                        <textarea id="q23" className="form-control" name="23. What coping skills work well for you? What helps you manage your emotions in upsetting situations?" rows="4" cols="50"></textarea>
                                    </div>
                                    
                                    <div className="mb-4" id="SocialSupport">
                                        <h5 className="mb-3">Social Support</h5>
                                        <p>24. Who do you rely on, and if they are available, how can they assist you during this encounter?</p>
                                        <textarea id="q24" className="form-control" name="24. Who do you rely on, and if they are available, how can they assist you during this encounter?" rows="4" cols="50"></textarea>
                                    </div>
                                    
                                    <div className="mb-4" id="PatientStrengths">
                                        <h5 className="mb-3">Patient Strengths</h5>
                                        <p>25. What are your strengths and what is something about you or something you have done that you are proud of?</p>
                                        <textarea id="q25" className="form-control" name="25. What are your strengths and what is something about you or something you have done that you are proud of?" rows="4" cols="50"></textarea>
                                    </div>
                                
                                <button id="submitBtn" className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientForm