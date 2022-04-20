import { Box } from '@mui/material'
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


const Sidebar = () => {
  const [open, setOpen] =  React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <Box bgcolor={'skyblue'}  p={2} flex={1} sx={{display: {xs: 'none', sm: 'block'}}}>
       
    </Box>
  )
}

export default Sidebar