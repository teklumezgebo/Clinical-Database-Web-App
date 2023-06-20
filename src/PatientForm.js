import React, { useState } from "react";

function PatientForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bloodSugar, setBloodSugar] = useState('')
    const [systolic, setSystolic] = useState(null)
    const [diastolic, setDiastolic] = useState(null)
    const [bpForm, setBpForm] = useState(false)
    const [bsForm, setBsForm] = useState(false)

    const patientForm = {
        first_name: firstName,
        last_name: lastName,
        blood_sugar: bloodSugar,
        systolic: systolic,
        diastolic: diastolic
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

    function onSystolicChange(event) {
        setSystolic(event.target.value)
    }

    function onDiastolicChange(event) {
        setDiastolic(event.target.value)
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

    function onPatientFormSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:9292/patientstats`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientForm)
        })
        .then(() => {
            setFirstName('')
            setLastName('')
            setSystolic('')
            setDiastolic('')
            setBloodSugar('')
        })
    }
    
    
    return (
        <form onSubmit={onPatientFormSubmit}>
            <input type="text" placeholder="First Name" onChange={onFirstNameChange} value={firstName}></input><br></br>
            <input type="text" placeholder="Last Name" onChange={onLastNameChange} value={lastName}></input><br></br>
            {bpForm ?  <div><input type="integer" onChange={onSystolicChange} placeholder="systolic (top number)" value={systolic}></input><br></br><input type="integer" onChange={onDiastolicChange} placeholder="diastolic (bottom number)" value={diastolic}></input></div> : null}
            {bsForm ? <div><input type="integer" onChange={onBloodSugarChange} value={bloodSugar}></input><br></br></div> : null}
            <div className="checkbox-container">
            <input type="checkbox" id="bp" onChange={onBpFormChange}></input>
            <label htmlFor="bp">Blood Pressure</label><br></br>
            <input type="checkbox" id="bs" onChange={onBsFormChange}></input>
            <label htmlFor="bs">Blood Sugar</label><br></br>
            </div>
            <input type="submit"></input>
        </form>
    )
}

export default PatientForm