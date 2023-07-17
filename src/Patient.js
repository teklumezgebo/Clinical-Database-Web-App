import React from "react";

function Patient({ id, firstName, lastName, hypertension, diabetes, bloodPressures, bloodSugars, onDelete, onClick }) {
    
    const bpList = bloodPressures.map(bloodPressure => <p key={bloodPressure.id}>{bloodPressure.blood_pressure}</p>)
    const bsList = bloodSugars.map(bloodSugar => <p key={bloodSugar.id}>{bloodSugar.blood_sugar} mg/dL</p>)
   
    return (
        <div>
            <h4 onClick={() => onClick(firstName, lastName, hypertension, diabetes)}>{firstName} {lastName}</h4>
            {hypertension ? <h5>Hypertensive</h5> : null}
            {diabetes ? <h5>Diabetic</h5> : null}
            {bpList.length > 0 ? <div><h6>Blood pressure history:</h6>{bpList}</div>: null}
            {bsList.length > 0 ? <div><h6>Blood sugar history:</h6>{bsList}</div> : null}
            <br></br>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Patient