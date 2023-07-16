import React, { useState } from "react";
import Clinician from './Clinician'

function NewClinicainhtmlForForm({ onClinicianChange, clinicianList }) {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')

    const clinicianObj = {
        name: name,
        title: title
    }

    function onNameChange(event) {
        setName(event.target.value)
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
            const newClinician = <Clinician key={clinician.id} name={clinician.name} title={clinician.title}/>
            onClinicianChange(newClinician)
            setName('')
            document.getElementById('md').checked = false
            document.getElementById('do').checked = false
            document.getElementById('pa').checked = false
            document.getElementById('crnp').checked = false
        })
    }
    
    return (
        <div>
            <form onSubmit={onClinicianFormSubmit}>
                <div className="checkbox-container">
                <input type="text" placeholder="Name.." onChange={onNameChange} value={name}></input>
                <br></br>
                <br></br>
                <input type="checkbox" id="md" onChange={onTitleChange} value="MD"></input>
                <label htmlFor="md">MD</label><br></br>
                <input type="checkbox" id="do" onChange={onTitleChange} value="DO"></input>
                <label htmlFor="do">DO</label><br></br>
                <input type="checkbox" id="pa" onChange={onTitleChange} value="PA"></input>
                <label htmlFor="pa">PA</label><br></br>
                <input type="checkbox" id="crnp" onChange={onTitleChange} value="CRNP"></input>
                <label htmlFor="crnp">CRNP</label><br></br>
                </div>
                <input type="submit"></input>
            </form>
            <br></br>
            {clinicianList}
        </div>
    )
}

export default NewClinicainhtmlForForm