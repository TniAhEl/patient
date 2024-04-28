import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { signOut } from "firebase/auth";
import { useAuthValue } from "../../../context/AuthContext";
import user from "../../images/user.png";
// import profile from './Patient/components/PatientProfile'
const PatientNavbar = () => {
  const { currentUser } = useAuthValue(); // Get the current user
  const history = useHistory(); // Access history object

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementsByClassName(sectionId)[0]; // Get the section by class name
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Scroll smoothly to the section
      });
    }
  };

  const handleAppointment = () => {
    history.push("/AppointmentA"); // Navigate to the appointment page
  };

  const handlePatientProfile = () => {
    history.push("/PatientProfile"); // Navigate to the profile page
  };

  const handleSignOut = () => {
    signOut(currentUser); // Sign out the user
    history.push("/"); // Navigate to the home page
  };
  return (
    <div className="header">
      <div className="container">
        <nav>
          <div className="menu-icon">
            <h2 className="logo" onClick={() => handleScrollToSection("patient")}>
              HCMUT
            </h2>
            <div className="menu-icon-control">
              <p onClick={() => handleScrollToSection("patient")}>Home</p>
              <p onClick={() => handleScrollToSection("services")}>Services</p>
              <p onClick={() => handleScrollToSection("about")}>About</p>
              <p onClick={() => handleScrollToSection("doctors")}>Doctors</p>
              <p onClick={handleAppointment}>Appointment</p>
            </div>
            <div className="user">
              <img className="user-icon" src={user} alt="user" />
              <div className="dropdown">
                <p onClick={() => handlePatientProfile()}>Profile</p>
                <p onClick={handleSignOut}>Sign Out</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default PatientNavbar;
