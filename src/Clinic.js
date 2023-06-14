import React from "react";

function Clinic({ id, name, location, clinicians }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{location}</p>
            <h5>{clinicians} clinicians at this location.</h5>
        </div>
    )
}