import { Box, Switch } from '@mui/material'
import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder'


const Sidebar = ({mode, setMode}) => {
  const [open, setOpen] =  React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <Box  p={2} flex={1} sx={{display: {xs: 'none', sm: 'block'}}}>
      <Box position='fixed'>
      <List
    //   subheader={
    //    <ListSubheader component="div" id="nested-list-subheader">
    //    Nested List Items
    //  </ListSubheader>
    //   } 
       
      >
        <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <Switch  onClick={(e) => setMode(mode === 'light' ? 'dark' : 'light')}/>
      </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse 
      in={open}
      timeout='auto'
      unmountOnExit
      >
        <List 
        component='div'
        disablePadding
        >
          <ListItemButton sx={{pl: 4}}>
          <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='starred' />
          </ListItemButton>

        </List>
      </Collapse>
      </List>
      </Box>
     
    </Box>
  )
}

export default Sidebar