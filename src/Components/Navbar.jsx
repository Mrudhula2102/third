import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            React Dom
          </Typography>
          <Button color="inherit"><Link to='/Read' style={{color:'white'}}>Students</Link></Button>
          <Button color="inherit"><Link to='/Teacher' style={{color:'white'}}>Teachers</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
 
    </div>
  )
}

export default Navbar
