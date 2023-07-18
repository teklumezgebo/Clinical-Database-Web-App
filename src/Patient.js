import React from "react";

function Patient({ id, firstName, lastName, hypertension, diabetes, bloodPressures, bloodSugars, onDelete, onClick }) {

    function bpList() {
       if (bloodPressures.length > 0){
        return(
            <h6>Blood pressure history:{bloodPressures.map(bloodPressures => <p key={bloodPressures.id}>{bloodPressures.blood_pressure}</p>)}</h6>
        )
       } else
       return(
        null
       )
    }

    function bsList() {
        if (bloodSugars.length > 0){
         return(
            <h6>Blood sugar history:{bloodSugars.map(bloodSugar => <p key={bloodSugar.id}>{bloodSugar.blood_sugar} mg/dL</p>)}</h6>
         )
        } else
        return(
         null
        )
     }
    
    return (
        <div>
            <h4 onClick={() => onClick(firstName, lastName, hypertension, diabetes)}>{firstName} {lastName}</h4>
            {hypertension ? <h5>Hypertensive</h5> : null}
            {diabetes ? <h5>Diabetic</h5> : null}
            {typeof bloodPressures === 'undefined' ? null : bpList()}
            {typeof bloodSugars === 'undefined' ? null : bsList()}
            <br></br>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Patient