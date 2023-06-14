import React, { useState } from "react";

function PatientForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bloodSugar, setBloodSugar] = useState('')
    const [systolic, setSystolic] = useState('')
    const [diastolic, setDiastolic] = useState('')
    const [bpForm, setBpForm] = useState(false)
    const [bsForm, setBsForm] = useState(false)

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

    const patientForm = {
        first_name: firstName,
        last_name: lastName,
        blood_sugar: bloodSugar,
        systolic: systolic,
        diastolic: diastolic
    }

    // function onPatientFormSubmit(){
    //     fetch('')
    // }
    
    
    return (
        <form>
            <input type="text" placeholder="First Name" onChange={onFirstNameChange}></input><br></br>
            <input type="text" placeholder="Last Name" onChange={onLastNameChange}></input><br></br>
            {bpForm ?  <div><input type="integer" onChange={onSystolicChange} placeholder="systolic (top number)"></input><br></br><input type="integer" onChange={onDiastolicChange} placeholder="diastolic (bottom number)"></input></div> : null}
            {bsForm ? <div><input type="integer" onChange={onBloodSugarChange}></input><br></br></div> : null}
            <input type="checkbox" id="bp" onChange={onBpFormChange}></input>
            <label for="bpr">Blood Pressure</label><br></br>
            <input type="checkbox" id="bs" onChange={onBsFormChange}></input>
            <label for="bs">Blood Sugar</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default PatientForm