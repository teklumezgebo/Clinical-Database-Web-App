import React, { useState } from "react";

function PatientForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bloodSugar, setBloodSugar] = useState('')
    const [bloodPressure, setBloodPressure] = useState('')
    const [bpForm, setBpForm] = useState(false)
    const [bsForm, setBsForm] = useState(false)
    const [patient, setPatient] = useState('')

    const patientForm = {
        firstName: firstName,
        lastName: lastName,
        bloodSugar: bloodSugar,
        bloodPressure: bloodPressure
    }

    function onFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }

    function onBloodSugarChange(event) {
        setBloodSugar(event.target.value)
    }

    function onBloodPressureChange(event) {
        setBloodPressure(event.target.value)
    }

    function onBpFormChange(event) {
        if (event.target.checked === true) {
            setBpForm(true)
        } else if (event.target.checked === false) {
            setBpForm(false)
        }
    }

    function onBsFormChange(event) {
        if (event.target.checked === true) {
            setBsForm(true)
        } else if (event.target.checked === false) {
            setBsForm(false)
        }
    }

    function clearForm() {
        setFirstName('')
        setLastName('')
        setBloodPressure('')
        setBloodSugar('')
        setBpForm(false)
        setBsForm(false)
        document.getElementById('bp').checked = false
        document.getElementById('bs').checked = false
    }

    function onPatientFormSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:9292/patientstats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientForm)
        })
        .then(res => res.json())
        .then(vitals => {
            const type = bsForm ? vitals.blood_sugars.map(vital => <p key={vital.id}>{vital.blood_sugar}</p>) : vitals.blood_pressures.map(vital => <p key={vital.id}>{vital.blood_pressure}</p>)
            const patientInfo = <div>
                <h2>{firstName}'s Recent {bsForm ? "Blood Sugar" : "Blood Pressure"} Readings</h2>
                {type}
            </div>
            setPatient(patientInfo)
            clearForm()
        })
    }
    
    return (
        <div>
            <form onSubmit={onPatientFormSubmit}>
                <input type="text" placeholder="First Name" onChange={onFirstNameChange} value={firstName}></input>
                <input type="text" placeholder="Last Name" onChange={onLastNameChange} value={lastName}></input><br></br>
                {bpForm ? <input type="integer" onChange={onBloodPressureChange} placeholder="bp reading.." value={bloodPressure}></input> : null}
                {bsForm ? <div><input type="integer" onChange={onBloodSugarChange} placeholder="glucometer reading" value={bloodSugar}></input><br></br></div> : null}
                <div className="checkbox-container">
                <input type="checkbox" id="bp" onChange={onBpFormChange}></input>
                <label htmlFor="bp">Blood Pressure</label><br></br>
                <input type="checkbox" id="bs" onChange={onBsFormChange}></input>
                <label htmlFor="bs">Blood Sugar</label><br></br>
                </div>
                <input type="submit"></input>
            </form>
            <br></br>
            {patient}
        </div>
    )
}

export default PatientForm