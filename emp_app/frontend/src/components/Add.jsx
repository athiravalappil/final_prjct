import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    

  return (
    <div>
          <h1>add information</h1>
          <TextField label="name" variant="outlined"/><br></br>
              <TextField label="age" variant="outlined"/><br></br>
                  <TextField label="dep" variant="outlined"/><br></br>
          <TextField label="salary" variant="outlined" /><br></br>
          <Button variant='contained' type='submit'>submit</Button>
              
          
    </div>
  )
}

export default Add
