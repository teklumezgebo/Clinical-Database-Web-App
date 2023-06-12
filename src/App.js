import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import PatientForm from './PatientForm';
import ClinicainForm from './ClinicianForm';
import NewPatient from './NewPatient';
import ClinicForm from './ClinicForm';
import Homepage from './Homepage';
import PatientList from './PatientList';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
      <Homepage/>
      </Route>
      <Route path="/patients">
      <NewPatient/>
      <br></br>
      <PatientForm/>
      <PatientList />
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
