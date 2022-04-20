import { styled } from '@mui/material';
import { Mail, NotificationAddOutlined, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography,  Divider, Menu, MenuItem, ListItemIcon, IconButton, Tooltip } from '@mui/material'
import { PersonAdd, Settings, Logout} from '@mui/icons-material'
import { Box, flexbox } from '@mui/system'
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: "10px",
  width:'40%'

}));

const Icons = styled(Box)(({theme}) => ({
 display: 'none',
 gap: '20px',
 alignItems: 'center',
 [theme.breakpoints.up('sm')]:{
   display: 'flex'
 }
}));

const UserIcon = styled(Box)(({theme}) => ({
 display: 'flex',
 gap: '10px',
 alignItems: 'center'
}))

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
       <AppBar position='sticky'>
         <StyledToolbar>
           <Typography variant='h6' sx={{display: {xs: "none", sm:"block"}}}>Lam </Typography>
           <Pets sx={{display: {xs: "block", sm:"none"}}}/>
           <Search>
             <InputBase placeholder='search'/>
           </Search>
           <Icons>
           <Badge badgeContent={4} color="primary">
             <Mail color="action" />
         </Badge>
           <Badge badgeContent={4} color="primary">
             <NotificationAddOutlined color="action" />
         </Badge>
           </Icons>
           <Tooltip title="Account Settings">
           <UserIcon
           onClick={handleClick}
           size='small'
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup='true'
           aria-expanded={open ? 'true' : undefined}
           >
           <Avatar sx={{ bgcolor: 'red' }}>M</Avatar>
           <Typography variant='span'>Wilson</Typography>
           </UserIcon>
           </Tooltip>
           
          </StyledToolbar>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
       </AppBar>
  )
}

export default Navbar