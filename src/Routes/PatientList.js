import React, {useState, useEffect} from 'react'
import Icons from '../components/Icons'
import Loading from '../components/Loading';
import {Outlet, Link} from 'react-router-dom'
import Modify from '../components/Modify';
import Nav from '../components/PhysNav';

// TODO: 

function PatientList ({setCurrentUser, setEdit}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [patientData, setPatientData] = useState(null);
    
    // fetch patient data
    async function fetchData() {
        try {
            const url = 'http://128.101.131.217:2270/allPatientData' 
            const headers = new Headers();
            headers.append('Content-Type', 'application/json'); // You can add other headers if needed
        
            const requestOptions = {
                method: 'GET',
                headers: headers,
            };
        
            const response = await fetch(url, requestOptions);
        
            if (response.ok) {
                const data = await response.json();
                setPatientData(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    

    useEffect(() => {
        fetchData(); // Fetch data when the component is mounted
    }, []);

    useEffect(() => {
        setEdit(false)
    }, [setEdit])


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // TODO : edit loading screen while waiting for patient information
    if (!patientData) {
        return (
            
            
        <div id='loadingBox'>
            <Loading/>
        </div>
        )
    }
    return (
        <div id="bodyBracket" className='page'>
            <Nav/>
            <div className='mainView'>
                <h1 id="patientsText">Patients</h1>
                <div id="patientListHeader">
                    <div id="result">
                        <p id="numResults">{patientData.length} results</p>
                    </div>
                    <div id='filterBox'>
                        <div id='select'>
                            <span id='dropdownArrow'></span>
                            <select className={selectedOption === '' ? 'filter filterSelect' : 'filterSelect'} value={selectedOption} onChange={handleOptionChange}>
                                <option value="" disabled hidden>
                                Filter
                                </option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        {/* TODO: implement /newPatient route */}
                        <a href={/*http://128.101.131.217:2270/questionnaire/index.html'*/ './newPatient'} id="newButton">New</a>
                    </div>
                </div>

                <div id='userBox'>
                    <div className='titleBox'>

                        <div id="nameText">Name</div>
                        <div id="MRNText">MRN</div> 
                        <div id="riskText">Risks</div>
                    </div>
                {/* User container with username and other details */}
                {patientData.map((user, index) => (
                    <div className='userDetails' key={index} > 
                        
                        <Link className='userFlexBlock' onClick={() => {
                            setCurrentUser(user);
                            }} 
                            to={`./${user.MRN}`}
                        >
                            <p className='userName'>{user.patientName ? user.patientName: null}</p>
                            <p className='userMRN'>{user.MRN ? user.MRN : 'N/A'}</p>
                            <Icons iconDetails={user.riskFactors ? user.riskFactors : null}/>
                        </Link>

                        <Modify currentUser={user} setUser={setCurrentUser} setEdit={setEdit} fetchData={fetchData} />
                    </div>
                ))}
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default PatientList