import React from "react";

function Patient({ id, firstName, lastName, hypertension, diabetes, bloodPressures, bloodSugars, onDelete, onClick }) {
    
    return (
        <div>
            <h4 onClick={() => onClick(firstName, lastName, hypertension, diabetes)}>{firstName} {lastName}</h4>
            {hypertension ? <h5>Hypertensive</h5> : null}
            {diabetes ? <h5>Diabetic</h5> : null}
            {bloodPressures === undefined ? null :<div><h6>Blood pressure history:</h6>{bloodPressures.map(bloodPressures => <p key={bloodPressures.id}>{bloodPressures.blood_pressure}</p>)}</div> }
            {bloodSugars === undefined ? null : <div><h6>Blood sugar history:</h6>{bloodSugars.map(bloodSugar => <p key={bloodSugar.id}>{bloodSugar.blood_sugar} mg/dL</p>)}</div>}
            <br></br>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Patient