import React from "react";

function Cliniain({ id, name, title, clinicId }) {
    return(
        <div>
            <h4>{name}</h4>
            <h4>{title}</h4>
            <p>{clinicId}</p>
        </div>
    )
}

export default Cliniain