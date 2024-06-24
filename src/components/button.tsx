import React, { useState, MouseEvent } from "react";
import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import "../index.css";
import SendIcon from '@mui/icons-material/Send';
const MuiButton =()=>{
    const [formats, setFormats]=useState<string[]>([])
    console.log({formats})
    const handleFormatChange=(_event: React.MouseEvent<HTMLElement>, updatedFormats: string[])=>{
      setFormats(updatedFormats);
    }    
    return(
        <Stack>
         <Stack spacing={2} direction='row'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
         </Stack>
         <br/>
         <Stack spacing={4} direction='row'>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="info">Information</Button>
            <Button variant="contained" color="success">Success</Button>
         </Stack>
        <br/>
         <Stack display='block' direction='row' spacing={4}>
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
         </Stack>
         <br/>
         <Stack spacing={4} direction='row' >
            <Button color="error" variant="contained" startIcon={<SendIcon/>}>Send</Button>
            <Button color="success" variant="contained" endIcon={<SendIcon/>}>Send</Button>
         <IconButton color="primary" size="small">
            <SendIcon/>
         </IconButton>
        </Stack>
        
        <br/>
        <Stack direction='row'>
         <ButtonGroup variant="contained" color='secondary'>
            <Button onClick={()=> alert("Clicked the Left")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
         </ButtonGroup>
         </Stack>
        <br/>
        <Stack direction='row'>
          <ToggleButtonGroup value={formats} onChange={handleFormatChange} size="small" color="primary" >
           <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
           <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
           <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
           </ToggleButtonGroup>
        </Stack>

        </Stack>
       
    );
};

const button=(
    <>
    <MuiButton/>
    </>
);
export default button;
