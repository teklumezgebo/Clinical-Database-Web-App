import React, { useState } from "react";

function PatientForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [bloodPressure, setBloodPressure] = useState('')
    const [bloodSugar, setBloodSugar] = useState('')
    
    
    return (
        <form>
            <input type="text" placeholder="First Name"></input><br></br>
            <input type="text" placeholder="Last Name"></input><br></br>
            <input type="text" placeholder="At home reading.."></input><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">Blood Pressure</label><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">Blood Sugar</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default PatientForm