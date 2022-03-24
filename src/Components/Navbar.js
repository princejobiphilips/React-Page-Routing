import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (

      <div>
          <AppBar>
              <Toolbar>
                  <Typography style={{padding:5}}> Indian Railways </Typography>
                  <Link to="/book"><Typography color='secondary' style={{padding:5}}>BOOK Trains</Typography></Link>
                  <Link to="/login"><Typography color='secondary' style={{padding:5}}>LOGIN</Typography></Link>
                  <Link to="/signup"><Typography color='secondary' style={{padding:5}}>SIGNUP</Typography></Link>
                  <Link to="/trains"><Typography color='secondary' style={{padding:5}}>Trains</Typography></Link>
              </Toolbar>
          </AppBar>
      </div>
    )
  }
}
