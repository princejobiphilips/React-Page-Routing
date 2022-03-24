import { Typography, Grid, TextField, Button, Text } from '@material-ui/core'
import React, { Component } from 'react'

export default class History extends Component {
  render() {
    return (
      <div>
        <Grid container style={{padding:60}}>
        <Grid style={{padding:5}} item xs={12} sm={12} md={12} lg={12}>
        <Grid  item xs={12} sm={6} md={8} lg={8} xl={8}>
        <TextField style={{marginTop:70}}
        margin='normal'
        fullWidth
        variant='outlined'
        type='text'
        label="Name"/>
    
        <TextField
        margin='normal'
        fullWidth
        variant='outlined'
        type='text'
        label="Mobile No"/>
    
        <TextField
        margin='normal'
        fullWidth
        name="date"
        variant='outlined'
        type='text'
        label="Aadhar No"/>
    
        <TextField
        margin='normal'
        fullWidth
        name="remarks"
        variant='outlined'
        type='text'
        label="Email ID"/>

        <TextField
        margin='normal'
        fullWidth
        name="remarks"
        variant='outlined'
        type='password'
        label="Password"/>

        <TextField
        margin='normal'
        fullWidth
        name="remarks"
        variant='outlined'
        type='password'
        label="Confirm Password"/>
    
        <Button
        margin='normal'
        color='secondary'
        fullWidth
        variant='contained'>
          SIGNUP
        </Button>
        </Grid>
            </Grid>
          </Grid>
      </div>
    )
  }
}
