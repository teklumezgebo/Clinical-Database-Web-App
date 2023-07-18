import React, { useState } from "react";

function NewClinicForm({ onClinicAddition }) {
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
        <form onSubmit={onClincFormSubmit}>
            <input type="text" placeholder="Clinic name.." onChange={onNameChange} value={name}></input>
            <input type="text" placeholder="Clinic location.." onChange={onLocationChange} value={location}></input>
            <input type="submit"></input>
        </form>
    )
}

export default NewClinicForm