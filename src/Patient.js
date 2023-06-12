import React from "react";

function Patient({ firstName, lastName, hypertension, diabetes }) {
    return (
        <div>
            <h4>{firstName + lastName}</h4>
            <p>{hypertension ? "Hypertensive" : null}</p>
            <p>{diabetes ? "Diabetic" : null}</p>
        </div>
    )
}

export default Patient