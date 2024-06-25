import React from "react";
import {AppBar, IconButton, Toolbar, Typography, Stack, Button, Menu, MenuItem} from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const MuiNavbar=()=>{
    const [anchorEl,setAnchor]=useState<null | HTMLElement>(null)
    const open= Boolean(anchorEl)
    const handleClose = ()=>{
        setAnchor(null)
    }
    const handleClick =(event:React.MouseEvent<HTMLButtonElement>)=>{
      setAnchor(event.currentTarget)
    }
    return(
     <AppBar position="static">
           <Toolbar>
            <IconButton size="large" edge='start' color="inherit">
                <RestaurantMenuIcon/>
            </IconButton>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}>
                Telugu Ruchulu
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Menu</Button>
                <Button color="inherit" onClick={handleClick} endIcon={<KeyboardArrowDownIcon/>}>Caterings</Button>
                <Button color="inherit">About</Button>
            </Stack>

            <Menu id="resources-menu" anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{
                vertical:"bottom", horizontal:"right"}} transformOrigin={{vertical:"top", horizontal:"right"}}>
              <MenuItem onClick={handleClose}>Party</MenuItem>
              <MenuItem onClick={handleClose}>Marriage</MenuItem>
            </Menu>
           </Toolbar>
     </AppBar>
    );
};

export default MuiNavbar;