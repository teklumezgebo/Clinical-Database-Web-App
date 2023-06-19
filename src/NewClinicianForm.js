import React, { useState } from "react";
import Clinician from './Clinician'

function NewClinicainForm({ onClinicianChange }) {
    const [name, setName] = useState('')
    const [clinic, setClinic] = useState('')
    const [title, setTitle] = useState('')

    const clinicianObj = {
        name: name,
        title: title,
        clinic_id: clinic
    }

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onClinicNameChange(event) {
        setClinic(event.target.value)
    }

    function onTitleChange(event) {
        if (event.target.checked === true) {
            setTitle(event.target.value)
        } else {
            setTitle('')
        }
    }

    function onClinicianFormSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/clinicians', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clinicianObj)
        })
        .then(res => res.json())
        .then(clinician => {
            const newClinician = <Clinician key={clinician.id} name={clinician.name} title={clinician.title} clinicId={clinician.clinic_id}/>
            onClinicianChange(newClinician)
        })
    }
    
    return (
        <form onSubmit={onClinicianFormSubmit}>
            <input type="text" placeholder="Name.." onChange={onNameChange}></input><br></br>
            <input type="text" placeholder="Clinic.." onChange={onClinicNameChange}></input><br></br>
            <input type="checkbox" id="md" onChange={onTitleChange} value="MD"></input>
            <label for="md">MD</label><br></br>
            <input type="checkbox" id="do" onChange={onTitleChange} value="DO"></input>
            <label for="do">DO</label><br></br>
            <input type="checkbox" id="pa" onChange={onTitleChange} value="PA"></input>
            <label for="pa">PA</label><br></br>
            <input type="checkbox" id="crnp" onChange={onTitleChange} value="CRNP"></input>
            <label for="crnp">CRNP</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default NewClinicainForm