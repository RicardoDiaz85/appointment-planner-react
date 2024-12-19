// Import React for building the component
import React from "react";

// Import the ContactPicker component
import ContactPicker from "../contactPicker/ContactPicker";

// Function to get today’s date in YYYY-MM-DD format
const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

// Stateless AppointmentForm component
const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the appointment title/name */}
      <input
        type="text"
        placeholder="Appointment Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Date input field with min attribute set to today’s date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />

      {/* Time input field */}
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      {/* ContactPicker component for selecting a contact */}
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        name="contact"
      />

      {/* Submit button to add the appointment */}
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
