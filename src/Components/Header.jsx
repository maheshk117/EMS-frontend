import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div className=''>  <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <i class="fa-solid fa-user-group fa-beat-fade me-3"></i>
        Employee Management System
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header