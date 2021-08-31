import React, { useState, useEffect } from "react";
import Contact from "./Components/Contact/Contct";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

// API
const API = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const searchHandler = () => {};
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(API);
      const response = await data.json();
      console.log(response);
      setContacts(response);
    }
    fetchData();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <div className='contacts-section'>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            {...contact}
            street={contact.address.street}
            suite={contact.address.suite}
            city={contact.address.city}
            company={contact.company.name}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
