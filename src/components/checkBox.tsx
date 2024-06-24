import React from "react";
import "../index.css";
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const MuiCheckBox =()=>{
    const [checker,setCheck]=useState(false)
    console.log({checker})
    const checkChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
      setCheck(event.target.checked)
    }

    const [skills,setSkills]=useState<string[]>([])
    console.log({skills})
    const changeSkills =(event:React.ChangeEvent<HTMLInputElement>)=>{
      const index=skills.indexOf(event.target.value)
      if (index===-1){
        setSkills([...skills,event.target.value])
      }
      else{
        setSkills(skills.filter((skill)=>(skill)!==event.target.value))
      }
      
    }
    return(
     <Box>
        <Box>
            <FormControlLabel label ="I accept terms and conditions" control={<Checkbox checked={checker} onChange={checkChange}/>}/>
        </Box>

        <Box>
            <Checkbox 
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon/>}/>
        </Box>

        <Box>
        <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
            <FormControlLabel label ="HTML" value="html" control={<Checkbox checked={skills.includes("html")} onChange={changeSkills}/>}/>
            <FormControlLabel label ="CSS" value="css" control={<Checkbox  checked={skills.includes("css")} onChange={changeSkills}/>}/>
            <FormControlLabel label ="JS" value="js" control={<Checkbox  checked={skills.includes("js")} onChange={changeSkills}/>}/>
            </FormGroup>
        </FormControl>  
        </Box>
     </Box>
    );
};

const checkBox =(
    <>
    <MuiCheckBox/>
    </>
);

export default checkBox;