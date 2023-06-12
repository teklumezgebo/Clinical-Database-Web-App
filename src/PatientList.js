import React from "react";
import Patient from "./Patient";
import { useEffect, useState } from "react";



function PatientList() {
    
    const [patientList, setPatientList] = useState()

    useEffect(() => {
        fetch('http://localhost:9292/patients')
        .then(res => res.json())
        .then(list => {
            const listOfPatients = list.map(patient => {
                return (
                    <Patient 
                        key={patient.id} 
                        id={patient.id} 
                        firstName={patient.first_name} 
                        lastName={patient.last_name} 
                        hypertension={patient.hypertension} 
                        diabetes={patient.diabetes} 
                        onDelete={deletePatient}
                    />
                )
            })
            setPatientList(listOfPatients)
        })
    }, [])

    // function filterPatient(id) {
    //     fetch('http://localhost:9292/patients')
    //     .then(res => res.json())
    //     .then(list => {
    //         const filteredList = list.filter(patient => patient.id !== id)
    //         const filteredListOfPatients = filteredList.map(patient => {
    //             return (
    //                 <Patient key={patient.id} id={patient.id} firstName={patient.first_name} lastName={patient.last_name} hypertension={patient.hypertension} diabetes={patient.diabetes} onDelete={deletePatient}/>
    //             )
    //         })
    //         setPatientList(filteredListOfPatients)
    //     })
    // }

    function deletePatient(id) {
        fetch(`http://localhost:9292/patients/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            const filteredList = patientList.filter(patient => patient.props.id !== id)
            setPatientList(filteredList)
        })
    }

    

    return(
        <div>
            {patientList}
        </div>
    )
}

export default PatientList