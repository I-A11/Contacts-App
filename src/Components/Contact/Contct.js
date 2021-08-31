import React from "react";

const Contact = ({ name, address, email, phone, company, website }) => {
  return (
    <>
      <div className='contact-container'>
        <h3>Name: {name}</h3>
        <p>Phone: {phone}</p>

        {/* <p>Address:{address}</p> */}

        <p>Email: {email}</p>
        {/* <p>{company}</p> */}
        <p>Website: {website}</p>
      </div>
    </>
  );
};

export default Contact;
