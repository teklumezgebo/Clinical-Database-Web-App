import React from "react";

function Clinic({ name, location }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{location}</p>
        </div>
    )
}

export default Clinic