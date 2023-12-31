import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
    return (
        <div className="link-container">
            <Link to='/'>Home</Link>
            <Link to='/patients'>Add Patient</Link>
            <Link to='/searchpatient'>Search For Patient</Link>
            <Link to='/patientvitals'>Patient Vitals</Link>
            <Link to='/clinicians'>Clinicians</Link>
            <Link to='/clinics'>Clinics</Link>
        </div>
    )
}

export default Navbar