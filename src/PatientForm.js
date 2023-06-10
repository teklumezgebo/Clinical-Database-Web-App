import React from "react";

function PatientForm() {
    return (
        <form>
            <input type="text" placeholder="Patient name..."></input><br></br>
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