import React from "react";

function Clinician({ id, name, title, clinicId }) {
    return(
        <div>
            <h4>{name}, {title}  {clinicId}</h4>
        </div>
    )
}

export default Clinician