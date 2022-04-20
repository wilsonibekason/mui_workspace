import React from 'react'
import {Tooltip} from '@mui/material'
import {IconButton, DeleteIcon}from '@mui/icons-material';

const Add = () => {
  return (
   <>
   <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>
   </>
  )
}

export default Add