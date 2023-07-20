import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Homepage';
import Navbar from './Navbar';
import NewPatientForm from './NewPatientForm';
import NewClinicainForm from './NewClinicianForm';
import NewClinicForm from './NewClinicForm';
import ReadingsForm from './ReadingsForm';
import PatientSearch from './PatientSearch';
import { useState, useEffect } from 'react';

function App() {
  
  const [patientList, setPatientList] = useState([])
  const [clinicianList, setClinicianList] = useState([])
  const [clinicList, setClinicList] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/patients')
    .then(res => res.json())
    .then(list => setPatientList(list))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/clinicians')
    .then(res => res.json())
    .then(list => setClinicianList(list))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/clinics')
    .then(res => res.json())
    .then(list => setClinicList(list))
  }, [])

  function addPatient(patient) {
    setPatientList([...patientList, patient])
  }

  function addClinician(clinician) {
    setClinicianList([ ...clinicianList, clinician])
  }

  function addClinic(clinic) {
    setClinicList([...clinicList, clinic])
  }

  function deletePatient(id) {
    fetch(`http://localhost:9292/patients/${id}`, {
        method: "DELETE"
    })
    .then(() => {
      setPatientList(patientList => patientList.filter(patient => patient.id !== id))
    })
  }
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
      <Homepage />
      </Route>
      <Route path="/patients">
      <NewPatientForm onPatientChange={addPatient} />
      <br></br>
      </Route>
      <Route path='/searchpatient'>
      <PatientSearch patientList={patientList} onPatientDelete={deletePatient} onPatientUpdate={setPatientList}/>
      </Route>
      <Route path='/patientvitals'>
      <ReadingsForm patientList={patientList} onReadingUpdate={setPatientList}/>
      </Route>
      <Route path="/clinicians">
      <NewClinicainForm onClinicianChange={addClinician} clinicianList={clinicianList}/>
      </Route>
      <Route path="/clinics">
      <NewClinicForm onClinicAddition={addClinic} clinicList={clinicList} />
      </Route>
    </div>
  );
}

export default App;