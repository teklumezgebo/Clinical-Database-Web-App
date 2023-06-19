import React, { useState } from "react";
import Patient from "./Patient";

function PatientSearchForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [displayedPatient, setDisplayedPatient] = useState('')

    function onFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }

    function onSearchFormSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/patients/${firstName}/${lastName}`)
        .then(res => res.json())
        .then(patient => {
            const displayedPatient = <Patient firstName={patient.first_name} lastName={patient.last_name}/>
            setDisplayedPatient(displayedPatient)
            setFirstName('')
            setLastName('')
        })
    }


    return (
    <div>
        <form onSubmit={onSearchFormSubmit}>
            <input type="textbox" value={firstName} onChange={onFirstNameChange}></input>
            <input type="textbox" value={lastName} onChange={onLastNameChange}></input>
            <input type="submit"></input>
        </form>
        <br></br>
        {displayedPatient}
    </div>
)
}

export default PatientSearchForm