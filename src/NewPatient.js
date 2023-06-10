import React from "react";

function NewPatient() {
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