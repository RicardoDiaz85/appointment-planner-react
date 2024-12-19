import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    // render a form with onSubmit attributes. 3 controlled inputs elements, one for each piece of data. and a submit buttom
    <form onSubmit ={handleSubmit}>
      {/* Input field for the contact's name */}
      <input
        type="text"
        placeholder= "Name"
        value={name}
        onChange={(e) => setName(e.target.value)} //updates 'name' state on change
        required    // makes field mandatory
      />

      {/* Input field for the contact's phone number with a regex pattern */}
      <input
        type="tel"
        placeholder="Phone (e.g., 123-456-7890)"
        value={phone}             // Controlled input bound to the 'phone' state
        onChange={(e) => setPhone(e.target.value)} // Updates 'phone' state on change
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"       // Pattern for a phone number format like 123-456-7890
        required                  // Makes the field mandatory
      />

      {/* Input field for the contact's email */}
      <input
        type="email"
        placeholder="Email"
        value={email}             // Controlled input bound to the 'email' state
        onChange={(e) => setEmail(e.target.value)} // Updates 'email' state on change
        required                  // Makes the field mandatory
      />

      {/* Submit button to add the contact */}
      <button type="submit">Add Contact</button>

    </form>
  );
};

export default ContactForm;