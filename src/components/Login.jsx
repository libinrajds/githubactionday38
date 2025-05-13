import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <div style={{marginTop:'10%', marginLeft:'40%'}}>
        <div>
      <TextField variant='outlined'label='UserName' color='primary'></TextField>
      </div>
      <br />
      <div>
      <TextField variant='outlined'label='Password' color='primary'></TextField>
      </div>
      
      <br />
      <Button color='secondary' variant='contained'>Login</Button>
    </div>
    </div>
  )
}

export default Login
