// Import React for building the component
import React from "react";

// Stateless ContactPicker component
const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      {/* Default option */}
      <option value="">No Contact Selected</option>

      {/* Map through contacts and render an option for each contact */}
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

export default ContactPicker;
