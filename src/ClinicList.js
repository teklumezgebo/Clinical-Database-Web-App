import React from "react";
import Clinic from "./Clinic";

function ClinicList({ clinicList }) {
    return (
        <div>
            {clinicList.map(clinic => {
                return (
                    <Clinic 
                    key={clinic.id} 
                    id={clinic.id} 
                    name={clinic.name} 
                    location={clinic.location}
              />
                )
            })}
        </div>
    )
}

export default ClinicList