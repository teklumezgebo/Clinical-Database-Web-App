import React from "react";

function ClinicainForm() {
    return (
        <form>
            <input type="text" placeholder="Name.."></input><br></br>
            <input type="text" placeholder="Clinic.."></input><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">MD</label><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">DO</label><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">PA</label><br></br>
            <input type="radio" id="selector"></input>
            <label for="selector">CRNP</label><br></br>
            <input type="submit"></input>
        </form>
    )
}

export default ClinicainForm