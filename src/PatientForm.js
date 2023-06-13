import React, { useState } from "react";

function PatientForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [homeValue, setHomeValue] = useState('')
    const [bloodPressure, setBloodPressure] = useState(false)
    const [bloodSugar, setBloodSugar] = useState(false)

    function onFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }

    function onHomeValueChange(event) {
        setHomeValue(event.target.value)
    }

    function onBloodPressureChange(event) {
        if (event.target.checked === true) {
            setBloodPressure(true)
        } else if (event.target.checked === false) {
            setBloodPressure(false)
        }
    }

    function onBloodSugarChange(event) {
        if (event.target.checked === true) {
            setBloodSugar(true)
        } else if (event.target.checked === false) {
            setBloodSugar(false)
        }
    }

    const patientForm = {
        firstName: firstName,
        lastName: lastName,
        homeValue: homeValue,
        bloodPressure: bloodPressure,
        bloodSugar: bloodSugar
    }

    function onPatientFormSubmit(){

    }
    
    
    return (
        <form>
            <input type="text" placeholder="First Name" onChange={onFirstNameChange}></input><br></br>
            <input type="text" placeholder="Last Name" onChange={onLastNameChange}></input><br></br>
            <input type="text" placeholder="At home reading.." onChange={onHomeValueChange}></input><br></br>
            <input type="radio" id="bp" onChange={onBloodPressureChange}></input>
            <label for="bpr">Blood Pressure</label><br></br>
            <input type="radio" id="bs" onChange={onBloodSugarChange}></input>
            <label for="bs">Blood Sugar</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default PatientForm