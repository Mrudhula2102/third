import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    var [students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/students")
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err)) 
    },[])
    const deletestudent=(id)=>{
      console.log("deleted" +id);
      axios.delete("http://localhost:3001/students/" +id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })

    }
  return (
    <div>
      <Typography>Students list</Typography>
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
                      <Button variant='contained'>Update</Button>
                    </TableCell>
                </TableRow>
            })}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Read
