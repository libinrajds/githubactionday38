import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Resister = () => {
    const [my_name,setname]=useState('Libinraj');
const [count,setCount]=useState(0);
    function changeName() {
        setName("Rishan")
    }
    function counter() {
        setCount(count+1);
    }

  return (
    <div style={{marginTop:'10%', marginLeft:'40%'}}>
        <h4>Welcome {my_name} to React JS programming</h4>
        <div>
      <TextField variant='outlined'label='FirstName' color='primary'></TextField>
      </div>
      <br />
      <div>
      <TextField variant='outlined'label='Email' color='primary'></TextField>
      </div>
      <br />
      <div>
      <TextField variant='outlined'label='Password' color='primary'></TextField>
      </div>
      <br />
      <div>
      <TextField variant='outlined'label='Mobile No.' color='primary'></TextField>
      </div>
      <br />
      <Button color='secondary' variant='contained' onClick={changeName}>Register</Button>
      <br /><br />
      <Button color='success' variant='contained' onClick={counter} >count</Button>
      <p>The count was clicked by {count} times </p>

    </div>
    
  )
}

export default Resister
