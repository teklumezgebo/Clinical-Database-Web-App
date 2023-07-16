import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Patient from './Patient';
import Clinician from './Clinician'
import Clinic from './Clinic';
import ClinicList from './ClinicList';
import NewPatientForm from './NewPatientForm';
import NewClinicainForm from './NewClinicianForm';
import NewClinicForm from './NewClinicForm';
import PatientForm from './PatientForm';
import PatientSearch from './PatientSearch';
import { useState, useEffect } from 'react';

function App() {
  
  const [patientList, setPatientList] = useState([])
  const [clinicianList, setClinicianList] = useState([])
  const [clinicList, setClinicList] = useState([])
  const [update, setOnUpdate] = useState(false)

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
  }, [update])

  useEffect(() => {
    fetch('http://localhost:9292/clinicians')
    .then(res => res.json())
    .then(list => {
      const listOfClinicians = list.map(clinician => {
        return (
          <Clinician
          key={clinician.id}  
          name={clinician.name} 
          title={clinician.title}
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
          location={clinic.location}
          />
        )
      })
      setClinicList(listofClinics)
    })
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
      setPatientList(patientList => patientList.filter(patient => patient.props.id !== id))
    })
  }

  function patientUpdate() {
    setOnUpdate((update) => !update)
  }
  
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/">
      <Homepage/>
      </Route>
      <Route path="/patients">
      <NewPatientForm onPatientChange={addPatient} onPatientDelete={deletePatient} onUpdate={patientUpdate}/>
      <br></br>
      </Route>
      <Route path='/searchpatient'>
      <PatientSearch patientList={patientList} onPatientDelete={deletePatient} onListUpdate={patientUpdate}/>
      </Route>
      <Route path='/patientstats'>
      <PatientForm />
      </Route>
      <Route path="/clinicians">
      <NewClinicainForm onClinicianChange={addClinician} clinicianList={clinicianList}/>
      </Route>
      <Route path="/clinics">
      <NewClinicForm onClinicAddition={addClinic}/>
      <br></br>
      <ClinicList clinicList={clinicList}/>
      </Route>
    </div>
  );
}

export default App;