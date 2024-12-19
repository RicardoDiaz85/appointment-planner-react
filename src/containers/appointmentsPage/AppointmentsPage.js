// Import React and useState for state management
import React, { useState } from "react";

// Import the AppointmentForm and TileList components
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

// Stateful AppointmentsPage component
const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  // State variables for the form fields, initialized as empty strings
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the addAppointment function passed via props to add a new appointment
    addAppointment(name, contact, date, time);

    // Reset the form fields to their default values
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* Render the AppointmentForm and pass the necessary props */}
        <AppointmentForm
          name={name}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>

      <hr />

      <section>
        <h2>Appointments</h2>
        {/* Render the TileList with the list of appointments */}
        <TileList items={appointments} />
      </section>
    </div>
  );
};

export default AppointmentsPage;