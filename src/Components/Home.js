import React from 'react'
import './Home.css'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FaTrash,FaUserEdit,FaUserPlus } from "react-icons/fa";


function Home() {
    const history = useNavigate()

    //Function to edit item
    const handleEdit=(id,empName,age,designation,salary)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("Name",empName)
        localStorage.setItem("Age",age)
        localStorage.setItem("Designation",designation)
        localStorage.setItem("Salary",salary)
    }
    //Function to delete item
    const handleDelete=(id)=>{
        //To get index position
     var index = Employee.map(item=>item.id).indexOf(id);
     //To remove item based on id
     Employee.splice(index,1)
     console.log(Employee);//remaining array
     history('/')
    }

  return (
    <>
        <p className='mt-5'>Employee management system is a practise that helps a manager improve productivity
            and satisfaction in a working enviornment thus listing out the employee details for
            a hassle free data management in the future.
            Employee management system is a practise that helps a manager improve productivity
            and satisfaction in a working enviornment thus listing out the employee details for
            a hassle free data management in the future.
        </p>
        <Link to={'/add'}>
        <Button className='addButton' variant='info'>Add <FaUserPlus/></Button>
        </Link>
        <h3 className='my-5'>List of Employees</h3>
        <Table striped bordered hover variant="warning">
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length>0?
            Employee.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.empName}</td>
                        <td>{item.age}</td>
                        <td>{item.designation}</td>
                        <td>{item.salary}</td>
                        <td>
                            <Link to={'/edit'}>
                                <Button onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)} variant="primary"><FaUserEdit/></Button>{' '}
                            </Link>     
                            <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaTrash/></Button>
                        </td>
                    </tr>
                    )
            }):'No data found'
        }
      </tbody>
    </Table>
    </>
  )
}

export default Home