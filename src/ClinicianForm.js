import React, { useState } from "react";

function ClinicainForm() {
    const [name, setName] = useState('')
    const [clinic, setClinic] = useState('')
    const [title, setTitle] = useState('')

    const clinicianObj = {
        name: name,
        title: title,
        clinic: clinic
    }

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onClinicChange(event) {
        setClinic(event.target.value)
    }

    function onTitleChange(event) {
        if (event.target.checked === true) {
            setTitle(event.target.value)
        } else {
            setTitle('')
        }
    }

    function onClinicianFormSubmit() {
        fetch('http://localhost:9292/clinicians', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: clinicianObj
        })
        .then(res => res.json())
        .then(clinician => {

        })
    }
    
    return (
        <form onSubmit={onClinicianFormSubmit}>
            <input type="text" placeholder="Name.." onChange={onNameChange}></input><br></br>
            <input type="text" placeholder="Clinic.." onChange={onClinicChange}></input><br></br>
            <input type="checkbox" id="md" onChange={onTitleChange}></input>
            <label for="md">MD</label><br></br>
            <input type="checkbox" id="do" onChange={onTitleChange}></input>
            <label for="do">DO</label><br></br>
            <input type="checkbox" id="pa" onChange={onTitleChange}></input>
            <label for="pa">PA</label><br></br>
            <input type="checkbox" id="crnp" onChange={onTitleChange}></input>
            <label for="crnp">CRNP</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default ClinicainForm