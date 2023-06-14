import React from "react";

function Cliniain({ id, name, title, clinicId }) {
    return(
        <div>
            <h4>{name}, {title}  {clinicId}</h4>
        </div>
    )
}

export default Cliniain