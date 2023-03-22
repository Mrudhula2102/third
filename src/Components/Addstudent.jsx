import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
    var [students,setstudents]=useState({
        id:"",
        name:"",
        grade:""

    })
    
    const handlechange =(e)=>{
        const{name,value}=e.target
        setstudents({...students,[name]:value})
        console.log(students)
    }
    const inputhandle =()=>{
        console.log("Button clicked");
        axios.post("http://localhost:3001/students",students)
        .then(response=>{
            alert("Successfully Added")
        })
        .catch(error=>{
            alert("Failed")
        })
    }
  return (
    <div>
        <br></br>
      <Typography variant='h4'> Enter Student Details </Typography><br></br>
      <TextField variant='standard' color='primary' label='Id' 
      name='id' value={students.id} onChange={handlechange}></TextField>
      <br></br><br></br>
      <TextField variant='standard' color='primary' label='Name'
      name='name' value={students.name} onChange={handlechange}></TextField>
      <br></br><br></br> 
      <TextField variant='standard' color='primary' label='Grade'
      name='grade' value={students.garde} onChange={handlechange}></TextField> 
      <br></br><br></br>
      <Button variant='contained' color='secondary' 
      onClick={inputhandle}>submit</Button>
    </div>
  )
}

export default Addstudent
