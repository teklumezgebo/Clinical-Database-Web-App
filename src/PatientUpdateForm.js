import React from "react";

function PatientUpdateForm() {
    return (
        <form id="updateForm">
            <input type="text" placeholder="First Name" id="firstName"></input>
            <input type="text" placeholder="Last Name" id="lastName"></input>
            <br></br>
            <input type="checkbox" id="hypertension"></input>
            <label htmlFor="hypertension">Hypertenstion</label>
            <input type="checkbox" id="diabetes"></input>
            <label htmlFor="diabetes">Diabetes</label>
            <br></br>
            <input type="submit"  value="Update"></input>
        </form>
    )
}

export default PatientUpdateForm