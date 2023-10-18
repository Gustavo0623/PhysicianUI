import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Patient from './Routes/Patient';
import PatientList from './Routes/PatientList';

function App() {

  // users array (Temporary Placeholder Values)
  // for each value in users array, value[0] = username, & value[1] = array containing the details of each user in the order of home, meals, and heart health or heart rate where 0 = good / 1 = okay / 2 = needs improvement
  // depending on (Actual) data the values will be adjusted and gathered via fetch request to server.
  // let users = [['Lois Lane', [0, 0, 2, 1, 0, 2, 1, 0]], ['Mary Jane', [1 , 2, 0, 2, 2, 1, 2, 2]], ['Padme Amalda', [0, 2, 1, 0, 2, 1, 0, 2]], ['Christine Chapel', [2, 1, 0, 1, 1, 1, 1, 1]]]
  let [currentUser, setCurrentUser] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO: Add Landing Page Route */}
          <Route exact path='/patients' element={ <PatientList currentUser={currentUser} setCurrentUser={setCurrentUser}/> }></Route>
          <Route exact path='/patients/:patientMRN' element={ <Patient currentUser={currentUser}/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
