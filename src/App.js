import './App.css';
import PatientForm from './PatientForm';
import ClinicainForm from './ClinicianForm';
import NewPatient from './NewPatient';
import ClinicForm from './ClinicForm';

function App() {
  return (
    <div className="App">
      <PatientForm/>
      <br></br>
      <NewPatient/>
      <br></br>
      <ClinicainForm/>
      <br></br>
      <ClinicForm/>
    </div>
  );
}

export default App;
