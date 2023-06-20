import React, { useEffect, useState } from "react";
import SearchedPatient from "./SearchedPatient";

function PatientSearchForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [displayedPatient, setDisplayedPatient] = useState('')
    const [bloodPressures, setBloodPressures] = useState('')
    const [bloodSugars, setBloodSugars] = useState('')
    const [pageLoaded, setPageLoaded] = useState(false)
  
    function onFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }

    function getBloodPressures() {
        fetch(`http://localhost:9292/patientbp/${firstName}/${lastName}`)
        .then(res => res.json())
        .then(listofBloodPressures => {
            const bpList = listofBloodPressures.map(bloodPressure => {
                return (
                    <p key={bloodPressure.id}>{bloodPressure.sysolic}/{bloodPressure.diastolic}</p>
                )
            })
            setBloodPressures(bpList)
        })
    }

    function getBloodSugars() {
        fetch(`http://localhost:9292/patientbs/${firstName}/${lastName}`)
        .then(res => res.json())
        .then(listofBloodSugars => {
            const bsList = listofBloodSugars.map(bloodSugar => {
                return (
                    <p key={bloodSugar.id}>{bloodSugar.blood_sugar} mg/dL</p>
                )
            })
            setBloodSugars(bsList)
        })
    }



    function onSearchFormSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/patients/${firstName}/${lastName}`)
        .then(res => res.json())
        .then(patient => {
            setFirstName('')
            setLastName('')
            const displayedPatient = <SearchedPatient id={patient.id} firstName={patient.first_name} lastName={patient.last_name} bloodPressures={bloodPressures} bloodSugars={bloodSugars}/>
            setDisplayedPatient(displayedPatient)
        })
    }

    return (
    <div>
        <form onSubmit={onSearchFormSubmit}>
        <input type="text" value={firstName} onChange={onFirstNameChange} placeholder="First Name"></input>
        <input type="text" value={lastName} onChange={onLastNameChange} placeholder="Last Name"></input>
        <input type="submit"></input>
        </form>
        <br></br>
        {displayedPatient}
    </div>
)
}

export default PatientSearchForm