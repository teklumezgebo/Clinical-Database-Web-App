import React, {useState, useEffect} from "react";

function SearchedPatient({ firstName, lastName, hypertensive, diabetic, pageLoaded }) {
    const [bloodPressures, setBloodPressures] = useState('')
    const [bloodSugars, setBloodSugars] = useState('')
    
    useEffect(() => {
        if (pageLoaded) {
            fetch(`http://localhost:9292/patientbp/${firstName}/${lastName}`)
            .then(res => res.json())
            .then(listofBloodPressures => {
                const bpList = listofBloodPressures.map(bloodPressure => {
                    return (
                        <p key={bloodPressure.id}>{bloodPressure.sysolic}/{bloodPressure.diastolic}</p>
                    )
                })
                setBloodPressures(bpList)
            })
        } 
    }, [pageLoaded])

    useEffect(() => {
        if (pageLoaded) {
            fetch(`http://localhost:9292/patientbs/${firstName}/${lastName}`)
            .then(res => res.json())
            .then(listofBloodSugars => {
                const bsList = listofBloodSugars.map(bloodSugar => {
                    return (
                        <p key={bloodSugar.id}>{bloodSugar.blood_sugar} mg/dL</p>
                    )
                })
                setBloodSugars(bsList)
            })
        } 
    }, [pageLoaded])

    return(
        <div>
            <h2>{firstName} {lastName}</h2>
            {hypertensive ? <p>This patient is hypertensive.</p> : null}
            {diabetic ? <p>This patient is diabetic.</p> : null}

            <div>
                <h4>Blood Pressures</h4>
                {bloodPressures}
            </div>

            <div>
                <h4>Blood Sugars</h4>
                {bloodSugars}
            </div>
        </div>
    )
}

export default SearchedPatient