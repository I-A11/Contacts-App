import React from "react";

const Navbar = ({ term, getSearchTerm }) => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-logo'>
          <i className='far fa-address-card'>
            <span className='contacts'> MY CONTACTS</span>
          </i>
        </div>
        <div className='search'>
          <input
            type='text'
            placeholder='Search'
            value={term}
            onChange={getSearchTerm}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
