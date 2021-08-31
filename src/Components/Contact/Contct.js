import React from "react";

const Contact = ({
  name,
  street,
  suite,
  city,
  email,
  phone,
  company,
  website,
}) => {
  return (
    <>
      <div className='contact-container'>
        <h3>Name: {name}</h3>
        <p>Phone: {phone}</p>
        <p>
          Address: {suite}, {street} St,
        </p>
        <p>{city}</p>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Website: {website}</p>
      </div>
    </>
  );
};

export default Contact;
