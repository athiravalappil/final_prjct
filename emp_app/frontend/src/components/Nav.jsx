import { Button, Typography ,AppBar,Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
          
              <AppBar>
                  <Toolbar>
                      <Typography variant='h6' align='left' sx={{ flexGrow: 3 }}>FRONTEND</Typography>
                      <Link to='/a'>
                          <Button variant='contained'>ADD</Button>
                      </Link>
                  <Link to='/'>
                          <Button variant='contained'>VIEW</Button>
                          
                  </Link>
                  
                 
                  </Toolbar>
              </AppBar>
              
    </div>
  )
}

export default Nav
