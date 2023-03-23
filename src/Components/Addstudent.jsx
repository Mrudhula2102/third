import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var [students,setstudents]=useState(props.data)
        console.log("Add page props"+props.data)
    
    const handlechange =(e)=>{
        const{name,value}=e.target
        setstudents({...students,[name]:value})
        console.log(students)
    }
    const inputhandle =()=>{
        console.log("Button clicked");
        console.log(students);
        if(props.method === "post")
        axios.post("http://localhost:3005/students",students)
        .then(response=>{
            alert("Successfully Added")
        })
        .catch(error=>{
            alert("Failed")
        })
        else if(props.method==="put")
        axios.put("http://localhost:3005/students/"+students.id,students)
        .then((response)=>{
          console.log("put data"+response.data)
          alert("success")
          window.location.reload(false);
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <div align='center'>
        <br></br>
      <Typography variant='h4'> Enter Student Details </Typography><br></br>
      <TextField variant='standard' color='primary' label='Id' 
      name='id' value={students.id} onChange={handlechange}></TextField>
      <br></br><br></br>
      <TextField variant='standard' color='primary' label='Name'
      name='name' value={students.name} onChange={handlechange}></TextField>
      <br></br><br></br> 
      <TextField variant='standard' color='primary' label='Grade'
      name='grade' value={students.grade} onChange={handlechange}></TextField> 
      <br></br><br></br>
      <Button variant='contained' color='secondary' 
      onClick={inputhandle}>submit</Button>
    </div>
  )
}

export default Addstudent
