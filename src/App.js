import React, { useState }from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import AppointmentsPage  from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

function App() {
  // 2.1 Keep track of the contacts and appointments data, each being an array of objects
  const [contacts, setContacts] = useState([]); // State to store the list of contacts (starts as an empty array)
  const [appointments,setAppointments] = useState([]); // State to store the list of appointments (starts as an empty array)
  
  // 2.2 Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
  const addContact = (name, phone, email) => {
    //Update contacts by adding the new contact while keeping the existing ones
    setContacts((prevContacts) => [
      ...prevContacts,            // Copy the existing contacts
      { name, phone, email },     // Add the new contact object
    ]);
  };

  // 2.3 Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments
  const addAppointment = (name, contact, date, time) => {
    // Update appointments by adding the new appointment while keeping the existing ones
    setAppointments((prevAppointments) => [
      ...prevAppointments,              // Copy the existing appointments
      {name, contact, date, time },     // Add the new appointment object
    ]);
  };

  // Create a router with defined routes for the application
  const router = createBrowserRouter(createRoutesFromElements(

    // The main route path "/" renders the Root component
    <Route path="/" element={ <Root/> }>

      {/* When the user visits "/", automatically navigate to the contacts page */}
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>

        {/* 2.4 Route for the ContactsPage, passing the contacts state and addContact function */}
        <Route 
          path={ROUTES.CONTACTS} 
          element={ 
            <ContactsPage 
              contacts={contacts} // Pass the current list of contacts as a prop to Contacts page
              addContact={addContact} // Pass the function to add a new Contacts as a prop to ContactsPage
            /> 
          }
        />

        {/* 2.5 Route for the AppointmentsPage, passing the appointments, contacts, and addAppointment function */}
        <Route 
          path={ROUTES.APPOINTMENTS} 
          element={ 
            <AppointmentsPage 
              appointments={appointments} // Pass the current list of appointments as a prop to AppointmentsPage
              contacts={contacts} // Pass the current list of contacts as a prop to AppointmentsPage
              addAppointment={addAppointment} // Pass the function to add a new appointment as a prop to AppointmentsPage
            /> 
          }
        />
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
