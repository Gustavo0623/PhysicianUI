import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate}  from 'react-router-dom'
import Patient from './Routes/Patient';
import PatientList from './Routes/PatientList';
import EditPage from './Routes/EditPatient';
import NewPatient from './Routes/NewPatient';
import ComLogin from './Routes/ComLogin';
import { Login } from './Routes/Login';
import ComAccCreate from './Routes/ComAccCreate'
import { NewAccount } from './Routes/NewAccount';
import NewResource from './Routes/NewResource'
import ResourceList from './Routes/ResourceList'
import UploadResources from './Routes/UploadResources';
import StandarizedAssessments from './Routes/StandarizedAssessments';
import TraumaInformedTools from './Routes/TraumaInformedTools';

function App() {

  // users array (Temporary Placeholder Values)
  // for each value in users array, value[0] = username, & value[1] = array containing the details of each user in the order of home, meals, and heart health or heart rate where 0 = good / 1 = okay / 2 = needs improvement
  // depending on (Actual) data the values will be adjusted and gathered via fetch request to server.
  // let users = [['Lois Lane', [0, 0, 2, 1, 0, 2, 1, 0]], ['Mary Jane', [1 , 2, 0, 2, 2, 1, 2, 2]], ['Padme Amalda', [0, 2, 1, 0, 2, 1, 0, 2]], ['Christine Chapel', [2, 1, 0, 1, 1, 1, 1, 1]]]
  let [currentUser, setCurrentUser] = useState(null)
  let [edit, setEdit] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO: Add Landing Page Route */}
          <Route path="/" element={ <Navigate to="/login"/> } />
          <Route exact path='/patients' element={ <PatientList setCurrentUser={setCurrentUser} setEdit={setEdit}/> }></Route>
          <Route exact path='/patients/:patientMRN' element={ <Patient currentUser={currentUser} edit={edit} setEdit={setEdit}/> }></Route>
          <Route exact path='/editPatient' element={ <EditPage currentUser={currentUser} setEdit={setEdit}/> }></Route>
          <Route exact path='/newPatient' element={ <NewPatient/> }></Route>
          <Route exact path='/comLogin' element={ <ComLogin/> }></Route>
          <Route exact path='/comAccCreate' element={ <ComAccCreate/> }></Route>
          <Route exact path='/newResource' element={ <NewResource/> }></Route>
          <Route exact path='/resourceList' element={ <ResourceList/> }></Route>
          <Route exact path='/login' element={ <Login/> }></Route>
          <Route exact path='/signup' element={ <NewAccount/> }></Route>
          <Route exact path='/uploadresources' element={ <UploadResources/> }></Route>
          <Route exact path='/standarizedassessments' element={ <StandarizedAssessments/> }></Route>
          <Route exact path='/traumainformedtools' element={ <TraumaInformedTools/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
