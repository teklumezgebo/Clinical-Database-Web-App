import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import PatientForm from './PatientForm';
import ClinicainForm from './ClinicianForm';
import NewPatient from './NewPatient';
import ClinicForm from './ClinicForm';
import Homepage from './Homepage';
import PatientList from './PatientList';
import Patient from './Patient';
import { useState, useEffect } from 'react';

function App() {
  
  const [patientList, setPatientList] = useState('')

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
      <br></br>
      <PatientForm/>
      </Route>
      <Route path="/patients">
      <NewPatient onListChange={setNewList}/>
      <br></br>
      <PatientList patientList={patientList}/>
      </Route>
      <Route path="/clinicians">
      <ClinicainForm/>
      </Route>
      <Route path="/clinics">
      <ClinicForm/>
      </Route>
    </div>
  );
}

export default App;
