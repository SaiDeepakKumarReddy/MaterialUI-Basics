import React from "react";
import { Stack, Box, TextField, MenuItem} from "@mui/material";
import "../index.css";
import { useState } from "react";
const MuiSelect =()=>{

    const [country, setCountry]=useState("")
    console.log({country})
    const updateSelect=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setCountry(event?.target.value as string)
    }

    const [skills,setSkill]=useState<string[]>([])
    console.log({skills})
    const selectSkills=(event:React.ChangeEvent<HTMLInputElement>)=>{
         const value=event.target.value
        setSkill(typeof value ==='string' ? value.split(','): value)
    }
    return(
       <Stack spacing={4}>
          <Box width='250px'>
            <TextField label="Select Country" select value={country} onChange={updateSelect} fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
          </Box>

          <Box width='250px'>
            <TextField label="Select Skills" select value={skills} onChange={selectSkills} fullWidth SelectProps={{multiple:true}}>
                <MenuItem value='ml'>Machine Learning</MenuItem>
                <MenuItem value='ds'>Data Structures</MenuItem>
                <MenuItem value='ms'>Mern Stack</MenuItem>
            </TextField>
          </Box>
       </Stack>
    );
};

const selectType =(
    <>
    <MuiSelect/>
    </>
);

export default selectType;