// Import React, useState for state management, and useEffect for side effects
import React, { useState, useEffect } from "react";

// Import the ContactForm and TileList components
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

// 3.1 ContactsPage stateful component that receives 2 props: Current list of contacts and callback function adding a new contact
export const ContactsPage = ({contacts, addContact}) => {
  // State variables for the form fields, initialized as empty strings. Keep track of local state values.
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // 3.3 Check for duplicates
  const [isDuplicate, setIsDuplicate] = useState(false);

  // 3.4 Only add a new contact on form submission if it does not duplicate an existing contact’s name
  useEffect (()=> {
    const nameExists = contacts.some((contact) => contact.name === name);
    setIsDuplicate(nameExists);
  }, [name, contacts]);

  // 3.5 A successful submission should clear the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add contact info and clear data if the contact name is not a duplicate
    if(!isDuplicate) {
      addContact(name, phone, email);
      setName("");    //Clear name field
      setPhone("");   //Clear phone field
      setEmail("");   //Ckear email field
    } else {
      alert("This contact already exists!"); 
      }
  };

  /* Using hooks, check for contact name in the contacts array variable in prop*/

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {/* 3.6 Render the ContactForm component with necessary props */}
        <ContactForm 
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            emai={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
        />
      </section>

      <hr />

      <section>
        <h2>Contacts</h2>
          {/* 3.7 Render the TileList component with the contacts array */}
          <TileList 
            items={contacts}
          />
      </section>
    </div>
  );
};
