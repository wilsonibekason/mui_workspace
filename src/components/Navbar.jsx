import styled from '@emotion/styled'
import { Pets } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material'
import { flexbox } from '@mui/system'
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: 'white'
}))

const Navbar = () => {
  return (
       <AppBar position='sticky'>
         <StyledToolbar>
           <Typography variant='h6' sx={{display: {xs: "none", sm:"block"}}}>Lam </Typography>
           <Pets sx={{display: {xs: "block", sm:"none"}}}/>
           <Search>SErkkk</Search>
          </StyledToolbar>
       </AppBar>
  )
}

export default Navbar