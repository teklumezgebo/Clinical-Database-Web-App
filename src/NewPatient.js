import React from "react";
import { useState } from "react";

function NewPatient() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hypertensive, setHypertensive] = useState('')
    const [diabetic, setDiabetic] = useState('')

    const patientObj = {
        first_name: firstName,
        last_name: lastName,
        hypertenstion: hypertensive,
        diabetes: diabetic
    }

    function handleNewPatient() {
        fetch('http://localhost:9292/patients', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientObj)
        })
        .then(res => res.json())
        .then(patient => {
            
        })
    }

    
    return (
        <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="checkbox" id="hypertenstion"></input>
            <label for="hypertention">Hypertenstion</label>
            <input type="checkbox" id="diabetes"></input>
            <label for="Diabetes">Diabetes</label>
            <input type="submit"></input>
        </form>
    )
}

export default NewPatient