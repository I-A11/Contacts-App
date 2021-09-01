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
        <i class='fas fa-user-circle fa-4x'></i>
        <h3>
          <span>Name:</span> {name}
        </h3>
        <p>
          <span>Phone:</span> {phone}
        </p>
        <p>
          <span>Address:</span> {suite}, {street} St,
        </p>
        <p>{city}</p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Company:</span> {company}
        </p>
        <p>
          <span>Website:</span> {website}
        </p>
      </div>
    </>
  );
};

export default Contact;
