import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import PatientForm from './PatientForm';
import NewPatientForm from './NewPatientForm';
import NewClinicainForm from './NewClinicianForm';
import NewClinicForm from './NewClinicForm';
import Homepage from './Homepage';
import PatientList from './PatientList';
import ClinicianList from './ClinicianList';
import ClinicList from './ClinicList';
import Patient from './Patient';
import Cliniain from './Clinician';
import Clinic from './Clinic';
import { useState, useEffect } from 'react';

function App() {
  
  const [patientList, setPatientList] = useState('')
  const [clinicianList, setClinicianList] = useState('')
  const [clinicList, setClinicList] = useState('')

  useEffect(() => {
    fetch('http://localhost:9292/patients')
    .then(res => res.json())
    .then(list => {
      const listOfPatients = list.map(patient => {
          return (
            <Patient 
            key={patient.id} 
            id={patient.id} 
            firstName={patient.first_name} 
            lastName={patient.last_name} 
            hypertension={patient.hypertension} 
            diabetes={patient.diabetes} 
            onDelete={deletePatient}
            />
          )
      })
      setPatientList(listOfPatients)
  })
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/clinicians')
    .then(res => res.json())
    .then(list => {
      const listOfClinicians = list.map(clinician => {
        return (
          <Cliniain 
          key={clinician.id} 
          id={clinician.id} 
          name={clinician.name} 
          title={clinician.title} 
          clinicId={clinician.clinic_id}
          />
        )
      })
      setClinicianList(listOfClinicians)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/clinics')
    .then(res => res.json())
    .then(list => {
      const listofClinics = list.map(clinic => {
        return (
          <Clinic 
          key={clinic.id} 
          id={clinic.id} 
          name={clinic.name} 
          locaiton={clinic.location} 
          clinicians={clinic.clinicians}
          />
        )
      })
      setClinicList(listofClinics)
    })
  }, [])

  function setNewList(newList) {
    setPatientList(() => patientList.unshift(newList))
  }

  function deletePatient(id) {
    fetch(`http://localhost:9292/patients/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        const filteredList = patientList.filter(patient => patient.props.id !== id)
        setPatientList(filteredList)
    })
  }
  
  return (
    <div className="App">
      <Route exact path="/">
      <Homepage/>
      </Route>
      <Route path="/patients">
      <NewPatientForm onListChange={setNewList}/>
      <br></br>
      <PatientForm/>
      <br></br>
      <PatientList patientList={patientList}/>
      </Route>
      <Route path="/clinicians">
      <NewClinicainForm/>
      <ClinicianList clinicianList={clinicianList}/>
      </Route>
      <Route path="/clinics">
      <NewClinicForm/>
      <br></br>
      <ClinicList clinicList={clinicList}/>
      </Route>
    </div>
  );
}

export default App;