import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Teacher = () => {
    var [teachers,setteachers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/teachers")
        .then(response=>{
            console.log(response.data)
            setteachers(teachers=response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <Typography>Teachers list</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Class</TableCell>
              </TableRow>
           </TableHead>
            <TableBody>
              {teachers.map((value,index)=>{
                 return<TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.class}</TableCell>
                </TableRow>
            })}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Teacher

