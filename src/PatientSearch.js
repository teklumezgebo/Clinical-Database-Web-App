import React, { useState } from "react";
import Patient from "./Patient";

function PatientSearch({ patientList, onPatientDelete, onPatientUpdate }) {

    const [searchedPatient, setSearchedPatient] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hypertension, setHypertensive] = useState('')
    const [diabetes, setDiabetic] = useState('')

    function onSearchedNameChange(event) {
        setSearchedPatient(event.target.value)
    }

    const filteredList = patientList.filter(patient => 
        patient.first_name.toLowerCase().includes(searchedPatient.toLowerCase()) ||
        patient.last_name.toLowerCase().includes(searchedPatient.toLowerCase())
    )

    const patientObj = {
        first_name: firstName,
        last_name: lastName,
        hypertension: hypertension,
        diabetes: diabetes
    }

    function handleFirstName(event){
        setFirstName(event.target.value)
    }

    function handleLastName(event) {
        setLastName(event.target.value)
    }

    function handleHypertension(event) {
        if (event.target.checked === true) {
            setHypertensive(true)
        } else if (event.target.checked === false) {
            setHypertensive(false)
        }
    }

    function handleDiabetic(event) {
        if (event.target.checked === true) {
            setDiabetic(true)
        } else if (event.target.checked === false) {
            setDiabetic(false)
        }
    }

    function onPatientClick(firstName, lastName, hypertension, diabetes) {
        setFirstName(firstName)
        setLastName(lastName)
        setHypertensive(hypertension)
        setDiabetic(diabetes)

        if (hypertension === true) {
            document.getElementById('hypertension').checked = true
        } else {
            document.getElementById('hypertension').checked = false
        }

        if (diabetes === true) {
            document.getElementById('diabetes').checked = true
        } else {
            document.getElementById('diabetes').checked = false
        }
    }

    function updateDemographics(patient) {
        const updatedPatient = patientList.find(p => p.id === patient.id)
        const patientIndex = patientList.findIndex(p => p.id === updatedPatient.id)

        if (hypertension === true) {
            updatedPatient.hypertension = true
        } else {
            updatedPatient.hypertension = false
        }

        if (diabetes === true) {
            updatedPatient.diabetes = true
        } else {
            updatedPatient.diabetes = false
        }

        if (patientIndex !== -1) {
            patientList[patientIndex] = updatedPatient
            onPatientUpdate(patientList)
        }
    }

    function clearForm() {
        setFirstName("")
        setLastName("")
        setHypertensive(false)
        setDiabetic(false)
        document.getElementById('hypertension').checked = false
        document.getElementById('diabetes').checked = false
    }

    function handleUpdatePatientSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/patients', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientObj)
        })
        .then(res => res.json())
        .then(patient => {
            updateDemographics(patient)
            clearForm()
        })
    }

    return (
    <div>
        <input type="text" placeholder="Search" onChange={onSearchedNameChange} value={searchedPatient}></input>
        <br></br>
        <br></br>
        <p>Click the patient to update their demographics!</p>
        <br></br>
        <form onSubmit={handleUpdatePatientSubmit}>
            <input type="text" placeholder="First Name" onChange={handleFirstName} value={firstName}></input>
            <input type="text" placeholder="Last Name" onChange={handleLastName} value={lastName}></input>
            <div className="checkbox-container">
            <input type="checkbox" id="hypertension" onChange={handleHypertension}value={hypertension}></input>
            <label htmlFor="hypertension">Hypertensive</label>
            <input type="checkbox" id="diabetes" onChange={handleDiabetic} value={diabetes}></input>
            <label htmlFor="diabetes">Diabetic</label>
            </div>
            <br></br>
            <input type="submit" value="Update"></input>
        </form>
        <br></br>
        <div className="container-div">
            {filteredList.map(patient => (
            <Patient key={patient.id} id={patient.id} firstName={patient.first_name} lastName={patient.last_name} hypertension={patient.hypertension} diabetes={patient.diabetes} bloodPressures={patient.blood_pressures} bloodSugars={patient.blood_sugars} onDelete={onPatientDelete} onClick={onPatientClick}/>
            ))}
        </div>
    </div>
    )
}

export default PatientSearch