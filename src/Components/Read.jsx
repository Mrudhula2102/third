import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent'

const Read = () => {
  var[update,setupdate]=useState(false)
  var[singlevalue,setsinglevalue]=useState([])
    var [students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err)) 
    },[])
    const updatevalue=(value)=>{
      setsinglevalue(value);
      setupdate(true);
    }
    const deletestudent=(id)=>{
      console.log("deleted" +id);
      axios.delete("http://localhost:3005/students/" +id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })

    }
    var finaljsx=
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Grade</TableCell>
          <TableCell>Delete</TableCell>
          <TableCell>Update</TableCell>
        </TableRow>
     </TableHead>
      <TableBody>
        {students.map((value,index)=>{
           return<TableRow>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.grade}</TableCell>
              <TableCell>
                <Button variant='contained' onClick={()=>deletestudent(value.id)}>Delete
                </Button>
              </TableCell>
              <TableCell>
                <Button variant='contained' onClick={()=>updatevalue(value)}>Update</Button>
              </TableCell>
          </TableRow>
      })}
      </TableBody>
    </Table>
  </TableContainer>
  if (update)
  finaljsx=<Addstudent data={singlevalue} method="put"></Addstudent>
  return (
    <div>
      <br></br>
      <br></br>
      {finaljsx}
    </div>
  )
}

export default Read
