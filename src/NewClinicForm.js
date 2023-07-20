import React, { useState } from "react";
import Clinic from "./Clinic";

function NewClinicForm({ onClinicAddition, clinicList }) {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    const clinicObj = {
        name: name,
        location: location
    }

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onLocationChange(event) {
        setLocation(event.target.value)
    }

    function onClincFormSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:9292/clinics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clinicObj)
        })
        .then(res => res.json())
        .then(clinic => {
            onClinicAddition(clinic)
            setName('')
            setLocation('')
        })
    }
    
    return(
        <div>
        <form onSubmit={onClincFormSubmit}>
            <input type="text" placeholder="Clinic name.." onChange={onNameChange} value={name}></input>
            <input type="text" placeholder="Clinic location.." onChange={onLocationChange} value={location}></input>
            <input type="submit"></input>
        </form>
        <br></br>
        {clinicList.map(clinic => {
            return (
                <Clinic 
                key={clinic.id} 
                id={clinic.id} 
                name={clinic.name} 
                location={clinic.location}
          />
            )
        })}
        </div>
    )
}

export default NewClinicForm