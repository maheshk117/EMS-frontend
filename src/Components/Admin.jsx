import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
// import { deleteEmployee } from '../../../ems-backend/services/logic';

function Admin() {

  const [allEmployees,setAllEmployees] = useState([])
  const fetchData = async()=>{
    const response= await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee);
    setAllEmployees(response.data.employee)
  }
console.log(allEmployees);

const deleteEmp=async(id)=>{
  const response = await axios.delete('http://localhost:8000/deleteEmployee'+id)
  console.log(response);
  alert(response.data.message)
  fetchData()
}
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='container'>
     <h3 className='text-center m-3'>Employee Management System</h3>
     <p style={{textAlign:'justify'}}>An employee management system is a comprehensive platform that allows businesses to efficiently manage their workforce, streamline HR processes, and optimize overall productivity. Typically, these systems incorporate a range of functionalities, including but not limited to employee data management, payroll processing, attendance tracking, performance evaluation, and training administration.These systems play a crucial role in modern organizational structures, enabling HR professionals and managers to centralize employee-related information, automate routine tasks, and ensure compliance with labor regulations. By digitizing and automating various aspects of workforce management, such as leave requests, timesheets, and performance appraisals, these systems help businesses save time, reduce errors, and enhance transparency in their operations.</p>

     <Link to={'/add'} >
        {/* redirected to home page */}
        <button className='btn btn-info m-4'>Add</button>
     </Link>

     <div className="table">
     <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>No:</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allEmployees.map(item=>( <tr>
            <th scope='row'>{item.id}</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.salary}</td>
            <td><div className='d-flex justify-content-around'>
              <Link to ={'edit/'+item.id}>
              <button  className='btn'><i className='fa-solid fa-pen text-success'></i></button></Link>
              <button  className='btn'><i className='fa-solid fa-eye text-primary'></i></button>
              <button onClick={()=>deleteEmp(item.id)}  className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>
              </div></td>
          </tr>))
        }
       
       
      </MDBTableBody>
    </MDBTable>
        
     </div>
    </div>
    
  )
}

export default Admin