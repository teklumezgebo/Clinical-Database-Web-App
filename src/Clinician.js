import React from "react";

function Clinician({ name, title }) {
    return(
        <div>
            <h4>{name}, {title}</h4>
        </div>
    )
}

export default Clinician