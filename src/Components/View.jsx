import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function View() {

  const {id}=useParams()
 console.log(id);
const [anEmployee,setAnEmployee] = useState() //particular employee details
//api call to fetch particular employee
const fetchEmployee=async()=>{
  const response = await axios.get('http://localhost:8000/getAnEmployee'+id)
  console.log(response.data.employee);
  setAnEmployee(response.data.employee)
}
console.log(anEmployee);
useEffect(()=>{
  fetchEmployee()
},[])
  


  return (
    <>
      <div className="container">
        <h3 className="text-center m-3">Update Employee</h3>
        <div className="form">
          <div className="w-50" style={{ marginLeft: "300px" }}>
            <MDBInput
             
              label="Id"
              id="formControlLg"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
            
              label="Name"
              id="formControlDefault"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
             
              label="Age"
              id="formControlSm"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
             
              label="Designation"
              id="formControlSm"
              type="text"
              size="lg"
            />
            <br />
            <MDBInput
             
              label="Salary"
              id="formControlSm"
              type="text"
              size="lg"
            />
            <br />
            <div className=" my-5">
              <Link to={"/"}>
                <MDBBtn style={{ marginRight: "100px" }}> Back To Home</MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }

export default View