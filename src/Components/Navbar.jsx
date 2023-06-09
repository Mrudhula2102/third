import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         </IconButton>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nirmala College of Arts & Science
          </Typography>
          <Button color="inherit"><Link to='/Read' style={{color:'white'}}>View</Link></Button>
          <Button color="inherit"><Link to='/Addstudent' style={{color:'white'}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
 
    </div>
  )
}

export default Navbar
