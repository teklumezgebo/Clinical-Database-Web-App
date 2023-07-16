import React, { useState } from "react";
import Patient from "./Patient";

function PatientSearch({ patientList, onPatientDelete, onListUpdate }) {

    const [searchedPatient, setSearchedPatient] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hypertension, setHypertensive] = useState('')
    const [diabetes, setDiabetic] = useState('')

    function onSearchedNameChange(event) {
        setSearchedPatient(event.target.value)
    }

    const filteredList = patientList.filter(patient => 
        patient.props.firstName.toLowerCase().includes(searchedPatient.toLowerCase()) ||
        patient.props.lastName.toLowerCase().includes(searchedPatient.toLowerCase())
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
        .then(() => {
            setFirstName("")
            setLastName("")
            setHypertensive(false)
            setDiabetic(false)
            document.getElementById('hypertension').checked = false
            document.getElementById('diabetes').checked = false
            onListUpdate()
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
            <Patient key={patient.props.id} id={patient.props.id} firstName={patient.props.firstName} lastName={patient.props.lastName} hypertension={patient.props.hypertension} diabetes={patient.props.diabetes} onDelete={onPatientDelete} onClick={onPatientClick}/>
            ))}
        </div>
    </div>
    )
}

export default PatientSearch