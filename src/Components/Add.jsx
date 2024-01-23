import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {

const navigate=useNavigate()

  const [id,setId]=useState('');
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [designation,setDesignation]=useState('');
  const [salary,setSalary]=useState('');

const handleAdd=async(e)=>{

  const body ={id,name,age,designation,salary}
   await axios.post('http://localhost:8000/addEmployee',body).then((response)=>{
    alert(response.data.message)
    navigate('/')//redirected to home page
    console.log(id,name,age,designation,salary);
  })
 .catch((error)=>{
  alert("Enter Unique Employee id")
 })

}
  return (
    <>
     <div className="container">
      <h3 className='text-center m-3'>Add Employee</h3>
      <div className="form">
      <div className='w-50' style={{marginLeft:'300px'}}>
      <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput  onChange={(e)=>setName(e.target.value)} label='Name' id='formControlDefault' type='text' size='lg' />
      <br />
      <MDBInput  onChange={(e)=>setAge(e.target.value)} label='Age' id='formControlSm' type='text' size='lg' />
      <br />
      <MDBInput  onChange={(e)=>setDesignation(e.target.value)} label='Designation' id='formControlSm' type='text' size='lg' />
      <br />
      <MDBInput  onChange={(e)=>setSalary(e.target.value)} label='Salary' id='formControlSm' type='text' size='lg' />
      <br />
      <div className=' my-5'>
        <Link to={'/'}>
        <MDBBtn style={{marginRight:'100px'}}> Back To Home</MDBBtn>
        </Link>
        
     <MDBBtn onClick={(e)=>handleAdd(e)}>Add</MDBBtn>
     

      </div>
    </div>
      </div>
     </div>
    </>
  )
}

export default Add