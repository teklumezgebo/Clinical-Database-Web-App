import React from "react";
import Patient from "./Patient";
import { useEffect, useState } from "react";



function PatientList() {
    
    const [patientList, setPatientList] = useState(null)

    useEffect(() => {
        fetch('http://localhost:9292/patients')
        .then(res => res.json())
        .then(list => {
            const listOfPatients = list.map(patient => {
                <Patient firstName={patient.first_name} lastName={patient.last_name} hypertension={patient.hypertension} diabetes={patient.diabetes}/>
            })
            setPatientList(listOfPatients)
        })
    }, [])

    return(
        <div>
            {patientList}
        </div>
    )
}

export default PatientList